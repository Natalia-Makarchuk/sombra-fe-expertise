import React from 'react'
import type { CheckboxProps } from 'antd'
import { AntCheckbox } from './CheckboxStyles'

import { ICheckbox } from './interfaces'

const Checkbox = (props: CheckboxProps & ICheckbox) => {
  return (
    <AntCheckbox {...props}>
      {props.children}
    </AntCheckbox>
  )
}

export default Checkbox
