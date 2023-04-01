import * as React from 'react'

import styles from './styles.module.scss'
import EditDirectionBox from './EditDirectionBox'
import { useCanvasPageStyles, useComponentStyle } from './helper'

import { useDragStore } from '@/store/drag'
import DynamicComponent from '@/collections/DynamicComponent'

const EditBox: React.FC = () => {
  const dropStore = useDragStore()
  const canvasPageStyle = useCanvasPageStyles()

  const getComponentStyle = useComponentStyle()

  return (
    <div className={styles.kEditBox}>
      <div
        className={`${styles.kEditCanvas} shadow-xl`}
        onClick={() => dropStore.setActiveInfo(null, null)}
        aria-hidden="true"
        style={canvasPageStyle}
      >
        {dropStore.dropList.map((i, index) => {
          return (
            <EditDirectionBox item={i} key={i.id}>
              <DynamicComponent is={i.componetKey} style={getComponentStyle(index)} />
            </EditDirectionBox>
          )
        })}
      </div>
    </div>
  )
}

export default EditBox
