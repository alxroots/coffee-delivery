import { ReactElement } from "react";
import styled from "styled-components";
import { VARIANTS_BUTTONS_MAPPING } from "../../utils/mappings.ts";

import { ShoppingCart } from "@phosphor-icons/react";

interface IconButtonProps {
  icon?: ReactElement;
  variant?: "primary" | "secondary" | "icon";
  onClick?: () => void;
}

export function IconButton({
  icon = <ShoppingCart weight="fill" />,
  variant = "icon",
  onClick,
}: IconButtonProps) {
  return (
    <StyledIconButton onClick={onClick} variant={variant}>
      {icon}
    </StyledIconButton>
  );
}

const StyledIconButton = styled.button<IconButtonProps>`
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
