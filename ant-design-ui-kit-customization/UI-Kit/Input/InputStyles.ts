import styled from 'styled-components'
import { IFloatInputStyles } from './interfaces'
import { colorPalette } from '../../color-palette'
import theme from '../../theme'

export const FloatInput = styled.div<IFloatInputStyles>`
  position: relative;
  
  & .label {
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    color: ${colorPalette.neutral.coolGray.variant4};
    left: ${p => p.prefix ? '35px' : '16px'};
    font-size: ${theme.components.Input.fontSize}px;
    line-height: ${theme.components.Input.lineHeight};
    top: ${p => p.size === 'small' ? '5px' : p.size === 'large' ? '13px' : '9px'};
    transition: 0.2s ease all;
  }
  
  & .as-placeholder {
    z-index: 2;
  }

  & .as-label {
    z-index: 2;
    top: -10px;
    font-size: 12px !important;
    background: #FFFFFF;
    padding: 0 4px;
    margin-left: -4px;
  }

  & .as-none {
    display: none;
  }
  
  & .helpText {
    margin-left: 16px;
    font-size: 12px;
    line-height: 18px;
    color: ${colorPalette.neutral.coolGray.variant3};
  }

  & .ant-input:focus {
    border-color: ${colorPalette.primary.main};
  }
  & .ant-input:focus ~ label {
   color: ${colorPalette.primary.main};
  }
  
  & .ant-input-affix-wrapper {
    &:not(.ant-input-affix-wrapper-disabled):hover {
      border-color: ${colorPalette.neutral.black};
      & .ant-input-clear-icon {
        visibility: visible;
        line-height: 1;
      }
      &~.as-label {
        color: ${colorPalette.neutral.black};
      }
    }

    &:not(.ant-input-affix-wrapper-disabled):focus-within {
      border-color: ${colorPalette.primary.main};
      & .ant-input-clear-icon {
        visibility: visible;
        line-height: 1;
      }
      &~.as-label {
        color: ${colorPalette.primary.main};
      }
    }
    
    &~.as-label {
      left: 14px;
      top: -6px;
      line-height: 12px;
      color: ${colorPalette.neutral.coolGray.variant3};
    }
    
    & .ant-input-prefix {
      svg {
        fill: ${colorPalette.neutral.coolGray.variant4};
      }
    }
    
    & .ant-input-clear-icon {
      visibility: hidden;
      line-height: 1;
    }
  }

  & .ant-input-affix-wrapper-disabled {
    border-color: ${colorPalette.neutral.coolGray.variant4};
    & .ant-input-prefix {
      svg {
        fill: ${colorPalette.neutral.coolGray.variant4};
      }
    }
    &~.as-placeholder {
      color: ${colorPalette.neutral.coolGray.variant4};
    }
    &~.as-label {
      color: ${colorPalette.neutral.coolGray.variant4};
    }
    
    &~.helpText {
      color: ${colorPalette.neutral.coolGray.variant4};
    }
  }
  
  & .ant-input-affix-wrapper-status-error {
    border-color: ${colorPalette.additional.redError.main};
    .ant-input-suffix {
      svg {
        fill: currentColor;
      }  
    }
    
    &~.as-label {
      color: ${colorPalette.additional.redError.main};
    }

    &~.helpText {
      color: ${colorPalette.additional.redError.variant2};
    }

    &:not(.ant-input-affix-wrapper-disabled):hover, &:not(.ant-input-affix-wrapper-disabled):focus-within {
      border-color: ${colorPalette.additional.redError.main};
      &~.as-label {
        color: ${colorPalette.additional.redError.main};
      }
      &~.helpText {
        color: ${colorPalette.additional.redError.variant2};
      }
    }
  }
  
  & .ant-input-affix-wrapper-status-warning {
    .ant-input-suffix {
      svg {
        fill: currentColor;
      }
    }
    &~.as-label {
      color: ${colorPalette.additional.orangeWarning.main};
    }

    &~.helpText {
      color: ${colorPalette.additional.orangeWarning.variant2};
    }

    &:not(.ant-input-affix-wrapper-disabled):hover, &:not(.ant-input-affix-wrapper-disabled):focus-within {
      border-color: ${colorPalette.additional.orangeWarning.main};
      &~.as-label {
        color: ${colorPalette.additional.orangeWarning.main};
      }
      &~.helpText {
        color: ${colorPalette.additional.orangeWarning.variant2};
      }
    }
  }
`
