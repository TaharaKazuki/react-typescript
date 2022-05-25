import type { FC } from 'react'
import React from 'react'

const onChange = (event: React.ChangeEvent<HTMLInputElement> | undefined) => {
  console.info(event)
}

const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
  console.info(event)
}

export const EventComponent: FC = () => {
  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag me
      </div>
    </div>
  )
}
