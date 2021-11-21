import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { actions } from 'store/authReducer'
import { useState } from 'react'

type FormType = {
  name: string
  password: string
  rememberMe: boolean
}

type FieldType = {
  name?: string
  password?: string
}

const LoginForm = () => {
  const [password, setPassword] = useState<string>('')
  const [isError, setIsError] = useState(false)
  const dispatch = useDispatch()

  const onFinish = ({ name, rememberMe }: FormType) => {
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
  }

  const onChange = ({ password }: FieldType) => {
    if (password) {
      setIsError(false)
      setPassword(password)
    }
  }

  return (
    <Form
      onFinish={onFinish}
      name="normal_login"
      className="login-form"
      initialValues={{ password }}
      onValuesChange={onChange}
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Введите, пожалуйста, имя' }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Ваше имя"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Пароль обязателен!' }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Пароль"
        />
      </Form.Item>
      {isError && <div style={{ color: 'red' }}>Пароль неверный!</div>}
      <Form.Item>
        <Form.Item name="rememberMe" valuePropName="checked" noStyle>
          <Checkbox>Запомнить меня</Checkbox>
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
