import React from "react";
import styled from "@emotion/styled";

import pizzaImg from "../pizza.png";

const PizzaContainer = styled.div`
  margin: 30px auto;
  width: 90%;
  border: none;
  border-radius: 15px;
  background: #271f30;
`;

const PizzaImg = styled.img`
  height: auto;
  width: 100%;
  border: none;
  border-radius: 15px 15px 0 0;
`;

const PizzaInfoContainer = styled.div`
  padding: 30px;
  background: #291f30;
  color: #fff;
  border-radius: 0 0 15px 15px;
`;

const PizzaTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const PizzaDesc = styled.div`
  font-size: 15px;
`;

const PizzaQtyContainer = styled.div`
  margin: 20px auto;
  display: flex;
`;

const PizzaQtyButton = styled.div`
  color: ${p => (p.disabled ? "#aaa" : "#fff")};
  cursor: ${p => (p.disabled ? "default" : "pointer")};
  font-weight: bold;
  font-size: 1.5rem;
`;

const PizzaQty = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
  margin: 0 20px;
`;

export default ({ pizza, setPizzaQty }) => (
  <PizzaContainer>
    <PizzaImg src={pizzaImg} />
    <PizzaInfoContainer>
      <PizzaTitle>{pizza.title}</PizzaTitle>
      <PizzaDesc>{pizza.description}</PizzaDesc>
      <PizzaQtyContainer>
        <PizzaQtyButton
          disabled={pizza.qty === 0 ? true : false}
          onClick={() => (pizza.qty !== 0 ? setPizzaQty(pizza.qty - 1) : true)}
        >
          -
        </PizzaQtyButton>
        <PizzaQty>{pizza.qty}</PizzaQty>
        <PizzaQtyButton onClick={() => setPizzaQty(pizza.qty + 1)}>
          +
        </PizzaQtyButton>
      </PizzaQtyContainer>
    </PizzaInfoContainer>
  </PizzaContainer>
);
