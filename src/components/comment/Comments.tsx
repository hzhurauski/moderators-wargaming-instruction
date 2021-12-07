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
  }, [comments])
}

export default Comments
