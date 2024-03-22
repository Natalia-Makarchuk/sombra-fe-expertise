import styled from 'styled-components'
import { Checkbox } from 'antd'
import { ICheckbox } from './interfaces'
import { colorPalette } from '../../color-palette'

export const AntCheckbox = styled(Checkbox) <ICheckbox>`
  &.ant-checkbox-wrapper {
    line-height: 1.4;
    
    &:not(.ant-checkbox-wrapper-disabled):hover {
      .ant-checkbox:not(.ant-checkbox-indeterminate) {
        .ant-checkbox-inner {
          border-color: ${colorPalette.neutral.black};
        } 
      }
    }
    
    .ant-checkbox {
      .ant-checkbox-inner {
        height: ${p => p.size === 'small' ? '15px' : '18px'}; 
        width: ${p => p.size === 'small' ? '15px' : '18px'};
        
        &::after {
          width: ${p => p.size === 'small' ? '5px' : '6.5px'};
          height: ${p => p.size === 'small' ? '9px' : '10.5px'};
        }
      }

      &.ant-checkbox-indeterminate {
        .ant-checkbox-inner {
          background-color: ${colorPalette.primary.main};
          border-color: ${colorPalette.primary.main};
          &::after {
            background-color: ${colorPalette.neutral.white};
            width: ${p => p.size === 'small' ? '11px' : '14px'};
            height: 2px;
          }
        }
        
        &.ant-checkbox-checked {
          .ant-checkbox-inner::after {
            background-color: ${colorPalette.additional.transparent};
            border: 2px solid #fff;
            border-top: 0;
            border-inline-start: 0;
            inset-inline-start: 21.5%;
            width: ${p => p.size === 'small' ? '5px' : '6.5px'};
            height: ${p => p.size === 'small' ? '9px' : '10.5px'};
         }
        }
      }

      &~span {
        color: ${colorPalette.neutral.coolGray.variant1};
        margin-top: 2px;
      }
      
      &.ant-checkbox-checked {
        .ant-checkbox-inner {
          &::after {
            transform: rotate(45deg) scale(1) translate(-50%,-50%) !important;
          }
        }
      }
    }
    
    &.ant-checkbox-wrapper-disabled {
      .ant-checkbox-disabled {
        .ant-checkbox-inner {
          border-color: ${colorPalette.neutral.coolGray.variant4};
        }
        
        &.ant-checkbox-checked {
          .ant-checkbox-inner {
            border-color: ${colorPalette.neutral.coolGray.variant4};
            background-color: ${colorPalette.neutral.coolGray.variant4};
            &::after {
              border-color: ${colorPalette.neutral.white};
            }
          }
        }
        &.ant-checkbox-indeterminate {
          .ant-checkbox-inner {
            background-color: ${colorPalette.neutral.coolGray.variant4};
          }
        }
      }
    }
  }
`
