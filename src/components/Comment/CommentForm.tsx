import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userDataSelector } from 'selectors/authSelectors'
import {
  isSubmittingSelector,
  commentsSelector,
} from 'selectors/commentSelectors'
import { actions } from 'store/commentReducer'
import { Form, Button, Input } from 'antd'
import moment from 'moment'

const { TextArea } = Input

const CommentForm: React.FC = () => {
  const [message, setMessage] = useState<string>('')
  const dispatch = useDispatch()
  const { name } = useSelector(userDataSelector)
  const comments = useSelector(commentsSelector)
  const isSubmitting = useSelector(isSubmittingSelector)

  const date = moment().format('L')

  const handleSubmit = () => {
    if (!message) {
      return
    }

    dispatch(actions.setIsSubmitting(true))
    dispatch(
      actions.setComment({
        name: name,
        message: message,
        isAdmin: false,
        id: comments.length + 1,
        date: `${date}`,
      })
    )
    dispatch(actions.setIsSubmitting(false))
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const message = String(e.target.value)
    setMessage(message)
  }

  return (
    <div>
      <Form.Item>
        <TextArea rows={4} onChange={handleChange} value={message} />
      </Form.Item>
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
    </div>
  )
}

export default CommentForm
