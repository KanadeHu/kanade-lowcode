import React from 'react'
import { Layout } from 'antd'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import styles from './index.module.scss'
import ComponentList from './ComponentList'
import ComponentEdit from './ComponentEdit'
import ConfigSettings from './ComponentConfig'

const { Header, Content } = Layout

const Workspace: React.FC = () => {
  return (
    <div className={styles.kWorkspace}>
      <Layout>
        {/* 头部操作区域 */}
        <Header className={`${styles.headerBox} text-center h-14  shadow-sm bg-white`}>
          <div className=" text-center text-white">项目空间</div>
        </Header>
        {/* 编辑区域 */}
        <Content className="k-workspace-body">
          <DndProvider backend={HTML5Backend}>
            {/* 组件筛选区域 */}
            <ComponentList />
            {/* 页面编辑生成区域 */}
            <ComponentEdit />
          </DndProvider>
          {/* 组件配置信息区域 */}
          <ConfigSettings />
        </Content>
      </Layout>
    </div>
  )
}

export default Workspace
