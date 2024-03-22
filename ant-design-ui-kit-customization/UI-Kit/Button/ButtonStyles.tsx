import styled from 'styled-components'
import { Button } from 'antd'
import { colorPalette } from '../../color-palette';

// Extends the Ant Design Button component with custom styles using styled-components
export const AntButton = styled(Button)`
  &.ant-btn-sm {
    padding: 5px 16px;
    line-height: 19px;
    &.ant-btn-text {
      border: none;
      padding: 4px 8px;
      height: 24px;
      font-size: 12px;
      line-height: 14px;
      &.ant-btn-icon-only {
        padding: 4px;
        width: 24px;
        height: 24px;
        vertical-align: super;
      }
    }
    &.ant-btn-icon-only {
      width: 36px;
      height: 32px;
      padding: 5px 8px;
    }
  }
  &:not(.ant-btn-sm) {
    padding: 8px 16px;
    &.ant-btn-text {
      padding: 5px 16px;
      height: 32px;
      line-height: 18px;
      &.ant-btn-icon-only {
        width: 36px;
        height: 32px;
        padding: 5px 8px;
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
    &.ant-btn-icon-only {
      width: 40px;
      height: 40px;
      padding: 8px;
    }
  }
  &.ant-btn-lg {
    padding: 12px 16px;
    font-size: 1.6rem;
    &.ant-btn-text {
      &.ant-btn-icon-only {
        padding: 8px;
        width: 40px;
        height: 40px;
      }
    }
  }
  & svg {
    fill: currentColor;
    vertical-align: text-bottom;
  }
  &.ant-btn-primary:disabled {
    border-color: transparent;
  }
  &.ant-btn-default:not(:disabled):hover {
    background-color: ${colorPalette.primary.variant4};
  }
	&.ant-btn:not(:disabled):focus-visible {
    outline: none;
  }
  &.ant-btn-default.ant-btn-dangerous:not(:disabled) {
    background-color: ${colorPalette.additional.transparent};  
    color: ${colorPalette.additional.redError.variant2};
    border-color: ${colorPalette.additional.redError.variant2};
  }
  &.ant-btn-default.ant-btn-dangerous:not(:disabled):hover {
    border-color: ${colorPalette.additional.redError.variant1};
    color: ${colorPalette.additional.redError.variant1};
    background-color: ${colorPalette.additional.redError.variant3};
  }
  &.ant-btn-primary.ant-btn-dangerous:not(:disabled) {
    color: ${colorPalette.neutral.white};
    background-color: ${colorPalette.additional.redError.variant2};
    border-color: ${colorPalette.additional.redError.variant2};
  }
  &.ant-btn-primary.ant-btn-dangerous:not(:disabled):hover {
    color: ${colorPalette.neutral.white};
    background-color: ${colorPalette.additional.redError.variant1};
    border-color: ${colorPalette.additional.redError.variant1};
  }
  
  &.ant-btn-background-ghost.ant-btn-dangerous:not(:disabled) {
    color: ${colorPalette.additional.redError.variant2};
    background-color: ${colorPalette.additional.transparent};
    border: ${colorPalette.additional.transparent};
  }
  &.ant-btn-background-ghost.ant-btn-dangerous:not(:disabled):hover {
    color: ${colorPalette.additional.redError.variant2};
    background-color: ${colorPalette.additional.redError.variant2};
    border-color: ${colorPalette.additional.redError.variant2};
  }
  
  &.ant-btn-default:not(:disabled):active {
    background-color: ${colorPalette.additional.blueInformation.main};
  }
  &.ant-btn-default:disabled {
    border-color: ${colorPalette.neutral.coolGray.variant4};
    background-color: transparent;
  }
`;
