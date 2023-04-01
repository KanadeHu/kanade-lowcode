import * as React from 'react'
// import { useDrag } from 'react-dnd'
import Image from 'next/image'

import { useDragComponentItem } from '../hooks'

import type { ComponentsConfig } from '@/collections/type'

interface DragItemProps {
  item: ComponentsConfig
}
const DragItem: React.FC<DragItemProps> = ({ item }) => {
  const dragRef = useDragComponentItem(item)

  return (
    <div className=" w-24 box-border p-1 rounded shadow-lg mt-2" ref={dragRef}>
      <Image alt={item.name} src={item.image as string} width={88} height={40} className="border-r-2" />
      <div className=" text-ellipsis text-center text-xs">{item.name}</div>
    </div>
  )
}

export default DragItem
