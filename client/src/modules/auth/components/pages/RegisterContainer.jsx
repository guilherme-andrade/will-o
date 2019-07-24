import React from "react";
import styled from "styled-components";
import { SplitScreenLayout } from "@common-layouts";
import { ApartmentRent } from "@common-illustrations";
import { AuthForm } from "../views";

const Banner = styled(ApartmentRent)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export default function RegisterContainer() {
  return (
    <SplitScreenLayout banner={<Banner />}>
      <AuthForm />
    </SplitScreenLayout>
  );
}
