import React, { useLayoutEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

import position, { Alignment, Placement } from '../position'

interface Props {
  activator: React.Ref<HTMLDivElement>
  alignment: Alignment
  children: React.ReactNode
  placement: Placement
}

const RelativeBox = ({ activator, alignment, children, placement }: Props) => {
  const box = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!box.current) {
      return
    }

    const { left, top } = position({
      activator: (activator as React.RefObject<HTMLDivElement>).current,
      alignment,
      box: (box as React.RefObject<HTMLDivElement>).current,
      placement,
    })

    if (box.current) {
      box.current.style.position = 'absolute'
      box.current.style.left = `${left}px`
      box.current.style.top = `${top}px`
    }
  })

  return ReactDOM.createPortal(<div ref={box}>{children}</div>, document.body)
}

export default RelativeBox
