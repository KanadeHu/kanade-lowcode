import * as React from 'react'

import { useDropComponentItem } from '../hooks'

import styles from './styles.module.scss'
import EditBox from './EditBox'

const ContentBox: React.FC = () => {
  const dropRef = useDropComponentItem()
  return (
    <div className={styles.kContentBox} ref={dropRef}>
      <EditBox />
    </div>
  )
}

export default ContentBox
