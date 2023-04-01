import * as React from 'react'
import { Input } from 'antd'

import styles from './index.module.scss'
import DragItem from './DragItem'

import type { ComponentsConfig } from '@/collections/type'

const { Search } = Input

const list: ComponentsConfig[] = [
  {
    id: 'text',
    name: 'text',
    componetKey: 'table',
    image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
  },
  {
    id: 'input',
    name: 'input',
    componetKey: 'input',
    image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
  },
]

const List: React.FC = () => {
  return (
    <div className={`${styles.kComponentBox} bg-white box-border`}>
      {/* 查询工具框 */}
      <Search placeholder="请输入组件名" />
      {/* 组件列表 */}
      <div className="overflow-x-hidden overflow-y-auto flex flex-wrap justify-between">
        {list.map(item => {
          return <DragItem item={item} key={item.id} />
        })}
      </div>
    </div>
  )
}

export default List
