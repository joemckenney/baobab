import React, { useRef, useState } from 'react'
import Layout from '../layout'
//import styles from './layout.module.css'

interface Props {
  children: React.ReactNode
  onClick?: Function
  onClose?: Function
  onMouseOver?: Function
  render: Function
}

function Activator({ children, onClick = () => {}, render }: Props) {
  const activatorRef = useRef<HTMLDivElement>(null)
  const [isOpen, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!isOpen)
    onClick()
  }

  return (
    <Layout flex="static" onClick={handleClick} ref={activatorRef}>
      {children}
      {isOpen && render({ activator: activatorRef })}
    </Layout>
  )
}

export default Activator
