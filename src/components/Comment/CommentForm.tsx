import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUserDataSelector } from '../../selectors/authSelectors'
import { currentMessageSelector, commentSubmittingSelector, setCommentsSelector } from '../../selectors/commentSelectors'
import { actions } from '../../redux/commentReducer'
import { Form, Button, Input } from 'antd'


const { TextArea } = Input;


const CommentForm: React.FC = () => {
    let date = new Date()
    let dd = String(date.getDate()).padStart(2, '0')
    let mm = String(date.getMonth() + 1).padStart(2, '0')
    let yyyy = date.getFullYear()

    //@ts-ignore
    date = dd + '.' + mm + '.' + yyyy

    const dispatch = useDispatch()
    const { name } = useSelector(setUserDataSelector)
    const messagesCount = useSelector(setCommentsSelector)
    const message = useSelector(currentMessageSelector)
    const submitting = useSelector(commentSubmittingSelector)


    let handleSubmit = () => {
        if (!message) {
            return
        }
        dispatch(actions.commentSubmitting(true))
        dispatch(actions.createNewComment({ name: name, message: message, isAdmin: false, id: messagesCount.length + 1, date: `${date}` }))
        dispatch(actions.commentSubmitting(false))
    }


    let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(actions.changeMessage(e.target.value))
    }


    return (
        <div>
            <Form.Item>
                {/* @ts-ignore */}
                <TextArea rows={4} onChange={handleChange} value={message} />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" loading={submitting} onClick={handleSubmit} type="primary">
                    Добавить комментарий
                </Button>
            </Form.Item>
        </div>
    )
}


export default CommentForm