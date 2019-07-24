import React, { useState } from "react";
import styled from "styled-components";
import { SplitScreenLayout } from "@common-layouts";
import { ApartmentRent } from "@common-illustrations";
import { AuthForm } from "../views";
import { Mutation } from "react-apollo";
import { GraphqlClient } from "../../api";
import { INITIAL_STATE } from "../../config";

const Banner = styled(ApartmentRent)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export default function RegisterContainer() {
  const [auth, setAuth] = useState(INITIAL_STATE);

  function updateUserField(field, value) {
    setAuth({
      ...auth,
      user: {
        ...auth.user,
        [field]: value
      }
    });
  }

  return (
    <SplitScreenLayout banner={<Banner />}>
      <Mutation mutation={GraphqlClient.REGISTER}>
        {(register, { data }) => {
          if (data) {
            setAuth(data)
          }
          return (
            <AuthForm
              onSubmit={() => register({ variables: auth.user })}
              onUpdateField={updateUserField}
              user={auth.user}
            />
          )
        }
      }
      </Mutation>
    </SplitScreenLayout>
  );
}
