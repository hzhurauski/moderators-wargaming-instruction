import { Footer } from 'antd/lib/layout/layout'
import Comments from 'components/comment/Comments'
import React, { FC, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { isAuthSelector } from 'selectors/authSelectors'

const PageFooter: FC = () => {
  const isAuth = useSelector(isAuthSelector)

  return useMemo(() => {
    return (
      <Footer
        style={{
          textAlign: 'center',
          marginTop: '150px',
          background: 'Gainsboro',
        }}
      >
        {isAuth && <Comments />}
      </Footer>
    )
  }, [isAuth])
}

export default PageFooter
