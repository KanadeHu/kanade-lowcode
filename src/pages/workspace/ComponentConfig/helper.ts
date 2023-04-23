import type { valueType } from 'antd/es/statistic/utils'
import { message } from 'antd'

import type { EditCanvasConfig } from '@/store/canvasPage'
import { useCanvasPageStore } from '@/store/canvasPage'
import { useDragStore } from '@/store/drag'
import { useSettingsStore } from '@/store/settings'

export default function useCanvasPageConfig() {
  const canvasPageStore = useCanvasPageStore()

  const onInputChange = (val: valueType, key: keyof EditCanvasConfig) => {
    if (!val) {
      message.warning('请输入大于0的数字')
      return
    }
    canvasPageStore.setConfig(key, val)
  }

  return {
    canvasPageStore,
    onInputChange,
  }
}
/**
 * @description 普通属性设置判断
 */
export const useShowComponentConfig = () => {
  const componentsInfo = useDragStore()
  const componentSettingInfo = useSettingsStore()
  // 获取当前组件配置信息
  const getItem = () => {
    if (componentsInfo.activeInfo && componentsInfo.activeInfo.id) {
      return componentSettingInfo.attrs.find(i => i.id === componentsInfo.activeInfo.id)
    }
    return undefined
  }

  return {
    // 是否展示组件配置模块
    isShowComponentConfig: !!(componentsInfo.activeInfo && componentsInfo.activeInfo.id),
    // 当前组件信息
    item: getItem(),
  }
}
