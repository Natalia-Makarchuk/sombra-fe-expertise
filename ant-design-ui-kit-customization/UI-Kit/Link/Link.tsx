import React from 'react'
import type { LinkProps } from 'antd/es/typography/Link'

import { AntLink } from './LinkStyles'
import { ILink } from './interfaces'

const Link = (props: LinkProps & ILink) => {
  return (
    <AntLink {...props}>
      {props.children}
    </AntLink>
  )
}

export default Link
