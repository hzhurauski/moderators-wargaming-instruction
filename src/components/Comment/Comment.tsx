import { UserOutlined } from '@ant-design/icons'
import { Avatar, Comment as Com } from 'antd'
import React from 'react'
import { CommentType } from 'types/Types'

const Comment: React.FC<CommentType> = ({ name, message, isAdmin, date }) => {
  return (
    <Com
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
}

export default Comment
