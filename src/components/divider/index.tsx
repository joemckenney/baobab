import React from 'react'
import styles from './divider.module.css'

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  orientation: 'vertical' | 'horizontal'
  spacing: number
}

const Divider = ({ orientation, spacing, ...attrs }: Props) => {
  return (
    <div
      {...attrs}
      className={styles.divider}
      data-orientation={orientation}
      data-spacing={spacing}
    />
  )
}

export default Divider
