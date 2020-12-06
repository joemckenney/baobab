import React from 'react'
import ReactDOM from 'react-dom'

const Portal = ({ children }: { children: React.ReactNode }) =>
  ReactDOM.createPortal(children, document.body)

export default Portal
