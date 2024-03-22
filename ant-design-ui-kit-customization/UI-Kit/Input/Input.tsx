import React, { useState, forwardRef, useEffect } from 'react'
import { Input as AntInput } from 'antd'
import type { InputProps } from 'antd/es/input/Input'

import { CloseIcon } from '../Icons/Icons'

import { IFloatInput } from './interfaces'

import { FloatInput } from './InputStyles'

export const Input = (props: InputProps & IFloatInput) => {
  const { forwardedRef, autoFocus, showPlaceholderOnFocus = false, ...passedProps } = props

  let {
    label,
    value,
    defaultValue,
    placeholder,
    size,
    helpertext,
    prefix,
    status,
    allowClear,
    withoutLabel = false
  } = passedProps

  const [focus, setFocus] = useState(false)

  if (!placeholder) placeholder = label

  const isOccupied =
    (!showPlaceholderOnFocus && focus) ||
    (value && (value as string).length !== 0) ||
    ((defaultValue && (defaultValue as string).length !== 0) as boolean)

  const labelClass = showPlaceholderOnFocus ? 'label as-placeholder' : isOccupied ? withoutLabel ? 'label as-none' : 'label as-label' : 'label as-placeholder'

  const prefixIcon = prefix ? prefix : <span />

  return (
    <FloatInput
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
      prefix={prefix as string}
      size={size}
      isOccupied={isOccupied}
    >
      <AntInput
        {...passedProps}
        prefix={prefixIcon}
        placeholder=""
        allowClear={
          typeof allowClear === 'boolean' ? allowClear : !status?.length ? { clearIcon: <CloseIcon /> } : false
        }
        ref={forwardedRef}
      >
        {props.children}
      </AntInput>
      <label className={labelClass}>{isOccupied ? label : placeholder}</label>
      {helpertext ? <label className='helpText'>{helpertext}</label> : null}
    </FloatInput>
  )
}

export default forwardRef<any, InputProps & IFloatInput>((props, ref) => <Input {...props} forwardedRef={ref} />)
