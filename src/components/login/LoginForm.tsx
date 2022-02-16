import { Form } from 'antd'
import LoginButton from 'components/login/LoginButton'
import LoginIsRemeberMe from 'components/login/LoginIsRememberMe'
import LoginName from 'components/login/LoginName'
import LoginPassword from 'components/login/LoginPassword'
import React, { FC, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { DispatchType } from 'store'
import { actions } from 'store/authReducer'

type FormType = {
  name: string
  password: string
  rememberMe: boolean
}

type FieldType = {
  name: string
  password: string
}

const LoginForm: FC = () => {
  const [password, setPassword] = useState<string>('')
  const [isError, setIsError] = useState(false)
  const dispatch = useDispatch<DispatchType>()

  const onFinish = useCallback(
    ({ name, rememberMe }: FormType) => {
      if (password === 'Legal_Team') {
        dispatch(actions.setUserName(name))
        dispatch(actions.setIsAuth(true))
        if (rememberMe) {
          localStorage.setItem('name', name)
        }
      } else {
        setIsError(true)
      }
    },
    [password, dispatch]
  )

  const onChange = useCallback(({ password }: Partial<FieldType>) => {
    if (password) {
      setIsError(false)
      setPassword(password)
    }
  }, [])

  return (
    <Form
      onFinish={onFinish}
      name="normal_login"
      className="login-form"
      initialValues={{ password }}
      onValuesChange={onChange}
    >
      <LoginName />
      <LoginPassword />
      {isError && <div style={{ color: 'red' }}>Пароль неверный!</div>}
      <LoginIsRemeberMe />
      <LoginButton />
    </Form>
  )
}

export default LoginForm
