import React, { useEffect, useRef, useState } from 'react'
import RelativeBox from '../relative-box'

import { Alignment, Placement } from '../position'

import Portal from '../portal'

interface Props {
  children: React.ReactNode
}

const ContextMenu = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [[top, left], setOffset] = useState([0, 0])
  const [open, setOpen] = useState<true | null>(null)

  useEffect(() => {
    const onContextMenu = (e: MouseEvent) => {
      setOpen(open ? null : true)
      setOffset([e.pageY, e.pageX])
      e.preventDefault()
    }
    document.addEventListener('contextmenu', onContextMenu, false)
    return () =>
      document.removeEventListener('contextmenu', onContextMenu, false)
  })

  return (
    open && (
      <Portal>
        <div
          style={{
            width: '1px',
            height: '1px',
            position: 'absolute',
            top: `${top}px`,
            left: `${left}px`,
          }}
          ref={ref}
        />
        <RelativeBox
          activator={ref}
          alignment={Alignment.Left}
          placement={Placement.Bottom}
        >
          {children}
        </RelativeBox>
      </Portal>
    )
  )
}

export default ContextMenu
