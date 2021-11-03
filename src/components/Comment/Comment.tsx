import { UserOutlined } from '@ant-design/icons'
import { Avatar, Comment as Com } from 'antd'
import React from 'react'
import { CommentType } from '../../types/Types'
import admin from '../../images/comment/admin.jpg'

const Comment: React.FC<CommentType> = React.memo(
  ({ name, message, isAdmin, date }) => {
    return (
      <Com
        author={name}
        avatar={
          isAdmin ? (
            <Avatar
              size="large"
              style={{ background: 'gold' }}
              icon={<UserOutlined />}
            />
          ) : (
            <Avatar
              size="large"
              style={{ background: 'grey' }}
              icon={<UserOutlined />}
            />
          )
        }
        content={<p>{message}</p>}
        datetime={<h6>{date}</h6>}
      />
    )
  }
)

export default Comment
