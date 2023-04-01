import * as React from 'react'
import type { ReactNode } from 'react'

import styles from './styles.module.scss'
import { curserPoints, directions, useBoxStyle, useEditDirection } from './helper'

import type { ComponentsConfig } from '@/collections/type'

interface EditDirectionBoxProps {
  item: ComponentsConfig
  children: ReactNode | undefined
}

const EditDirectionBox: React.FC<EditDirectionBoxProps> = ({ children, item }) => {
  const { isActive, selectComponent, onDirectionHandle, onBoxMouseDown } = useEditDirection(item)

  const styleInfo = useBoxStyle(item)

  return (
    <div
      className={`${styles.kEditDirectionBox} ${isActive() && styles.selected}`}
      aria-hidden="true"
      onClick={selectComponent}
      onMouseDown={onBoxMouseDown}
      style={styleInfo}
    >
      {children}
      {directions.map((i, index) => {
        return (
          <div
            className={`${styles.kPointer} ${styles[i]}`}
            key={i}
            style={{ cursor: `${curserPoints[index]}-resize` }}
            aria-hidden="true"
            onMouseDown={(e: React.MouseEvent<any>) => {
              onDirectionHandle(e, i)
            }}
          />
        )
      })}
      <div className={`${styles.kSelectBox}`} aria-hidden="true" />
    </div>
  )
}

export default EditDirectionBox
