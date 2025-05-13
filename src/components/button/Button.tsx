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
  icon = <Trash />,
}: ButtonProps) {
  if (hasIcon) {
    return (
      <StyledButton _variant={variant} _has_icon={hasIcon}>
        {icon}
        {label}
      </StyledButton>
    );
  }
  return (
    <StyledButton _variant={variant} _has_icon={hasIcon}>
      {label}
    </StyledButton>
  );
}

const StyledButton = styled.button<{
  _has_icon: boolean;
  _variant: "primary" | "secondary";
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  ${({ theme, _variant, _has_icon }) => {
    const variantStyles = VARIANTS_BUTTONS_MAPPING(theme)[_variant];

    return `
      background: ${_has_icon ? theme.colors.base.button : variantStyles.background};
      color: ${_has_icon ? theme.colors.base.text : variantStyles.text};
      border-radius: 8px;
      width: ${_has_icon ? "auto" : "100%"};
      height: ${_has_icon ? "auto" : "46px"};
      font-weight: ${_has_icon ? 400 : 700};
      font-size: ${_has_icon ? "12px" : "14px"};
      padding: ${_has_icon ? "8px" : "8px 12px"};
      border: none;
      cursor: pointer;
      svg {
        margin-right: ${_has_icon ? "4px" : "auto"};
      }
      &:hover {
        background: ${_has_icon ? theme.colors.base.hover : variantStyles.hover};
        svg {
          color: ${theme.colors.product.purpleDark};
        }
      }
      `;
  }}
`;
