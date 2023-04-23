import * as React from 'react'

import type { ComponentSettings } from '@/store/settings'

interface ComponentConfigProps {
  item?: ComponentSettings
}

const ComponentConfig: React.FC<ComponentConfigProps> = ({ item }) => {
  console.log(item)
  return <>自定义属性设计区域</>
}

export default ComponentConfig
