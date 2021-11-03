import React from 'react'
import { useSelector } from 'react-redux'
import { setCommentsSelector } from '../../selectors/commentSelectors'
import Comment from './Comment'
import CommentForm from './CommentForm'
import styles from './../common/Common.module.css'

const Textareas: React.FC = React.memo(() => {
  const comments = useSelector(setCommentsSelector)

  return (
    <div className={styles.main}>
      <h5> Вы можете оставить свой комментарий на сайте: </h5>
      <CommentForm />
      {comments.map((t) => (
        <Comment
          isAdmin={t.isAdmin}
          name={t.name}
          message={t.message}
          key={t.id}
          date={t.date}
        />
      ))}
    </div>
  )
})

export default Textareas
