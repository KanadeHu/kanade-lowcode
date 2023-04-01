import { create } from 'zustand'

import type { ComponentsConfig } from '@/collections/type'
/**
 * @description 操作记录相关内容
 */
export const useOperationRecordStore = create(() => ({
  records: [] as ComponentsConfig[],
}))
