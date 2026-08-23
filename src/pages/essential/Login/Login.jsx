import React, { useState } from 'react'
import useLogin from '@/services/hooks/useLogin';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const credentials = {
    email: email,
    password: password
  };


  const { loading, error, loginUser } = useLogin();

  const tryLogin = async () => {

    try {
      const token = await loginUser(credentials);

      localStorage.setItem('token', token)

      const payload = JSON.parse(atob(token.split('.')[1]));
      const userId = payload.sub;
      console.log(userId);


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