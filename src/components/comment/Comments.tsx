import React, { FC, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { commentsSelector } from 'selectors/commentSelectors'
import Comment from 'components/comment/Comment'
import CommentForm from 'components/comment/CommentForm'
import styles from 'components/page/Page.module.css'

const Comments: FC = () => {
  const comments = useSelector(commentsSelector)

  return useMemo(() => {
    return (
      <div className={styles.main}>
        <h5> Вы можете оставить свой комментарий на сайте: </h5>
        <CommentForm />
        {comments.map(({ isAdmin, userName, message, id, date }) => (
          <Comment
            isAdmin={isAdmin}
            userName={userName}
            message={message}
            key={id}
            date={date}
          />
        ))}
      </div>
    )
  }, [comments])
}

export default Comments
