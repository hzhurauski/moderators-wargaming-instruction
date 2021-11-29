import React, { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { isAuthSelector } from 'selectors/authSelectors'
import LoginForm from 'components/login/LoginForm'
import styles from 'components/page/Page.module.css'

const Login: React.FC = () => {
  return useMemo(() => {
    return (
      <div className={styles.main}>
        <h2>Рад приветствовать на этом сайте!</h2>
        <p>
          Чтобы получить доступ к контенту этого сайта и просматривать его
          содержимое, заполните, пожалуйста, следующие поля:
        </p>
        <LoginForm />
      </div>
    )
  }, [])
}

export default Login
