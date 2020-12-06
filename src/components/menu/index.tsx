import React, { useRef } from 'react'

import styles from './menu.module.css'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Menu = ({ children }: Props) => {
  const menuRef = useRef(null)

  return (
    <div className={styles.menu} ref={menuRef}>
      {children}
    </div>
  )
}

export default Menu
