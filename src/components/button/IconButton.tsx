import { ReactElement } from "react";
import styled from "styled-components";
import { VARIANTS_BUTTONS_MAPPING } from "../../utils/mappings.ts";

import { ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

interface IconButtonProps {
  icon?: ReactElement;
  variant?: "primary" | "secondary" | "icon";
  onClick?: () => void;
  linkTo?: string;
}

export function IconButton({
  icon = <ShoppingCart weight="fill" />,
  variant = "icon",
  onClick,
  linkTo = "checkout",
}: IconButtonProps) {
  return (
    <StyledIconButton onClick={onClick} to={linkTo} variant={variant}>
      {icon}
    </StyledIconButton>
  );
}

const StyledIconButton = styled(Link)<IconButtonProps>`
  border-radius: 6px;
  padding: 8px;
  ${({ theme, variant = "icon" }) => {
    const variantStyles = VARIANTS_BUTTONS_MAPPING(theme)[variant];
    return `
    background: ${variantStyles.background};
    color: ${variantStyles.text};
    &:hover {
        background: ${variantStyles.hover};
    }
    svg {
        display: flex;
        color: ${variantStyles.text};
     }
    `;
  }}
`;
