import tinycolor from 'tinycolor2'
import { multiplyDimension, transparentize, colorForBackground } from './functions'

const primary = tinycolor('#17CDD7');
const secondary = tinycolor('#540D6E');
const success = tinycolor('#20BF55');
const info = tinycolor('#245684');
const warning = tinycolor('#ECC30B');
const danger = tinycolor('#FF5E5B');
const dark = tinycolor('#0A1721');
const light = tinycolor('#FFFFFF');


class Theme {
  constructor() {
    // colors
    this.primary = primary.toHexString();
    this.secondary = secondary.toHexString();
    this.success = success.toHexString();
    this.info = info.toHexString();
    this.warning = warning.toHexString();
    this.danger = danger.toHexString();

    this.light = light.toHexString();
    this.dark = dark.toHexString();

    this.backgroundColor = this.light;
    this.textColor = this.dark;

    // root font
    this.baseFontFamily = '\'Lato\', sans-serif'
    this.baseFontSize = '17px'
    this.baseFontWeight = '300'
    this.baseLetterSpacing = '.2px'
    this.baseLineHeight = '1.6'


    // small font
    this.smallFontSize = '12px'
    this.smallFontWeight = 'inherit'


    // big font
    this.strongFontSize = '21px'
    this.strongFontWeight = 'bold'


    // h1
    this.h1FontFamily = '\'Playfair Display\', serif'
    this.h1FontSize = '74px'
    this.h1FontWeight = ''
    this.h1LetterSpacing = ''
    this.h1LineHeight = ''


    // h2
    this.h2FontFamily = '\'Lato\', sans-serif'
    this.h2FontSize = '32px'
    this.h2FontWeight = ''
    this.h2LetterSpacing = ''
    this.h2LineHeight = ''


    // h3
    this.h3FontFamily = '\'Lato\', sans-serif'
    this.h3FontSize = '24px'
    this.h3FontWeight = ''
    this.h3LetterSpacing = ''
    this.h3LineHeight = ''


    // borders
    this.border = ''
    this.borderLarge = ''


    // backdrops
    this.backdropColor = 'rgba(0, 0, 0, 0.16)'


    // box shadow
    this.boxShadow = `0 0 16px -8px ${this.backdropColor}`
    this.boxShadowLarge = `0 0 32px -16px ${this.backdropColor}`
    this.boxShadowSmall = `0 0 8px -4px ${this.backdropColor}`


    // border radius
    this.borderRadius = '4px'
    this.borderRadiusLarge = multiplyDimension(this.borderRadius, 2)
    this.borderRadiusSmall = multiplyDimension(this.borderRadius, .5)


    // spacers
    this.spacerX = '2rem'
    this.spacerXSmall = '1rem'
    this.spacerXLarge = multiplyDimension(this.spacerX, 2)

    // components

    // links
    this.linkColor = this.textColor
    this.activeLinkColor = this.primary

    // input
    this.inputPaddingY = '.25rem'
    this.inputPaddingX = multiplyDimension(this.inputPaddingY, 2)


    // button
    this.buttonPaddingY = '.75rem'
    this.buttonPaddingX = multiplyDimension(this.buttonPaddingY, 3)


    // layouts

    // dashboard
    this.dashboardHeaderHeight = '76px'
    this.dashboardSidebarWidth = '76px'
    this.dashboardSidebarExpandedWidth = '300px'
    this.dashboardSidebarAccentWidth = '2px'
    this.dashboardSidebarMenuWidth = '35px'
    this.dashboardSidebarLinkPadding = '2rem 1rem'
    this.dashboardLinkColor = this.linkColor
    this.dashboardLinkActiveColor = this.activeLinkColor
    this.dashboardLinkHoverColor = transparentize(this.activeLinkColor, 0.5)
    this.dashboardMainPaddingX = '2rem'
    this.dashboardMainPaddingY = '2rem'
    this.dashboardMainBackground = this.light;
    this.dashboardBorder = '1px solid transparent'
    this.dashboardBoxShadow = this.boxShadowLarge
    this.dashboardToggleBackground = this.textColor


    // modals
    this.modalBackgroundDrop = 'rgba(0, 0, 0, 0.8)'


    // side-modal
    this.sideModalHeaderHeight = '75px'
    this.sideModalFooterHeight = '75px'
    this.sideModalWidth = '800px'
    this.sideModalPaddingX = '3rem'
    this.sideModalPaddingY = '3rem'
    this.sideModalCloseWidth = this.baseFontSize
    this.sideModalHeaderBackground = this.light
    this.sideModalHeaderColor = tinycolor(this.sideModalHeaderBackground).isLight() ? this.dark : this.light;

    // functions
    this.colorForBackground = colorForBackground

    this.transparentize = transparentize

    // mixins
    this.mixins = {

      button: ({ variant, outline }) => `
        text-decoration: none;
        padding: ${this.buttonPaddingY} ${this.buttonPaddingX};
        border: 2px solid ${this[variant]};
        color: ${outline ? this[variant] : this.colorForBackground(this[variant])};
        background: ${this[variant]};
        font-weight: bold;
        border-radius: ${this.borderRadius};

        & > svg {
          margin: 0 1rem;
        }
      `,

      flex: (direction, justify, align) => `
        display: flex;
        flex-direction: ${direction};
        justify-content: ${justify};
        align-items: ${align};
      `
    }
}

  getInstance() {
    return this;
  }
}

const theme = new Theme();

export default theme.getInstance();
