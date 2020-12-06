import React from 'react'

import Layout from '../layout'
import Text from '../text'

interface Props {
  children: React.ReactNode
}

const MenuItem = React.forwardRef(
  ({ children }: Props, ref: React.Ref<HTMLDivElement>) => {
    return (
      <Layout flex="static" inset={2} ref={ref}>
        <Text>{children}</Text>
      </Layout>
    )
  }
)

export default MenuItem
