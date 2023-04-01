import type { DropTargetMonitor, XYCoord } from 'react-dnd'
import { useDrag, useDrop } from 'react-dnd'
import objectHash from 'object-hash'
import { cloneDeep } from 'lodash'

import type { ComponentsConfig } from '@/collections/type'
import { useDragStore } from '@/store/drag'
import { useSettingsStore } from '@/store/settings'

const createUniqueId = (i: ComponentsConfig) => {
  return objectHash(i.id + new Date().getTime())
}
/**
 * @description 调整
 */
export const useDragComponentItem = (i: ComponentsConfig) => {
  const dragStore = useDragStore()
  const [, drag] = useDrag({
    type: 'component',
    item: () => {
      dragStore.setDragItem(i)
      return i
    },
  })
  return drag
}
/**
 * @description drop区域相关逻辑
 */
export const useDropComponentItem = () => {
  const dragStore = useDragStore()
  const settingsStore = useSettingsStore()
  const [, dropRef] = useDrop(() => ({
    accept: 'component',
    drop: (item: ComponentsConfig, monitor: DropTargetMonitor<ComponentsConfig, void>) => {
      const { x, y } = monitor.getClientOffset() as XYCoord
      const newItem = cloneDeep(item)
      newItem.id = createUniqueId(item)

      settingsStore.setAttrs({
        id: newItem.id,
        commonAttrs: {
          top: y - 66,
          left: x - 330,
          width: 193,
          height: 163,
        },
      })
      dragStore.setDropList(newItem)
    },
  }))
  return dropRef
}
