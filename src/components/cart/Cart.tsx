import { ShoppingCart } from "@phosphor-icons/react";
import styled from "styled-components";

interface CartProps {
  count?: number;
}
export function Cart({ count = 0 }: CartProps) {
  return (
    <CartWrapper aria-label="Cart Icon">
      {count > 0 && <Badge aria-hidden="true">{count}</Badge>}
      <ShoppingCart weight="fill" />
    </CartWrapper>
  );
}

const CartWrapper = styled.div`
  display: flex;
  position: relative;
  border-radius: 6px;
  padding: 8px;
  width: 32px;
  height: 32px;
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
