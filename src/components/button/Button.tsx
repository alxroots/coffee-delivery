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
      <StyledButton variant={variant} icon={icon} hasIcon={hasIcon}>
        {icon}
        {label}
      </StyledButton>
    );
  }
  return (
    <StyledButton variant={variant} hasIcon={hasIcon}>
      {label}
    </StyledButton>
  );
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  ${({ theme, variant, hasIcon }) => {
    const variantStyles = VARIANTS_BUTTONS_MAPPING(theme)[variant];

    return `
      background: ${hasIcon ? theme.colors.base.button : variantStyles.background};
      color: ${hasIcon ? theme.colors.base.text : variantStyles.text};
      border-radius: 8px;
      width: ${hasIcon ? "auto" : "132px"};
      height: ${hasIcon ? "auto" : "46px"};
      font-weight: ${hasIcon ? 400 : 700};
      font-size: ${hasIcon ? "12px" : "14px"};
      padding: ${hasIcon ? "8px" : "8px 12px"};
      border: none;
      cursor: pointer;
      svg {
        margin-right: ${hasIcon ? "4px" : "auto"};
      }
      &:hover {
        background: ${hasIcon ? theme.colors.base.hover : variantStyles.hover};
        svg {
          color: ${theme.colors.product.purpleDark};
        }
      }
      `;
  }}
`;
