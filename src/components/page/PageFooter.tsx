import { Footer } from 'antd/lib/layout/layout'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { isAuthSelector } from 'selectors/authSelectors'
import Comments from 'components/comment/Comments'

const PageFooter: FC = () => {
  const isAuth = useSelector(isAuthSelector)

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
}

export default PageFooter
