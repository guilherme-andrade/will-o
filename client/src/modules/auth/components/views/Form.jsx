import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from "@fortawesome/pro-light-svg-icons";

const Paragraph = styled.p`
  font-size: 30px;
`;

const LoginWrapper = styled.div`
  height: 100%;
  padding-bottom: 10%;
  ${({ theme }) => theme.mixins.flex("column", "center", "start")};
`;

const Button = styled.button`
  ${props => props.theme.mixins.button(props)};
  margin-top: ${({ theme }) => theme.spacerX};
  font-size: 20px;
  width: 350px;
`;

const Input = styled.input`
  ${props => props.theme.mixins.input(props)};
  margin-top: ${({ theme }) => theme.spacerX};
  font-size: 20px;
  width: 350px;
`;

export default function RegisterView({ onSubmit, onUpdateField, user }) {

  function onUpdateEmail(e) {
    onUpdateField('email', e.target.value)
  }

  function onUpdatePassword(e) {
    onUpdateField('password', e.target.value);
  }

  return (
    <LoginWrapper>
      <h1>Start by registering</h1>
      <Paragraph>
        Create an Account by providing an email and password
      </Paragraph>

      <Input onBlur={onUpdateEmail} type="email" />
      <Input onBlur={onUpdatePassword} type="password" />

      <Button variant="textColor" onClick={onSubmit}>
        Sign Up
        <FontAwesomeIcon icon={faLongArrowRight} />
      </Button>
    </LoginWrapper>
  );
}
