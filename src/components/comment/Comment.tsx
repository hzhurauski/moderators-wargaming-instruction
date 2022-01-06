import { UserOutlined } from '@ant-design/icons'
import { Avatar, Comment as CommentComponent } from 'antd'
import React, { FC, useMemo } from 'react'
import { CommentType } from 'types/comment/CommentTypes'

const Comment: FC<CommentType> = ({ userName, message, isAdmin, date }) => {
  return useMemo(() => {
    return (
      <CommentComponent
        author={userName}
        avatar={
          <Avatar
            size="large"
            style={{ background: isAdmin ? 'gold' : 'grey' }}
            icon={<UserOutlined />}
          />
        }
        content={<p>{message}</p>}
        datetime={<h6>{date}</h6>}
      />
    )
  }, [userName, isAdmin, message, date])
}

export default Comment
