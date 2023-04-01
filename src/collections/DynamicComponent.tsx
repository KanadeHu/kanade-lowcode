import * as React from 'react'

import { kComponents } from '.'

export interface DynamicComponentProps {
  is: string
  [props: string]: any
}

const DynamicComponent: React.FC<DynamicComponentProps> = ({ is, ...props }) => {
  const Component = kComponents[is]

  return <Component {...props} />
}

export default DynamicComponent
