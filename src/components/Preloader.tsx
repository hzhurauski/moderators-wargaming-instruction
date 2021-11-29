import React from 'react'
import styles from 'components/page/Page.module.css'

const Preloader: React.FC = () => {
  return (
    <div className={styles.main}>
      <h2>Загрузка...</h2>
    </div>
  )
}

export default Preloader
