import ConfirmedImage from "../assets/confirmed.svg";
import styled from "styled-components";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useCoffeeStore } from "../stores/useCoffeeStore.ts";

export default function Confirmed() {
  const { addressData } = useCoffeeStore();
  const mapPaymentMethod = {
    credit: "Cartão de Crédito",
    debit: "Cartão de Débito",
    cash: "Dinheiro",
  };
  const paymentMethod = mapPaymentMethod[addressData.paymentMethod];
  return (
    <Container>
      <ContentWrapper>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
        <StepsWrapper>
          <div>
            <ListItemWrapper>
              <WrapperIcon $color="purple">
                <MapPin weight="fill" />
              </WrapperIcon>
              <p>
                Entrega em <strong>{addressData.address}</strong>
              </p>
              <span>
                {addressData.address2} - {addressData.city}
              </span>
            </ListItemWrapper>
            <ListItemWrapper>
              <WrapperIcon $color="yellow">
                <Timer weight="fill" />
              </WrapperIcon>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </ListItemWrapper>
            <ListItemWrapper>
              <WrapperIcon $color="yellowDark">
                <CurrencyDollar />
              </WrapperIcon>
              <p>Pagamento na entrega</p>
              <strong>{paymentMethod}</strong>
            </ListItemWrapper>
          </div>
        </StepsWrapper>
      </ContentWrapper>
      <ImageWrapper>
        <img src={ConfirmedImage} alt="Coffee Delivery" />
      </ImageWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: ${(props) => props.theme.fontSizes.titleL};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-family: ${(props) => props.theme.fonts.title};
    color: ${(props) => props.theme.colors.product.yellowDark};
  }
  span {
    font-size: ${(props) => props.theme.fontSizes.textL};
    color: ${(props) => props.theme.colors.base.subtitle};
  }
`;
const StepsWrapper = styled.div`
  padding: 1px;
  background: linear-gradient(to right, #dbac2c, #8047f8);
  border-radius: 6px 36px 6px 36px;
  margin-top: 40px;

  & > div {
    border-radius: 6px 36px 6px 36px;
    background: ${(props) => props.theme.colors.base.background};
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;
const ListItemWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  p {
    font-size: 16px;
    color: ${(props) => props.theme.colors.base.subtitle};
  }
  span {
    font-size: 14px;
    color: ${(props) => props.theme.colors.base.text};
  }
`;
const WrapperIcon = styled.div<{ $color: "purple" | "yellow" | "yellowDark" }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.product[props.$color]};
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 492px;
    height: 293px;
  }
`;
