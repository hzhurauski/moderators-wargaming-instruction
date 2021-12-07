import styles from 'components/page/Page.module.css'
import React, { FC } from 'react'

const Preloader: FC = () => {
  return (
    <div className={styles.main}>
      <h2>Загрузка...</h2>
    </div>
  )
}

export default Preloader
