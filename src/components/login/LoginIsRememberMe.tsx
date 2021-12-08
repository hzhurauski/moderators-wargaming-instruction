import { Checkbox, Form } from 'antd'
import React, { FC, useMemo } from 'react'

const LoginIsRemeberMe: FC = () => {
  return useMemo(() => {
    return (
      <Form.Item>
        <Form.Item name="rememberMe" valuePropName="checked" noStyle>
          <Checkbox>Запомнить меня</Checkbox>
        </Form.Item>
      </Form.Item>
    )
  }, [])
}

export default LoginIsRemeberMe
