import React from 'react'
import type { ButtonProps } from 'antd/es/button/button'

import { AntButton } from './ButtonStyles'

const Button = (props: ButtonProps) => {
  return (
    <AntButton {...props}>
      {props.children}
    </AntButton>
  )
}

export default Button
