import styled, { css } from "styled-components";
import { ElementType } from "react";

interface PaymentTypeSelectProps {
  Icon: ElementType;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export function SelectPaymentType({
  Icon,
  label,
  isSelected,
  onClick,
}: PaymentTypeSelectProps) {
  return (
    <PaymentTypeSelectWrapper $isSelected={isSelected} onClick={onClick}>
      <Icon size={22} />
      <p>{label}</p>
    </PaymentTypeSelectWrapper>
  );
}

const PaymentTypeSelectWrapper = styled.div<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 12px;

  user-select: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.base.button};
  color: ${(props) => props.theme.colors.base.text};
  font-size: ${(props) => props.theme.fontSizes.buttonS};
  text-transform: uppercase;

  ${(props) =>
    props.$isSelected &&
    css`
      outline: 1px solid ${(props) => props.theme.colors.product.purple};
      background-color: ${(props) => props.theme.colors.product.purpleLight};
    `}

  &:hover {
    background-color: ${(props) => props.theme.colors.base.hover};
    cursor: default;
  }
  svg {
    color: ${(props) => props.theme.colors.product.purple};
  }
`;
