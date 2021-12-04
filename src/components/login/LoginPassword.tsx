import { LockOutlined } from '@ant-design/icons'
import { Form, Input } from 'antd'
import { FC, useMemo } from 'react'

const LoginPassword: FC = () => {
  return useMemo(() => {
    return (
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
    )
  }, [])
}

export default LoginPassword
