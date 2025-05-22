import styled from "styled-components";
import { ReactElement } from "react";
import { VARIANTS_BUTTONS_MAPPING } from "../../utils/mappings.ts";
import { Trash } from "@phosphor-icons/react";

interface ButtonProps {
  variant: "primary" | "secondary";
  hasIcon: boolean;
  icon?: ReactElement;
  label?: string;
  onClick?: () => void;
}

export function Button({
  label = "Remover",
  variant,
  hasIcon,
  onClick,
  icon = <Trash />,
}: ButtonProps) {
  if (hasIcon) {
    return (
      <StyledButton $variant={variant} $has_icon={hasIcon} onClick={onClick}>
        {icon}
        {label}
      </StyledButton>
    );
  }
  return (
    <StyledButton $variant={variant} $has_icon={hasIcon} onClick={onClick}>
      {label}
    </StyledButton>
  );
}

const StyledButton = styled.button<{
  $has_icon: boolean;
  $variant: "primary" | "secondary";
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  ${({ theme, $variant, $has_icon }) => {
    const variantStyles = VARIANTS_BUTTONS_MAPPING(theme)[$variant];

    return `
      background: ${$has_icon ? theme.colors.base.button : variantStyles.background};
      color: ${$has_icon ? theme.colors.base.text : variantStyles.text};
      border-radius: 8px;
      width: ${$has_icon ? "auto" : "100%"};
      height: ${$has_icon ? "auto" : "46px"};
      font-weight: ${$has_icon ? 400 : 700};
      font-size: ${$has_icon ? "12px" : "14px"};
      padding: ${$has_icon ? "8px" : "8px 12px"};
      border: none;
      cursor: pointer;
      svg {
        margin-right: ${$has_icon ? "4px" : "auto"};
      }
      &:hover {
        background: ${$has_icon ? theme.colors.base.hover : variantStyles.hover};
        svg {
          color: ${theme.colors.product.purpleDark};
        }
      }
      `;
  }}
`;
