import React from "react";
import styled from "@emotion/styled";
import { navigate } from "@reach/router";

import deliveryBoy from "../images/deliveryboy.png";
import map from "../images/map.png";

const DeliveryBoyContainer = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeliveryBoy = styled.img`
  width: 85%;
  height: auto;
`;

const Container = styled.div`
  height: 14vh;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: center;
`;

const T = styled.div`
  margin-top: 30px;
  font-size: 40px;
  text-align: center;
`;

const ST = styled.div`
  font-size: 25px;
  text-align: center;
  color: #777777;
`;

const Map = styled.img`
  width: 100vw;
  height: 30vh;
  margin-top: 30px;
`;

const OrderMore = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  font-size: 0.9rem;
  font-weight: bold;
  background: #271f30;
  cursor: ${p => (p.disabled ? "default" : "pointer")};
  color: white;
  text-transform: uppercase;
  position: relative;
`;

const StatusPage = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100vh"
    }}
  >
    <DeliveryBoyContainer>
      <DeliveryBoy src={deliveryBoy} />
    </DeliveryBoyContainer>
    <Container>
      <T>Amit is on his way!</T>
      <ST>Amit has over 10000 five star deliveries.</ST>
    </Container>
    <Map src={map} />
    <OrderMore onClick={() => navigate("/order")}>Order More</OrderMore>
  </div>
);

export default StatusPage;
