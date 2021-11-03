import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { authSuccessSelector } from '../../selectors/authSelectors'
import LoginForm from './LoginForm'
import styles from './../common/Common.module.css'

const Login: React.FC = () => {
  const authSuccess = useSelector(authSuccessSelector)

  return authSuccess ? (
    <Redirect to="/home" />
  ) : (
    <div className={styles.main}>
      <h2>Рад приветствовать на этом сайте!</h2>
      <p>
        Чтобы получить доступ к контенту этого сайта и просматривать его
        содержимое, заполните, пожалуйста, следующие поля:
      </p>
      <LoginForm />
    </div>
  )
}

export default Login
