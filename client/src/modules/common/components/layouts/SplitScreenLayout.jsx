import React from 'react'
import styled from 'styled-components'

const SplitScreenWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`

const SplitScreenSection = styled.section`
  flex: 1 0 50%;
  padding: ${({ theme }) => theme.spacerXLarge};
  position: relative;
`

export default function SplitScreenLayout({ children, banner }) {
  return (
    <SplitScreenWrapper>
      <SplitScreenSection>
        {children}
      </SplitScreenSection>
      <SplitScreenSection>
        {banner}
      </SplitScreenSection>
    </SplitScreenWrapper>
  )
}
