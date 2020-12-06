import React from 'react'
import styles from './layout.module.css'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  inset?: number
  spacing?: number
  type?: 'vertical' | 'horizontal'
  flex?: 'initial' | 'static' | 'auto'
}

const Layout = React.forwardRef(
  (
    {
      children,
      inset,
      spacing,
      type = 'horizontal',
      flex = 'auto',
      ...attrs
    }: Props,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div
        {...attrs}
        className={styles.layout}
        data-flex={flex}
        data-inset={inset}
        data-spacing={spacing}
        data-type={type}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export default Layout
