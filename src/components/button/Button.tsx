import styled from "styled-components";
import { Icon, ShoppingCart, Trash } from "@phosphor-icons/react";
import { ReactElement } from "react";

interface ButtonProps {
  label: string;
  variant: "primary" | "secondary" | "tertiary";
  icon?: ReactElement;
}
export function Button({
  label = "Remover",
  variant,
  icon = <Trash size={16} weight="bold" color="#fff" />,
}: ButtonProps) {
  if (icon) {
    return <button>{icon}</button>;
  }
  return <button>{label}</button>;
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
    props
`;
