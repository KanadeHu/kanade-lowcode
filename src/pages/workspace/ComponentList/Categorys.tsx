import * as React from 'react'
import { Menu } from 'antd'
import type { MenuItemType } from 'antd/es/menu/hooks/useItems'

import styles from './index.module.scss'

import Iconfont from '@/components/Iconfont'

const Cates: MenuItemType[] = [
  {
    title: '基础',
    label: '基础',
    key: 'basic',
    icon: <Iconfont type="icon-basic" />,
  },
  {
    title: '图片',
    label: '图片',
    key: 'image',
    icon: <Iconfont type="icon-image" />,
  },
]

const Categorys: React.FC = () => {
  return (
    <div className={`${styles.kCategoryBox} shadow-md bg-white`}>
      <Menu mode="vertical" items={Cates} />
    </div>
  )
}

export default Categorys
