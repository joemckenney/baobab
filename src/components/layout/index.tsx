import styled from 'styled-components'

import React from 'react'

import { SizeKey } from '../../theme/types'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  inset?: //extract type defintion
  | SizeKey
    | [SizeKey, SizeKey]
    | [SizeKey, SizeKey, SizeKey]
    | [SizeKey, SizeKey, SizeKey, SizeKey]
  spacing?: //extract type defintion
  | SizeKey
    | [SizeKey, SizeKey]
    | [SizeKey, SizeKey, SizeKey]
    | [SizeKey, SizeKey, SizeKey, SizeKey]
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
      <StyledLayout
        {...attrs}
        flex={flex}
        inset={inset}
        spacing={spacing}
        type={type}
        ref={ref}
      >
        {children}
      </StyledLayout>
    )
  }
)

//extract
const formSizeValues = (props, size) => {
  if (!size) {
    return 0
  }

  if (Array.isArray(size)) {
    return size.map(s => props.theme.size[s]).join(' ')
  }

  return props.theme.size[size]
}

const StyledLayout = styled.div<Partial<Props>>`
  display: flex;
  overflow: auto;
  flex-basis: 100%;

  ${`& > * {
    flex: auto;
    display: flex;
  }`}

  flex: ${props => {
    switch (props.flex) {
      case 'auto':
        return 'auto'
      case 'static':
        return 'none'
      case 'initial':
        return 'initial'
    }
  }};

  padding: ${props => formSizeValues(props, props.inset)};

  ${props => `& > * {
      margin: ${props.spacing ? props.theme.size[props.spacing] : 0};
  }`};

  ${props => {
    switch (props.type) {
      case 'vertical':
        return `
          flex-direction: column;
          & > * {
            margin-top: 0;
            margin-left: 0;
            margin-right: 0;
          }
          &:last-child {
            margin-bottom: 0;
          }
        `
      case 'horizontal':
        return `
          flex-direction: row;
          & > * {
            margin-left: 0;
            margin-top: 0;
            margin-bottom: 0;
          }
          &:last-child {
            margin-right: 0;
          }
        `
    }
  }}
`

export default Layout
