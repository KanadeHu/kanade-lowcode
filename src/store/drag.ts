import { create } from 'zustand'

import type { ComponentsConfig } from '@/collections/type'

interface DragsInfo {
  item: ComponentsConfig | null
  dropList: ComponentsConfig[]
  activeInfo: {
    id: string | null
    index: number | null
  }
  setDragItem: (i: ComponentsConfig) => void
  setDropList: (i: ComponentsConfig) => void
  setActiveInfo: (id: string | null, index: number | null) => void
  removeAll: () => void
  remove: (i: ComponentsConfig) => void
}

export const useDragStore = create<DragsInfo>(set => ({
  // 当前拖拽的元素
  item: null,
  // id合集
  dropList: [],
  // 当前选中的元素
  activeInfo: {
    id: null,
    index: null,
  },
  // 存储当前组件相关信息
  setDragItem(i: ComponentsConfig) {
    set({ item: i })
  },
  // 缺少生成单个组件id的功能，理论上可能有多个重复的组件
  setDropList: (i: ComponentsConfig) => {
    set(s => ({ dropList: s.dropList.concat(i) }))
  },
  // 需要清空所有画布时候，我们就这样操作
  removeAll() {
    set({ item: null, dropList: [] })
  },
  setActiveInfo(id, index) {
    set({
      activeInfo: {
        id,
        index,
      },
    })
  },
  // 移除单个组件list
  remove(i: ComponentsConfig) {
    set(s => ({
      dropList: s.dropList.filter(j => j.id === i.id),
    }))
  },
}))
