import React from 'react'
import styles from './text.module.css'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  alignment?: 'start' | 'center' | 'end'
  children?: React.ReactNode
  color?: 'normal' | 'muted' | 'danger' | 'primary' | 'success' | 'white'
  decoration?: 'underline' | 'line-through' | 'dotted'
  direction?: 'ltr' | 'rtl'
  display?: 'block' | 'inline'
  font?: 'normal' | 'mono'
  fontStyle?: 'italic'
  selectable?: 'true' | 'false'
  size?: 'extra-small' | 'small' | 'medium' | 'large' | 'title' | 'header'
  transform?: 'capitalize' | 'lowercase' | 'uppercase'
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'bolder' | 'black'
  wrap?: 'true' | 'false'
}

const Text = ({
  alignment,
  color,
  children,
  decoration,
  direction,
  display,
  font,
  fontStyle,
  selectable,
  size,
  transform,
  weight,
  wrap,
  ...attrs
}: Props) => {
  return (
    <div
      {...attrs}
      className={styles.text}
      data-alignment={alignment}
      data-color={color}
      data-decoration={decoration}
      data-direction={direction}
      data-display={display}
      data-font={font}
      data-selectable={selectable}
      data-size={size}
      data-style={fontStyle}
      data-transform={transform}
      data-weight={weight}
      data-wrap={wrap}
    >
      {children}
    </div>
  )
}

export default Text
