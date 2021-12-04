import { FC, useMemo } from 'react'
import { Form, Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const LoginName: FC = () => {
  return useMemo(() => {
    return (
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Введите, пожалуйста, имя' }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Ваше имя"
        />
      </Form.Item>
    )
  }, [])
}

export default LoginName
