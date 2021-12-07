import { PureComponent, ErrorInfo } from 'react'
import styles from 'components/page/Page.module.css'

class CatchError extends PureComponent<{}, { hasError: boolean }> {
  constructor(props: Readonly<{}> | {}) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true })
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.main}>
          <h1>Что-то пошло не так</h1>
        </div>
      )
    }

    return this.props.children
  }
}

export default CatchError
