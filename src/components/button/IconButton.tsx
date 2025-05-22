import { ReactElement } from "react";
import styled from "styled-components";
import type { DefaultTheme } from "styled-components";
import { VARIANTS_BUTTONS_MAPPING } from "../../utils/mappings.ts";

import { ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

interface IconButtonProps {
  icon?: ReactElement;
  variant: "primary" | "secondary" | "icon";
  onClick?: () => void;
  linkTo?: string;
}

export function IconButton({
  icon = <ShoppingCart weight="fill" />,
  variant = "icon",
  onClick,
  linkTo,
}: IconButtonProps) {
  if (linkTo) {
    return (
      <StyledLinkButton to={linkTo} variant={variant}>
        {icon}
      </StyledLinkButton>
    );
  }
  return (
    <StyledIconButton type="button" onClick={onClick} variant={variant}>
      {icon}
    </StyledIconButton>
  );
}

const baseStyle = ({
  theme,
  variant = "icon",
}: {
  theme: DefaultTheme;
  variant: IconButtonProps["variant"];
}) => {
  const styles = VARIANTS_BUTTONS_MAPPING(theme)[variant];
  return `
    border-radius: 6px;
    padding: 8px;
    background: ${styles.background};
    color: ${styles.text};
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${styles.hover};
    }

    svg {
      color: ${styles.text};
    }
  `;
};

const StyledLinkButton = styled(Link)<IconButtonProps>`
  text-decoration: none;
  ${(props) => baseStyle(props)}
`;

const StyledIconButton = styled.button<IconButtonProps>`
  border: none;
  ${(props) => baseStyle(props)}
`;
