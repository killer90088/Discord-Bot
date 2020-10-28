import React from "react";
import { Button } from "@chakra-ui/core";

export function LandingPage(props) {
  const login = () =>
    (window.location.href = "http://localhost:3001/api/auth/discord");
  return (
    (<h1>Landing Page</h1>),
    (
      <Button onClick={login} variantColor="orange">
        Login
      </Button>
    )
  );
}
