import React from "react";
import { navigate } from "@reach/router";
import styled from "@emotion/styled";

import dominos from "../dominos-logo.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #271f30;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Logo = styled.img`
  height: 20vh;
  width: auto;
`;

const Header = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
  font-size: 2.5rem;
  color: white;
  font-weight: bolder;
`;

const Button = styled.div`
  width: 80%;
  color: white;
  font-weight: bolder;
  font-size: 1.1rem;
  text-transform: uppercase;
  padding: 15px;
  margin: 20px 0;
  background: #298bf5;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
`;

export default () => (
  <Container>
    <Logo src={dominos} />
    <Header>dominos pizza</Header>
    <Button>Order</Button>
    <Button onClick={() => navigate("/deals")}>Deals</Button>
  </Container>
);
