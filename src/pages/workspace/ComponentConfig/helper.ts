import type { valueType } from 'antd/es/statistic/utils'
import { message } from 'antd'

import type { EditCanvasConfig } from '@/store/canvasPage'
import { useCanvasPageStore } from '@/store/canvasPage'

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
