import { create } from 'zustand'

export interface EditCanvasConfig {
  /**
   * @description 面板宽度
   */
  width: number
  /**
   * @description 面板高度
   */
  height: number
  /**
   * @description 背景色（纯色）
   */
  background: string | null
  /**
   * @description 背景图
   */
  backgroundImage: string | null
  /**
   * @description 画布缩放比率
   */
  scale: number
  [props: string]: any
}

export type TDK = {
  /**
   * @description 页面标题
   */
  title: string
  /**
   * @description 页面描述
   */
  description: string
  /**
   * @description 页面关键字
   */
  keywords: string
}

export type P = keyof EditCanvasConfig

export interface CanvasPageStore {
  /**
   * @description 画板设置相关设置
   */
  editCanvasConfig: EditCanvasConfig
  /**
   * @description 页面seo相关信息
   */
  tdk: TDK
  /**
   * @description 设置面板信息
   * @param k 编辑画板设置属性key值
   * @param value 编辑画板设置属性value值
   */
  setConfig: (k: P, value: EditCanvasConfig[P]) => any
  /**
   * @description 设置页面tdk相关信息
   */
  setTDKConfig: (k: keyof TDK, value: string) => any
}

export const useCanvasPageStore = create<CanvasPageStore>(set => ({
  editCanvasConfig: {
    width: 1920,
    height: 1080,
    background: null,
    backgroundImage: null,
    scale: 0.5,
  } as EditCanvasConfig,
  tdk: {
    title: '',
    description: '',
    keywords: '',
  },
  setConfig: (k, value) => {
    set(s => {
      const state = { ...s.editCanvasConfig } as EditCanvasConfig
      state[k] = value as any
      return { editCanvasConfig: state }
    })
  },
  setTDKConfig(k, v) {
    set(s => {
      const state = { ...s.tdk } as TDK
      state[k] = v
      return { tdk: state }
    })
  },
}))
