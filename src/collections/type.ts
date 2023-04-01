/* eslint-disable no-shadow */
/**
 * @description 组件集合分类（目前根据这四类暂时定义，后续可以增多）
 */
export enum CollectionLabel {
  BASIC = '基础',
  LAYOUT = '布局',
  IMAGE = '图片',
  CUSTOM = '自定义',
}
/**
 * @description 组件分类合集
 */
export enum CollectionKey {
  BASIC = 'basic',
  LAYOUT = 'layout',
  IMAGE = 'image',
  CUSTOM = 'custom',
}
/**
 * @description 自定义组件类型数据
 */
export interface ComponentsConfig {
  /**
   * @description 组件id（后续用于数据库存储）
   */
  id: string
  /**
   * @description 组件name,用于动态生成（目前想法是基于component 动态组件来去实现编辑区域）
   */
  componetKey: string
  /**
   * @description 组件图片缩略图，用于组件前端显示，
   */
  image: string | (() => Promise<any>)
  /**
   * @description 组件名
   */
  name: string
}
/**
 * @description 组件信息库
 */
export interface Collections {
  [CollectionKey.BASIC]: ComponentsConfig[]
  [CollectionKey.LAYOUT]?: ComponentsConfig[]
  [CollectionKey.IMAGE]?: ComponentsConfig[]
  [CollectionKey.CUSTOM]?: ComponentsConfig[]
}
/**
 * @description 元素位置、大小相关配置
 */
export interface CommonAttrConfig {
  /**
   * @description 元素的宽
   */
  w: number
  /**
   * @description 元素的高
   */
  h: number
  /**
   * @description left 定位（元素默认就是absolute， 通过定位的方式进行）
   */
  l: number
  /**
   * @description top 定位
   */
  t: number
  /**
   * @description 层级相关
   */
  zIndex: number
}
/**
 * @description 页面元素相关属性定义
 */
export interface PublicConfig {
  /**
   * @description 配置id，后续用于和当前导入元素关联起来，唯一值
   */
  id: string
  /**
   * @description 元素属性，
   */
  attr: CommonAttrConfig
}
