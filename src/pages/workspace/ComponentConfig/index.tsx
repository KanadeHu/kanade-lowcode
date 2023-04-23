import * as React from 'react'

import CanvasPageConfig from './CanvasPageConfig'
import ComponentConfig from './ComponentConfig'
import { useShowComponentConfig } from './helper'
import s from './styles.module.scss'

const ConfigSettings: React.FC = () => {
  const { isShowComponentConfig, item } = useShowComponentConfig()
  return (
    <div className={`${s.kCanvasPageBox} shadow-xl bg-gray-100 box-border p-4`}>
      {isShowComponentConfig ? <ComponentConfig item={item} /> : <CanvasPageConfig />}
    </div>
  )
}

export default ConfigSettings
