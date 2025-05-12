import { ShoppingCart } from "@phosphor-icons/react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface CartProps {
  count?: number;
}
export function Cart({ count = 0 }: CartProps) {
  return (
    <CartWrapper aria-label="Cart Icon" to="/checkout">
      {count > 0 && <Badge aria-hidden="true">{count}</Badge>}
      <ShoppingCart weight="fill" />
    </CartWrapper>
  );
}

const CartWrapper = styled(Link)`
  display: flex;
  position: relative;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background-color: ${({ theme }) => theme.colors.product.yellowLight};
  color: ${({ theme }) => theme.colors.product.yellowDark};
`;

const Badge = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.product.yellowDark};
  color: ${({ theme }) => theme.colors.base.white};
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSizes.textXS};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
`;
