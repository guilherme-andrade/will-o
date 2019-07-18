import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose'


const AnimatedBackdrop = posed.div({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0
  }
})

const ModalWrapper = styled(AnimatedBackdrop)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.modalBackgroundDrop};
`

const AnimatedSlideDiv = posed.div({
  enter: {
    x: 0,
  },
  exit: {
    x: '100%'
  }
})

const ModalDialog = styled(AnimatedSlideDiv)`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: ${({ theme }) => theme.sideModalWidth};
  background: ${({ theme }) => theme.backgroundColor};
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`

const ModalHeader = styled.header`
  flex: 0 0 ${props => props.theme.sideModalHeaderHeight};
  padding: ${({ theme }) => `${theme.sideModalPaddingY} ${theme.sideModalPaddingX}`};
  background: ${props => props.theme.sideModalHeaderBackground};
  color: ${({ theme }) => theme.sideModalHeaderColor};
`

const ModalBody = styled.main`
  padding: ${({ theme }) => `${theme.sideModalPaddingY} ${theme.sideModalPaddingX}`};
  flex: 1 1 auto;
`

const ModalFooter = styled.footer`
  padding: ${({ theme }) => `${theme.sideModalPaddingY} ${theme.sideModalPaddingX}`};
  flex: 0 0 ${props => props.theme.sideModalFooterHeight};
`

const ModalClose = styled.button`
  position: absolute;
  top: ${props => props.theme.sideModalPaddingY};
  right: ${props => props.theme.sideModalPaddingX};
  appearance: none;
  border: none;
  cursor: pointer;
  background: transparent;
  padding: 1rem;

  &:focus {
    outline: none;
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: ${({ theme }) => theme.sideModalCloseWidth};
    background: ${({ theme }) => theme.sideModalHeaderColor};
    height: 2px;
    border-radius: 3px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`

export default function SideModal({ header, children, footer, onClose }) {
  const [visible, setVisible] = useState(true);
  const node = useRef();

  async function handleClose(event) {
    await setVisible(false)
    setTimeout(() => {
      onClose(event)
    }, 500)
  }

  function handleClick(e) {
    if (node.current.contains(e.target)) {
      return;
    }
    handleClose(e)
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  return (
    <PoseGroup animateOnMount>
      {
        visible && (
          <ModalWrapper tabIndex="-1" role="dialog" key="modal">
            <ModalDialog role="document" ref={node}>
              <ModalContent>
                <ModalHeader>
                  {header}
                  <ModalClose type="button" aria-label="Close" onClick={handleClose} />
                </ModalHeader>
                <ModalBody>{children}</ModalBody>
                {
                  footer ?
                    <ModalFooter>{footer}</ModalFooter> :
                    null
                }
              </ModalContent>
            </ModalDialog>
          </ModalWrapper>
        )
      }
    </PoseGroup>
  )
}
