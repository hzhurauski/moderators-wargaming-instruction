import { Form } from 'antd'
import { useDispatch } from 'react-redux'
import { actions } from 'store/authReducer'
import { FC, useCallback, useState } from 'react'
import { DispatchType } from 'store'
import LoginPassword from 'components/login/LoginPassword'
import LoginIsRemeberMe from 'components/login/LoginIsRememberMe'
import LoginButton from 'components/login/LoginButton'
import LoginName from 'components/login/LoginName'

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
        dispatch(actions.setUserData(name, rememberMe))
        dispatch(actions.setIsAuth(true))
        if (rememberMe) {
          const userData = JSON.stringify({ name, isRememberMe: rememberMe })
          localStorage.setItem('userData', userData)
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
