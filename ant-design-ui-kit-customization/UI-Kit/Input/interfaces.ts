import { ReactNode, ForwardedRef } from 'react'
import type { SizeType } from 'antd/es/config-provider/SizeContext'
import type { InputRef } from 'antd/es/input/Input'

export interface IFloatInput {
  label?: string,
  helpertext?: string,
  showPlaceholderOnFocus?: boolean,
  withoutLabel?: boolean,
  forwardedRef?: ForwardedRef<InputRef>
}

export interface IFloatInputStyles {
  size?: SizeType,
  prefix?: ReactNode,
  isOccupied: boolean
}
