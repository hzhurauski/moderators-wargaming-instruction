import { FC, useMemo } from 'react'
import { Form, Button } from 'antd'

const LoginButton: FC = () => {
  return useMemo(() => {
    return (
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Отправить
        </Button>
      </Form.Item>
    )
  }, [])
}

export default LoginButton
