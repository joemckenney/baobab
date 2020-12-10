import styled from 'styled-components'

import React from 'react'

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

  padding: ${props => {
    if (!props.inset) {
      return 0
    }

    console.log(props.theme.size)
    console.log(props.inset)

    return props.theme.size[props.inset]
  }};

  ${props => `
    & > * {
      margin: ${
        props.spacing === 0
          ? '1px'
          : props.spacing === 1
          ? '2px'
          : props.spacing === 2
          ? '4px'
          : props.spacing === 3
          ? '8px'
          : props.spacing === 4
          ? '16px'
          : props.spacing === 5
          ? '32px'
          : props.spacing === 5
          ? '64px'
          : 0
      }
    }
  `};

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
