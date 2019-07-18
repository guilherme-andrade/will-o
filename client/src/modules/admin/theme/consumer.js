import styled from 'styled-components'

export default styled.div`
  font-family:      ${props => props.theme.baseFontFamily};
  font-size:        ${props => props.theme.baseFontSize};
  font-weight:      ${props => props.theme.baseFontWeight};
  letter-spacing:   ${props => props.theme.baseLetterSpacing};
  line-height:      ${props => props.theme.baseLineHeight};
  color:            ${props => props.theme.textColorDark};
  background:       ${props => props.theme.backgroundColorLight};

  h1 {
    font-family:      ${props => props.theme.h1FontFamily};
    font-size:        ${props => props.theme.h1FontSize};
    font-weight:      ${props => props.theme.h1FontWeight};
    letter-spacing:   ${props => props.theme.h1LetterSpacing};
    line-height:      ${props => props.theme.h1LineHeight};
  }

  h2 {
    font-family:      ${props => props.theme.h2FontFamily};
    font-size:        ${props => props.theme.h2FontSize};
    font-weight:      ${props => props.theme.h2FontWeight};
    letter-spacing:   ${props => props.theme.h2LetterSpacing};
    line-height:      ${props => props.theme.h2LineHeight};
  }

  h3 {
    font-family:      ${props => props.theme.h3FontFamily};
    font-size:        ${props => props.theme.h3FontSize};
    font-weight:      ${props => props.theme.h3FontWeight};
    letter-spacing:   ${props => props.theme.h3LetterSpacing};
    line-height:      ${props => props.theme.h3LineHeight};
  }

  small {
    font-size: ${props => props.theme.smallFontSize};
    font-weight: ${props => props.theme.smallFontWeight};
  }

  strong {
    font-size: ${props => props.theme.strongFontSize};
    font-weight: ${props => props.theme.strongFontWeight};
  }
`
