import { Button, Form } from 'antd'
import React, { FC, useMemo } from 'react'

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
