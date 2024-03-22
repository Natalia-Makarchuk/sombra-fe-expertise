import {colorPalette} from './color-palette'

// Custom theme configurations for Ant Design components, utilizing the defined color palette.
export default {
  token: {
    borderRadius: 8,
    borderRadiusLG: 8,
    borderRadiusSM: 8,
    controlHeightSM: 32,
    controlHeight: 40,
    controlHeightLG: 48,
    fontFamily: 'Roboto, sans-serif'
  },
  components: {
    Button: {
      colorPrimary: colorPalette.primary.main,
      colorPrimaryText: colorPalette.neutral.white,
      colorPrimaryHover: colorPalette.primary.variant2,
      colorPrimaryTextHover: colorPalette.neutral.white,
      colorPrimaryActive: colorPalette.primary.variant1,
      colorPrimaryTextActive: colorPalette.neutral.white,
      colorBgContainerDisabled: colorPalette.neutral.coolGray.variant5,

      colorSuccess: colorPalette.secondary.main,
      colorSuccessText: colorPalette.neutral.black,
      colorSuccessHover: colorPalette.secondary.variant2,
      colorSuccessTextHover: colorPalette.neutral.white,
      colorSuccessActive: colorPalette.secondary.variant1,
      colorTextDisabled: colorPalette.neutral.coolGray.variant4,

      colorBgTextHover: colorPalette.primary.variant4,
      colorBgTextActive: colorPalette.additional.blueInformation.variant3,

      colorText: colorPalette.primary.main,
      colorBorder: colorPalette.primary.main,

      controlOutline: colorPalette.additional.transparent
    },
    Input: {
      controlPaddingHorizontal: 15,
      controlPaddingHorizontalSM: 15,
      fontSize: 14,
      fontSizeLG: 16,
      lineHeight: 1.5,

      colorBorder: colorPalette.neutral.coolGray.variant4,
      colorTextDescription: colorPalette.neutral.coolGray.variant4,
      colorTextPlaceholder: colorPalette.neutral.coolGray.variant4,
      colorTextDisabled: colorPalette.neutral.coolGray.variant4,

      colorError: colorPalette.additional.redError.main,
      colorErrorBorderHover: colorPalette.additional.redError.main,
      colorErrorOutline: colorPalette.additional.transparent,

      colorWarning: colorPalette.additional.orangeWarning.main,
      colorWarningBorderHover: colorPalette.additional.orangeWarning.main,
      colorWarningOutline: colorPalette.additional.transparent,

      colorPrimaryHover: colorPalette.neutral.black,
      colorText: colorPalette.neutral.black,

      colorBgContainerDisabled: colorPalette.additional.transparent,
      controlOutline: colorPalette.additional.transparent,
    },
    InputNumber: {
      controlPaddingHorizontal: 15,
      controlPaddingHorizontalSM: 15,
      fontSize: 14,
      fontSizeLG: 16,
      lineHeight: 1.5,

      colorBorder: colorPalette.neutral.coolGray.variant4,
      colorError: colorPalette.additional.redError.main,
      colorErrorBorderHover: colorPalette.additional.redError.main,
      colorErrorOutline: colorPalette.additional.transparent,

      colorWarning: colorPalette.additional.orangeWarning.main,
      colorWarningBorderHover: colorPalette.additional.orangeWarning.main,
      colorWarningOutline: colorPalette.additional.transparent,

      colorTextDescription: colorPalette.neutral.coolGray.variant4,
      colorTextPlaceholder: colorPalette.neutral.coolGray.variant4,
      colorTextDisabled: colorPalette.neutral.coolGray.variant4,

      colorPrimaryHover: colorPalette.neutral.black,
      colorText: colorPalette.neutral.black,

      colorBgContainerDisabled: colorPalette.additional.transparent,
      controlOutline: colorPalette.additional.transparent,
    },
    Select: {
      controlPaddingHorizontal: 15,
      controlPaddingHorizontalSM: 15,
      fontSize: 14,
      fontSizeLG: 16,
      lineHeight: 1.5,

      controlItemBgActive:  colorPalette.additional.transparent,
      controlItemBgHover: colorPalette.neutral.coolGray.variant6,

      colorPrimaryHover: colorPalette.neutral.black,
      colorText: colorPalette.neutral.black,

      colorError: colorPalette.additional.redError.main,
      colorErrorBorderHover: colorPalette.additional.redError.main,
      colorErrorOutline: colorPalette.additional.transparent,

      colorWarning: colorPalette.additional.orangeWarning.main,
      colorWarningBorderHover: colorPalette.additional.orangeWarning.main,
      colorWarningOutline: colorPalette.additional.transparent,

      colorBgContainerDisabled: colorPalette.additional.transparent,
      colorTextDisabled: colorPalette.neutral.coolGray.variant4,
      colorTextDescription: colorPalette.neutral.coolGray.variant4,
      colorTextPlaceholder: colorPalette.neutral.coolGray.variant4
    },
    Tag: {
      blue1: colorPalette.additional.transparent,
      blue3: colorPalette.neutral.gray.variant4,
      blue7: colorPalette.neutral.gray.variant2,

      geekblue1: colorPalette.neutral.gray.variant5,
      geekblue3: colorPalette.neutral.gray.variant5,
      geekblue7: colorPalette.neutral.gray.variant2,

      purple1: colorPalette.additional.transparent,
      purple3: colorPalette.primary.main,
      purple7: colorPalette.additional.blueInformation.variant2,

      magenta1: colorPalette.primary.variant4,
      magenta3:  colorPalette.primary.variant4,
      magenta7: colorPalette.primary.variant2,

      cyan1: colorPalette.additional.transparent,
      cyan3: colorPalette.primary.main,
      cyan7: colorPalette.primary.variant2,

      green1: colorPalette.additional.transparent,
      green3: colorPalette.additional.greenSuccess.variant2,
      green7: colorPalette.additional.greenSuccess.variant1,

      lime1: colorPalette.secondary.variant3,
      lime3: colorPalette.additional.greenSuccess.variant3,
      lime7: colorPalette.additional.greenSuccess.variant1,

      red1: colorPalette.additional.transparent,
      red3: colorPalette.additional.redError.main,
      red7: colorPalette.additional.redError.variant1,

      volcano1: colorPalette.additional.redError.variant3,
      volcano3: colorPalette.additional.redError.variant3,
      volcano7: colorPalette.additional.redError.variant2,

      orange1: colorPalette.additional.transparent,
      orange3: colorPalette.additional.orangeWarning.main,
      orange7: colorPalette.additional.orangeWarning.variant1,

      gold1: colorPalette.additional.orangeWarning.variant3, //background
      gold3: colorPalette.additional.orangeWarning.variant3, //border
      gold7: colorPalette.additional.orangeWarning.variant1, // color
    },
    Switch: {
      colorPrimary: colorPalette.primary.main,
      colorPrimaryHover: colorPalette.additional.blueInformation.variant2,
      colorTextQuaternary: colorPalette.neutral.coolGray.variant6,
    },
    Checkbox: {
      borderRadiusSM: 2,
      paddingXS: 10,
      controlInteractiveSize: 15,
      colorBorder: colorPalette.neutral.coolGray.variant3,
      colorPrimary: colorPalette.primary.main,
      colorPrimaryHover: colorPalette.additional.blueInformation.variant2,
      colorTextDisabled: colorPalette.neutral.coolGray.variant1,
      colorBgContainerDisabled: colorPalette.neutral.white,
    },
    Radio: {
      colorBorder: colorPalette.neutral.coolGray.variant3,
      colorPrimary: colorPalette.primary.main,
    },
    Slider: {
      handleSize: 20,

      colorFillTertiary: colorPalette.neutral.coolGray.variant5,
      colorFillSecondary: colorPalette.neutral.coolGray.variant5,
      colorBgElevated: colorPalette.primary.main,
      colorPrimary: colorPalette.primary.main,
      colorPrimaryBorder: colorPalette.primary.main,
      colorPrimaryBorderHover: colorPalette.additional.blueInformation.variant2,
      colorTextDisabled: colorPalette.neutral.coolGray.variant4,
    },
    Tooltip: {
      paddingXS: 8,
      controlHeight: 29,
      lineHeight: 1,
      colorBgDefault: colorPalette.neutral.coolGray.variant2
    },
    Breadcrumb: {
      colorText: colorPalette.neutral.coolGray.variant1,
      colorTextDescription: colorPalette.neutral.coolGray.variant3,
      colorBgTextHover: colorPalette.primary.main
    },
    Tabs: {
      controlHeight: 22,
      controlHeightLG: 40,

      colorBorderSecondary: colorPalette.neutral.coolGray.variant5,
      colorBgContainer: colorPalette.additional.transparent,
      colorFillAlter: colorPalette.additional.transparent,
      colorPrimary: colorPalette.primary.main,
      colorPrimaryHover: colorPalette.additional.blueInformation.variant2,
      colorText: colorPalette.neutral.coolGray.variant3,
      colorTextDisabled: colorPalette.neutral.coolGray.variant4,
    },
    Typography: {
      colorLink: colorPalette.primary.main,
      colorLinkHover: colorPalette.additional.blueInformation.variant2,
      colorTextDisabled: colorPalette.neutral.coolGray.variant4,
      linkHoverDecoration: 'underline'
    },
    Badge: {
      purple6: colorPalette.neutral.coolGray.variant3,
      blue6: colorPalette.primary.main,
      green6: colorPalette.additional.greenSuccess.variant2,
      red6: colorPalette.additional.redError.main,
      orange6: colorPalette.additional.orangeWarning.main,

      colorTextPlaceholder: colorPalette.neutral.coolGray.variant3,
      colorPrimary: colorPalette.primary.main,
      colorSuccess: colorPalette.additional.greenSuccess.variant2,
      colorError: colorPalette.additional.redError.main,
      colorWarning: colorPalette.additional.orangeWarning.main,
    },
    Avatar: {
      controlHeightSM: 32,
      controlHeight: 40,
      controlHeightLG: 48,
    },
    Table: {
      borderRadius: 8,
      borderRadiusLG: 8,
      colorTextHeading: colorPalette.neutral.coolGray.variant1,
      colorText: colorPalette.neutral.coolGray.variant1,
      boxShadowSecondary: ' 2px 3px 8px 3px rgba(0, 0, 0, 0.16);'
    },
    Pagination: {
      colorBgContainer: '#c8dce4',
      colorPrimaryBorder: colorPalette.additional.transparent,
      colorPrimary: colorPalette.primary.main,
      colorText: colorPalette.primary.main,
      colorPrimaryHover: colorPalette.primary.main
    },
    Divider: {
      colorSplit: colorPalette.neutral.coolGray.variant5
    }
  }
}
