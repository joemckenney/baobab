import styled from 'styled-components'

import React from 'react'

import { BorderProps, FourDimensionalSizeProperty } from './types'
import { cssFrom3DBorderProperty, cssFrom4DSizeProperty } from './util'

interface Props extends React.HTMLAttributes<HTMLDivElement>, BorderProps {
  children?: React.ReactNode
  inset?: FourDimensionalSizeProperty
  spacing?: FourDimensionalSizeProperty
  type?: 'vertical' | 'horizontal'
  flex?: 'initial' | 'static' | 'auto'
}

const Layout = React.forwardRef(
  (
    {
      border = 'none',
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
        border={border}
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

  flex: ${(props) => {
    switch (props.flex) {
      case 'auto':
        return 'auto'
      case 'static':
        return 'none'
      case 'initial':
        return 'initial'
    }
  }};

  ${(props) => `border: ${cssFrom3DBorderProperty(props.theme, props.border)};`}

  padding: ${(props) => cssFrom4DSizeProperty(props.theme, props.inset)};

  ${(props) => `& > * {
      margin: ${cssFrom4DSizeProperty(props.theme, props.spacing)};
  }`};

  ${(props) => {
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
/*
  ${(props) => `border-top: ${cssFrom3DBorderProperty(props.theme, props.bt)}`}
  ${(props) =>
    `border-right: ${cssFrom3DBorderProperty(props.theme, props.br)}`}
  ${(props) =>
    `border-bottom: ${cssFrom3DBorderProperty(props.theme, props.bb)}`}
  ${(props) => `border-left: ${cssFrom3DBorderProperty(props.theme, props.bl)}`}

  */

export default Layout
