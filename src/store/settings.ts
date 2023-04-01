import { create } from 'zustand'

interface CommonAttrs {
  width?: number
  height?: number
  top?: number
  left: number
  pt?: number
  pb?: number
  pl?: number
  pr?: number
}

interface ComponentSettings {
  /**
   * @description 组件id
   */
  id: string
  /**
   * @description 常规样式定义
   */
  commonAttrs: CommonAttrs
  /**
   * @description 自定义样式
   */
  customProperties?: Record<string, any>
}

interface SettingsStore {
  /**
   * @description 属性列表
   */
  attrs: ComponentSettings[]
  /**
   * @description 加入内容
   */
  setAttrs: (i: ComponentSettings) => any
  /**
   * @description 移除某个配置
   */
  removeAttrs: (i: ComponentSettings) => any
  /**
   * @description 更新store内容
   */
  updateItem: (i: ComponentSettings, index: number) => any
}

/**
 * @description 常规内容设置
 */
export const useSettingsStore = create<SettingsStore>(set => ({
  attrs: [] as ComponentSettings[],
  setAttrs: (i: ComponentSettings) => {
    set(s => ({ attrs: s.attrs.concat(i) }))
  },
  removeAttrs: (i: ComponentSettings) => {
    set(s => ({ attrs: s.attrs.filter(j => j.id !== i.id) }))
  },
  updateItem: (newItem: ComponentSettings, index) => {
    set(s => {
      const list = [...s.attrs]
      list[index] = newItem
      return { attrs: list }
    })
  },
}))
