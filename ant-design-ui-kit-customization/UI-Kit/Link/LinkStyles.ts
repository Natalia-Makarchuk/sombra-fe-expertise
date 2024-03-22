import styled from 'styled-components'
import { Typography } from 'antd'

import { ILink } from './interfaces'

const { Link } = Typography
export const AntLink = styled(Link) <ILink>`
  &.ant-typography {
    font-size: ${p => p.size === 'default' ? '14px' : '16px'};
    display: inline-flex;
    white-space: nowrap;
    align-items: center;
    
    &:not(.ant-typography-disabled):hover {
      text-decoration: underline !important;
    }
    
    svg {
      fill: currentColor;
      width: ${p => p.size === 'default' ? '14px' : '20px'};
      height: ${p => p.size === 'default' ? '14px' : '20px'};
    }
  }
`
