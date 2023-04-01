import type { ReactNode } from 'react'
import React from 'react'
import { Layout, theme } from 'antd'

interface AppLayoutProps {
  children: ReactNode
}

const { Header, Content } = Layout

const App: React.FC<AppLayoutProps> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout>
      <Layout>
        <Header style={{ padding: 0, background: '#fff' }}>header内容区域</Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>{children}</div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
