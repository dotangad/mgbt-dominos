import React from "react";
import styled from "@emotion/styled";
import { navigate } from "@reach/router";

import dominos from "../dominos-logo.png";
import deals from "../deals";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background: #271f30;
  height: 10vh;
  color: #fff;
  width: 100%;
`;

const Logo = styled.img`
  height: 70%;
  width: auto;
`;

const Link = styled.div`
  font-size: 1rem;
  font-weight: bolder;
  text-transform: uppercase;
  cursor: pointer;
`;

const DealContainer = styled.div`
  padding: 20px;
  margin: 20px 0;
`;

const DealTitle = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const DealDesc = styled.div`
  text-align: justify;
`;

const DealCode = styled.div`
  color: #666;
  font-weight: bold;
  font-size: 0.9rem;
  text-transform: uppercase;
  margin: 20px 0;
`;

const Deal = ({ deal }) => (
  <DealContainer>
    <DealTitle>{deal.title}</DealTitle>
    <DealDesc>{deal.description}</DealDesc>
    <DealCode>{deal.code}</DealCode>
  </DealContainer>
);

export default () => (
  <Container>
    <Navbar>
      <Logo src={dominos} />
      <Link onClick={() => navigate("/order")}>order</Link>
    </Navbar>
    {deals.map(deal => (
      <Deal deal={deal}></Deal>
    ))}
  </Container>
);
