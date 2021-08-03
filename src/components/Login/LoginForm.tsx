import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../redux/authReducer'
import { useState } from 'react'
import { changePasswordSelector } from '../../selectors/authSelectors'



type FormType = {
  name: string
  password: string
  rememberMe: boolean
}

type CurrentFieldType = {
  name?: string
  password?: string
}


const LoginForm = () => {
  const password = useSelector(changePasswordSelector)
  const [errorPassword, setErrorPassword] = useState(false)
  const dispatch = useDispatch()


  const onFinish = ({ name, rememberMe }: FormType) => {
    if (password === 'Legal_Team') {
      dispatch(actions.setUserData(name, password, rememberMe))
      dispatch(actions.authSuccess(true))
      if (rememberMe === true) {
        localStorage.setItem('rememberMe', JSON.stringify(rememberMe))
        localStorage.setItem('name', name)
      }
    } else {
      setErrorPassword(true)
    }
  }

  const onChange = (currentField: CurrentFieldType) => {
    if (currentField.password) {
      setErrorPassword(false)
      dispatch(actions.changePassword(currentField.password))
    }
    return
  }

  return (
    <Form
      onFinish={onFinish}
      name="normal_login"
      className="login-form"
      initialValues={{ password: password, remember: true }}
      onValuesChange={onChange}>
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Введите, пожалуйста, имя' }]}>
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Ваше имя" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Пароль обязателен!' }]}>
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Пароль" />
      </Form.Item>
      {errorPassword &&
        <div style={{ color: 'red' }}>
          Пароль неверный!
        </div>}
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