import React, { useState } from 'react'
import useLogin from '@/services/hooks/auth/useLogin';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const credentials = {
    email: email,
    password: password
  };


  const { loading, error, loginUser } = useLogin();

  const tryLogin = async () => {

    try {
      const res = await loginUser(credentials);

      const token = res.data;
      const status = res.status;

      localStorage.setItem('token', token)

      const payload = JSON.parse(atob(token.split('.')[1]));
      const userId = payload.sub;

      if (status == 200) {
        navigate("/dashboard");
      }


    } catch (err) {
      console.log(err);
    }

  };




  return (
    <>
      <h1>Log in, please.</h1>

      <label htmlFor=""> Email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label> <br />

      <label htmlFor=""> Contraseña
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
      </label>

      <button onClick={tryLogin}>Enviar</button>

    </>
  )
}

export default Login