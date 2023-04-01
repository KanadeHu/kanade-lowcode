import * as React from 'react'
import { Typography, Form, InputNumber, Slider, Upload } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import InputColor from 'react-input-color'

import s from './styles.module.scss'
import useCanvasPageConfig from './helper'
import TDKConfig from './TDKConfig'

import Iconfont from '@/components/Iconfont'

const { Title } = Typography

type CanvasPageConfigProps = {
  children?: React.ReactNode
}

const CanvasPageConfig: React.FC<CanvasPageConfigProps> = ({ children }) => {
  const { canvasPageStore, onInputChange } = useCanvasPageConfig()

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>上传背景图</div>
    </div>
  )

  return (
    <div className={`${s.kCanvasPageBox} shadow-xl bg-gray-100 box-border p-4`}>
      <Title level={5} className="text-center bg-white rounded p-1">
        页面配置 <Iconfont type="icon-yemianpeizhi" />
      </Title>
      {/* 页面seo配置信息 */}
      <TDKConfig />
      <Form layout="inline" labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
        {/* 基础信息配置 */}
        <Form.Item label="宽度" className="w-1/2 m-i-end-0">
          <InputNumber
            defaultValue={canvasPageStore.editCanvasConfig.width}
            onChange={val => {
              onInputChange(val as number, 'width')
            }}
          />
        </Form.Item>
        <Form.Item label="高度" className="w-1/2 m-i-end-0">
          <InputNumber
            defaultValue={canvasPageStore.editCanvasConfig.height}
            onChange={val => {
              onInputChange(val as number, 'height')
            }}
          />
        </Form.Item>
        <Form.Item label="画布缩放比率" className="w-full m-i-end-0">
          <Slider
            min={0}
            max={1}
            defaultValue={canvasPageStore.editCanvasConfig.scale}
            onChange={val => onInputChange(val, 'scale')}
            step={0.01}
          />
        </Form.Item>
        {/* 暂不支持上传图片选项 */}
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          className="mb-3 w-full"
        >
          {uploadButton}
        </Upload>
        <Form.Item label="背景颜色" className="w-full m-i-end-0">
          <InputColor initialValue="#fff" onChange={val => onInputChange(val.rgba, 'background')} />
        </Form.Item>
      </Form>
      {children}
    </div>
  )
}

CanvasPageConfig.defaultProps = {
  children: null,
}

export default CanvasPageConfig
