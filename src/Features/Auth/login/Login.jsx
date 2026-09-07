import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from '@/Features/Auth/Auth.module.css'

import Btn1 from '@/Components/Buttons/Btn1/Btn1';
import key from '@/Assets/icons/key.svg'
import emailWhite from '@/Assets/icons/emailWhite.svg'

import useLogin from '@/Features/Auth/login/useLogin';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const credentials = {
    email: email,
    password: password
  };


  const { loginUser } = useLogin();

  const tryLogin = async () => {

    try {
      const res = await loginUser(credentials);

      const token = res.data;
      const status = res.status;

      localStorage.setItem('token', token)

      if (status == 200) {
        navigate("/dashboard");
      }

    } catch (err) {
      console.log(err);
    }

  };




  return (
    <>

      <div className={styles.secondSection}>
        <h1>Hey, Welcome!</h1>

        <form action="" className={styles.form}>

          <label htmlFor="">
            <p>Email <img src={emailWhite} alt="" /></p>
            <input
              type="text"
              value={email}
              placeholder='jane@gmail.com'
              onChange={(e) => setEmail(e.target.value)}
            />
          </label> <br />

          <label htmlFor="">
            <p>Password  <img src={key} alt="" /></p>
            <input
              type="password"
              value={password}
              placeholder='**************'
              onChange={(e) => setPassword(e.target.value)} />
          </label>

          <span onClick={tryLogin}>
            <Btn1 text1="Log In" />
          </span>


        </form>

      </div>
    </>
  )
}

export default Login