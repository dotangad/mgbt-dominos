import React from "react";
import styled from "@emotion/styled";
import { navigate } from "@reach/router";

import dominos from "../dominos-logo.png";
import allPizzas from "../pizzas";
import Cart from "../components/Cart";
import pizzaImg from "../pizza.png";
import Pizza from "../components/Pizza";

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

const CartItemContainer = styled.div`
  margin: 10px auto;
  width: 80%;
  display: flex;
`;

const CartItemImg = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border: none;
  border-radius: 15px 0 0 15px;
`;

const CartItemInfo = styled.div`
  flex: 1;
  height: 50px;
  width: calc(100% - 50px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #271f30;
  color: white;
  border: none;
  border-radius: 0 15px 15px 0;
  padding: 40px;
`;

const CartItemTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const CartItemQty = styled.span`
  font-size: 15px;
  margin-left: 10px;
  font-weight: bold;
`;

const CartItem = ({ pizza, setPizzaQty }) => (
  <CartItemContainer>
    <CartItemImg src={pizzaImg}></CartItemImg>
    <CartItemInfo>
      <div>
        <CartItemTitle>{pizza.title}</CartItemTitle>
        <CartItemQty>x{pizza.qty}</CartItemQty>
      </div>
      <i className="fas fa-times" onClick={() => setPizzaQty(0)} />
    </CartItemInfo>
  </CartItemContainer>
);

export default () => {
  const [cartOpen, setCartOpen] = React.useState(false);
  const [pizzas, setPizzas] = React.useState(
    allPizzas.map(p => ({ ...p, qty: 0 }))
  );

  const setPizzaQty = i => qty => {
    const np = [...pizzas];
    np[i].qty = qty;
    setPizzas(np);
  };

  return (
    <Container>
      <Navbar>
        <Logo src={dominos} />
        <Link onClick={() => navigate("/deals")}>deals</Link>
      </Navbar>
      {pizzas.map((p, i) => (
        <Pizza pizza={p} setPizzaQty={setPizzaQty(i)}></Pizza>
      ))}
      <Cart open={cartOpen} setOpen={setCartOpen}>
        {pizzas.map((p, i) =>
          p.qty > 0 ? <CartItem pizza={p} setPizzaQty={setPizzaQty(i)} /> : ""
        )}
      </Cart>
    </Container>
  );
};
