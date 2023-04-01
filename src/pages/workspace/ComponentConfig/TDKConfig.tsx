import { Form, Input } from 'antd'
import * as React from 'react'

const TDKConfig: React.FC = () => {
  return (
    <Form layout="inline" labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
      <Form.Item label="标题" className="w-full">
        <Input />
      </Form.Item>
      <Form.Item label="关键字" className="w-full">
        <Input />
      </Form.Item>
      <Form.Item label="描述" className="w-full">
        <Input.TextArea />
      </Form.Item>
    </Form>
  )
}

export default TDKConfig
