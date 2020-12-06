import React, { useEffect, useState } from 'react'
import Layout from '../layout'

const Clock = () => {
  const [time, setTime] = useState('00:00:00')

  useEffect(() => {
    const std = (n: number) => (n > 12 ? n - 12 : n)
    const pad = (n: number) => (n < 10 ? '0' + n : n)

    const interval = setInterval(() => {
      const d = new Date()

      setTime(
        [pad(std(d.getHours())), pad(d.getMinutes()), pad(d.getSeconds())].join(
          ':'
        )
      )
    }, 1000)

    return () => clearInterval(interval)
  })

  return (
    <Layout flex="static" type="horizontal">
      {time}
    </Layout>
  )
}

export default Clock
