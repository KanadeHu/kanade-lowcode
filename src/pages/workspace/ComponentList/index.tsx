import React from 'react'

import Categorys from './Categorys'
import List from './List'

const ComponentList: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* 组件大分类 */}
      <Categorys />
      {/* 组件list */}
      <List />
    </div>
  )
}

export default ComponentList
