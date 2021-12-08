import { Button, Form } from 'antd'
import React, { FC, useMemo } from 'react'

type PropsType = {
  isSubmitting: boolean
  handleSubmit: () => void
}

const CommentButton: FC<PropsType> = ({ isSubmitting, handleSubmit }) => {
  return useMemo(() => {
    return (
      <Form.Item>
        <Button
          htmlType="submit"
          loading={isSubmitting}
          onClick={handleSubmit}
          type="primary"
        >
          Добавить комментарий
        </Button>
      </Form.Item>
    )
  }, [isSubmitting, handleSubmit])
}

export default CommentButton
