import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { isAuthSelector } from 'selectors/authSelectors'
import LoginForm from 'components/login/LoginForm'
import styles from 'components/common/Common.module.css'

const Login: React.FC = () => {
  const isAuth = useSelector(isAuthSelector)

  return useMemo(() => {
    return isAuth ? (
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
  }, [isAuth])
}

export default Login
