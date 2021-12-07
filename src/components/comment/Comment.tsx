import { UserOutlined } from '@ant-design/icons'
import { Avatar, Comment as CommentComponent } from 'antd'
import React, { FC, useMemo } from 'react'
import { CommentType } from 'types/comment/CommentType'

const Comment: FC<CommentType> = ({ name, message, isAdmin, date }) => {
  return useMemo(() => {
    return (
      <CommentComponent
        author={name}
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
  }, [name, isAdmin, message, date])
}

export default Comment
