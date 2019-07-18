import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const DashboardWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`

const DashboardHeader = styled.header`
  position: absolute;
  top: 0;
  left: ${props => props.theme.dashboardSidebarWidth};
  right: 0;
  height: ${props => props.theme.dashboardHeaderHeight};
  border-bottom: 1px solid gray;
  padding: 0 ${props => props.theme.dashboardMainPaddingX};
`

const DashboardSidebar = styled.aside`
  position: absolute;
  top: ${props => props.theme.dashboardHeaderHeight};
  left: 0;
  width: ${props => props.theme.dashboardSidebarWidth};
  height: calc(100% - ${props => props.theme.dashboardHeaderHeight});
  border-right: 1px solid gray;
`

const DashboardMain = styled.main`
  position: absolute;
  top: ${props => props.theme.dashboardHeaderHeight};
  left: ${props => props.theme.dashboardSidebarWidth};
  right: 0;
  height: calc(100% -  ${props => props.theme.dashboardHeaderHeight});
  overflow-y: scroll;
  padding: ${props => `${props.theme.dashboardMainPaddingY} ${props.theme.dashboardMainPaddingX}`};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    height: ${({ expanded }) => expanded ? '100%' : '0'};
    right: 0;
    left: 0;
    background: ${({ theme }) => theme.modalBackgroundDrop};
    opacity: ${({ expanded }) => expanded ? '1' : '0'};
    transition: opacity 0.2s ease;
  }
`

const DashboardSidebarToggle = styled.button`
  width: calc(${props => props.theme.dashboardSidebarWidth} + 1px);
  height: calc(${props => props.theme.dashboardHeaderHeight} + 1px);
  margin: 0;
  outline: none;
  border-left: none;
  border-top: none;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BurgerMenu = styled.span`
  height: ${props => props.theme.dashboardSidebarMenuWidth};
  width: ${props => props.theme.dashboardSidebarMenuWidth};
  position: relative;

  &::after {
    content: '';
    left: 0;
    bottom: calc(${props => props.expanded ? '50%' : '11px'} - 1px);
    position: absolute;
    width: ${props => props.expanded ? '100%' : '75%'};
    border: 1px solid ${props => props.theme.textColor};
    border-radius: 5px;
    transition: all 0.2s ease;
    transform: ${props => props.expanded ? 'rotate(45deg)' : ''};
  }

  &::before {
    content: '';
    left: 0;
    top: calc(${props => props.expanded ? '50%' : '11px'} - 1px);
    position: absolute;
    width: 100%;
    border: 1px solid ${props => props.theme.textColor};
    border-radius: 5px;
    transition: all 0.2s ease;
    transform: ${props => props.expanded ? 'rotate(-45deg)' : ''};
  }
`

export default function Dashboard({ sidebar, header, children, onExpand }) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    onExpand(expanded)
    return () => {};
  }, [expanded, onExpand])

  function handleToggleClick() {
    setExpanded(!expanded)
  }


  return (
    <DashboardWrapper>
      <DashboardSidebarToggle expanded={expanded} onClick={handleToggleClick}>
        <BurgerMenu expanded={expanded} />
      </DashboardSidebarToggle>
      <DashboardHeader>
        {header}
      </DashboardHeader>
      <DashboardSidebar>
        {sidebar}
      </DashboardSidebar>
      <DashboardMain expanded={expanded}>
        {children}
      </DashboardMain>
    </DashboardWrapper>
  )
}
