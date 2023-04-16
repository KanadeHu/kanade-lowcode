import * as React from 'react'
import { cloneDeep, throttle } from 'lodash'

import type { ComponentsConfig } from '@/collections/type'
import { useDragStore } from '@/store/drag'
import type { ComponentSettings } from '@/store/settings'
import { useSettingsStore } from '@/store/settings'
import { useCanvasPageStore } from '@/store/canvasPage'

/**
 * @description 定义拖拽方向
 */
export const directions = ['t', 'b', 'l', 'r', 'lt', 'rt', 'lb', 'rb']
/**
 * @description 定义外边框拖拽鼠标样式(north, south, east, west)
 */
export const curserPoints = ['n', 's', 'w', 'e', 'nw', 'ne', 'sw', 'se']
/**
 * @description 拖拽组件相关list
 */
export const useEditDirection = (item: ComponentsConfig) => {
  const dragStore = useDragStore()
  const settingsStore = useSettingsStore()
  const canvasPageStore = useCanvasPageStore()

  const [infos, setInfos] = React.useState<ComponentSettings | null>(null)
  // 盒子位置信息相关
  const position = React.useRef({
    top: 0,
    left: 0,
    startX: 0,
    startY: 0,
  })
  // 盒子大小变化设置
  const compSize = React.useRef({
    width: 0,
    height: 0,
  })
  /**
   * @description 是否被选中
   */
  const isActive = () => {
    return dragStore.activeInfo.id === item.id
  }

  const selectComponent = (event: React.MouseEvent) => {
    event.stopPropagation()
    const index = dragStore.dropList.findIndex(i => i.id === item.id)
    // 存储选中的元素及属性信息
    dragStore.setActiveInfo(item.id, index)
    setInfos(cloneDeep([...settingsStore.attrs][index]))
  }
  /**
   * @description box整体移动事件
   */
  const onBoxMouseDown = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation()
    // 如果没有选中元素
    if (dragStore.activeInfo.id !== item.id || !infos) {
      return
    }
    // 存储本次移动位置信息
    position.current = {
      top: infos.commonAttrs.top as number,
      left: infos.commonAttrs.left as number,
      startX: e.pageX,
      startY: e.pageY,
    }

    const mouseMove = throttle((event: MouseEvent) => {
      // 如果当前元素没有移动就退出
      if (!infos) {
        return
      }
      const { top, left, startX, startY } = position.current
      // 计算更新后的位置信息，存储
      infos.commonAttrs.left = left + Math.round((event.pageX - startX) / canvasPageStore.editCanvasConfig.scale)
      infos.commonAttrs.top = top + Math.round((event.pageY - startY) / canvasPageStore.editCanvasConfig.scale)
      settingsStore.updateItem(infos, dragStore.activeInfo.index as number)
    }, 20)
    // 鼠标移动事件
    const mouseUp = () => {
      document.removeEventListener('mousemove', mouseMove)
      document.removeEventListener('mouseup', mouseUp)
    }
    // 移除相应的事件
    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
  }
  /**
   * @description 八个方向移动处理办法
   */
  const onDirectionHandle = (e: React.MouseEvent, direction: string) => {
    e.stopPropagation()
    e.preventDefault()
    // 如果没有选中元素
    if (dragStore.activeInfo.id !== item.id || !infos) {
      return
    }
    // 存储本次移动位置信息
    position.current = {
      top: infos.commonAttrs.top as number,
      left: infos.commonAttrs.left as number,
      startX: e.clientX,
      startY: e.clientY,
    }
    // 存储组件大小相关信息
    compSize.current = {
      width: infos.commonAttrs.width as number,
      height: infos.commonAttrs.height as number,
    }
    const mouseMove = throttle((event: MouseEvent) => {
      const { top, left, startX, startY } = position.current
      const { width, height } = compSize.current
      if (!infos) {
        return
      }
      const offsetX = Math.round((event.clientX - startX) / canvasPageStore.editCanvasConfig.scale)
      const offsetY = Math.round((event.clientY - startY) / canvasPageStore.editCanvasConfig.scale)
      // 方向拖拽调整尺寸
      if (direction.indexOf('l') >= 0) {
        infos.commonAttrs.left = left + offsetX
        infos.commonAttrs.width = width - offsetX
      }
      if (direction.indexOf('t') >= 0) {
        infos.commonAttrs.top = top + offsetY
        infos.commonAttrs.height = height - offsetY
      }
      if (direction.indexOf('r') >= 0) {
        infos.commonAttrs.width = width + offsetX
      }
      if (direction.indexOf('b') >= 0) {
        infos.commonAttrs.height = height + offsetY
      }
      // 设置尺寸变化
      settingsStore.updateItem(infos, dragStore.activeInfo.index as number)
    }, 30)
    const mouseUp = () => {
      document.removeEventListener('mousemove', mouseMove)
      document.removeEventListener('mouseup', mouseUp)
    }
    // 移除相应的事件
    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
  }
  return {
    isActive,
    selectComponent,
    onDirectionHandle,
    onBoxMouseDown,
  }
}
/**
 * @description 画布主题down事件
 */
export default function useCanvasMouseDown(e: React.MouseEvent) {
  console.log(e, '内容信息')
}
/**
 * @description 页面元素定位更新
 */
export const useBoxStyle = (item: ComponentsConfig) => {
  const settingsStore = useSettingsStore()
  const styleInfo = settingsStore.attrs.filter(i => i.id === item.id)[0]
  const styles: React.CSSProperties = {
    top: `${styleInfo.commonAttrs.top}px`,
    left: `${styleInfo.commonAttrs.left}px`,
  }
  return styles
}

/**
 * @description 主题画布区域样式信息（目前支持 width  height background backgroundImage）相关属性
 */
export const useCanvasPageStyles = (): React.CSSProperties => {
  const canvasPageStore = useCanvasPageStore()
  let backgroundInfo: React.CSSProperties = {}
  // 如果有背景图片优先选用背景图片
  if (canvasPageStore.editCanvasConfig.backgroundImage) {
    backgroundInfo = {
      background: `url(${canvasPageStore.editCanvasConfig.backgroundImage}) no-repeat`,
      backgroundSize: '100% 100%',
    }
  } else {
    backgroundInfo = {
      background: canvasPageStore.editCanvasConfig.background || '#fff',
    }
  }
  return {
    width: `${canvasPageStore.editCanvasConfig.width}px`,
    height: `${canvasPageStore.editCanvasConfig.height}px`,
    transform: `scale(${canvasPageStore.editCanvasConfig.scale})`,
    transformOrigin: 'left top',
    ...backgroundInfo,
  }
}
/**
 * @description 生成组件的css样式
 */
export const useComponentStyle = () => {
  const settingStore = useSettingsStore()

  const getComponentsStyle = (index: number): React.CSSProperties => {
    const { commonAttrs } = settingStore.attrs[index]

    return {
      width: `${commonAttrs.width}px`,
      height: `${commonAttrs.height}px`,
    }
  }

  return getComponentsStyle
}
