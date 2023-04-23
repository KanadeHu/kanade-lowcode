import * as React from 'react'
import { Form, Input } from 'antd'

import type { ComponentSettings } from '@/store/settings'

interface SizeSettingProps {
  item: ComponentSettings
}

const SizeSetting: React.FC<SizeSettingProps> = ({ item }) => {
  console.log(item)
  return (
    <Form name="size-setting" layout="inline">
      <Form.Item label="位置" />
      <Form.Item label="上">
        <Input />
      </Form.Item>
      <Form.Item label="左">
        <Input />
      </Form.Item>
    </Form>
  )
}

export default SizeSetting
