import styles from 'components/page/Page.module.css'
import React, { ErrorInfo, PureComponent, ReactNode } from 'react'

type PropsType = {
  children: ReactNode
}

type StateType = {
  hasError: boolean
}

class CatchError extends PureComponent<PropsType, StateType> {
  constructor(props: Readonly<Element>) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
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
