import React from "react";
import styled from "@emotion/styled";
import { navigate } from "@reach/router";

const CartDiv = styled.div`
  height: 600px;
  position: fixed;
  top: calc(100% - 60px);
  width: 100%;
  max-width: 500px;
  z-index: 10000000001;
  transition: top 0.5s ease;
`;

const CartHeader = styled.div`
  height: 60px;
  width: 100%;
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: #271f30;
  color: white;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: bolder;
`;

const CartContents = styled.div`
  height: 480px;
  background: white;
  padding: 20px 0;
  overflow-y: auto;
`;

const MoveToCheckout = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 0.9rem;
  font-weight: bold;
  background: ${p => (p.disabled ? "#666" : "#271f30")};
  cursor: ${p => (p.disabled ? "default" : "pointer")};
  color: white;
  text-transform: uppercase;
`;

export default ({ open, setOpen, children }) => (
  <CartDiv
    style={{
      top: open ? "calc(100% - 600px)" : "calc(100% - 60px)"
    }}
  >
    <CartHeader onClick={() => setOpen(!open)}>
      <div>Cart</div>
      <i
        style={{
          transform: `rotate(${open ? "180" : "0"}deg)`,
          transition: "transform 0.5s ease"
        }}
        className="fas fa-arrow-up"
      />
    </CartHeader>
    <CartContents>{children}</CartContents>
    <MoveToCheckout onClick={() => navigate("/status")}>
      <span>Checkout</span>
      <i
        style={{ marginLeft: "5px", fontSize: "0.8rem" }}
        className="fas fa-arrow-right"
      />
    </MoveToCheckout>
  </CartDiv>
);
