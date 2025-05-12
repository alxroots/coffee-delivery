import { Cart } from "../cart/Cart.tsx";
import { MapPin } from "@phosphor-icons/react";
import styled from "styled-components";
import Logo from "../../assets/Logo.png";

export function Header() {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <img src={Logo} alt="Logo Coffee Delivery" />
      </LogoWrapper>
      <NavbarWrapper>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationContainer>
        <NavBarActions>
          <Cart count={undefined} />
        </NavBarActions>
      </NavbarWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.base.background};
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;
const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.product.purpleLight};
  padding: 8px;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.product.purpleDark};
`;
const NavBarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
