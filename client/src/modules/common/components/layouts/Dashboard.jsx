import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useClickOutside } from '@hooks'


export const DashboardHeaderNav = styled.nav`
  height: 100%;
  ${({ theme }) => theme.mixins.flex('row', 'space-between', 'center')}
`

export const DashboardHeaderNavButton = styled(Link)`
  ${(props) => props.theme.mixins.button(props)}
  ${({ theme }) => theme.mixins.flex('row', 'center', 'center')}
  height: ${props => props.theme.dashboardHeaderHeight};
  padding-top: 0;
  padding-bottom: 0;
  border-radius: 0;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.bigFontSize};
`

export const DashboardSidebarLinkText = styled.span`
  text-transform: uppercase;
  text-decoration: none;
`

export const DashboardWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`

export const DashboardHeader = styled.header`
  position: absolute;
  top: 0;
  left: ${props => props.theme.dashboardSidebarWidth};
  right: 0;
  height: ${props => props.theme.dashboardHeaderHeight};
  border-bottom: ${({ theme }) => theme.dashboardBorder};
  padding: 0 0 0 ${props => props.theme.dashboardMainPaddingX};
  box-shadow: ${({ theme }) => theme.dashboardBoxShadow};
`

export const DashboardSidebar = styled.aside`
  position: absolute;
  top: ${({ theme }) => theme.dashboardHeaderHeight};
  left: 0;
  width: ${props => props.expanded ? props.theme.dashboardSidebarExpandedWidth : props.theme.dashboardSidebarWidth};
  bottom: 0;
  border-right: ${({ theme }) => theme.dashboardBorder};
  box-shadow: ${({ theme }) => theme.dashboardBoxShadow};
  padding-bottom: ${({ theme }) => theme.dashboardHeaderHeight};
  background: ${({ theme }) => theme.backgroundColor};
  z-index: 10;
  transition: width 0.2s ease-in;

  ${DashboardSidebarLinkText} {
    display: ${(props) => props.expanded ? 'block' : 'none'};
    transform: ${(props) => props.expanded ? 'scaleX(1)' : 'scaleX(0.5)'};
    opacity: ${(props) => props.expanded ? '1' : '0.5'};
  }
`

export const DashboardMain = styled.main`
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

export const DashboardSidebarToggle = styled.button`
  width: calc(${props => props.theme.dashboardSidebarWidth} + 1px);
  height: calc(${props => props.theme.dashboardHeaderHeight} + 1px);
  margin: 0;
  outline: none;
  border-left: none;
  border-top: none;
  border-bottom: ${({ theme }) => theme.dashboardBorder};
  border-right: ${({ theme }) => theme.dashboardBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  background: ${({ theme }) => theme.dashboardToggleBackground};
`

export const BurgerMenu = styled.span`
  height: ${props => props.theme.dashboardSidebarMenuWidth};
  width: ${props => props.theme.dashboardSidebarMenuWidth};
  position: relative;

  &::after {
    content: '';
    left: 0;
    bottom: calc(${props => props.expanded ? '50%' : '11px'} - 1px);
    position: absolute;
    width: ${props => props.expanded ? '100%' : '75%'};
    border: 1px solid ${({ theme }) => theme.colorForBackground(theme.dashboardToggleBackground)};
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
    border: 1px solid ${({ theme }) => theme.colorForBackground(theme.dashboardToggleBackground)};
    border-radius: 5px;
    transition: all 0.2s ease;
    transform: ${props => props.expanded ? 'rotate(-45deg)' : ''};
  }
`


export const DashboardSidebarNav = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`


export const DashboardSidebarLink = styled(Link)`
  display: flex;
  justify-content: space-evenly;
  position: relative;
  color: ${(props) => props.current ? props.theme.dashboardLinkActiveColor : props.theme.dashboardLinkColor};
  padding: ${({ theme }) => theme.dashboardSidebarLinkPadding};
  text-decoration: none;
  font-weight: bold;

  &::after {
    content: '';
    position: absolute;
    right: -1px;
    top: 0;
    bottom: 0;
    background: ${(props) => props.current ? props.theme.dashboardLinkActiveColor : 'transparent'};
    width: 2px;
  }

  &:hover {
    color: ${(props) => props.current ? null : props.theme.dashboardLinkHoverColor};

    &::after {
      background: ${(props) => props.current ? null : props.theme.dashboardLinkHoverColor};
    }
  }
`


export default function Dashboard({ sidebar, header, children, onExpand }) {
  const [expanded, setExpanded] = useState(false);
  const node = useRef();
  const toggle = useRef();

  useEffect(() => {
    onExpand(expanded)
    return () => {};
  }, [expanded, onExpand])

  function handleToggleClick() {
    setExpanded(!expanded)
  }

  function handleClose() {
    setExpanded(false)
  }

  useClickOutside(node, handleClose, [toggle])

  return (
    <DashboardWrapper>
      <DashboardSidebarToggle expanded={expanded} onClick={handleToggleClick} ref={toggle}>
        <BurgerMenu expanded={expanded} />
      </DashboardSidebarToggle>
      <DashboardHeader>
        {header}
      </DashboardHeader>
      <DashboardSidebar expanded={expanded} ref={node}>
        {sidebar}
      </DashboardSidebar>
      <DashboardMain expanded={expanded}>
        {children}
      </DashboardMain>
    </DashboardWrapper>
  )
}
