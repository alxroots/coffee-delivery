import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "@phosphor-icons/react";
import { InputText } from "../components/input/InputText.tsx";
import { SelectPaymentType } from "../components/select/SelectPaymentType.tsx";
import { SmallBodyCard } from "../components/card/SmallBodyCard.tsx";
import { Button } from "../components/button/Button.tsx";
import styled from "styled-components";
import { useCoffeeStore } from "../stores/useCoffeeStore.ts";
import { FullBodyCardProps } from "../components/card/FullBodyCard.tsx";
import { formatCurrency } from "../utils/conversions.ts";

export default function Checkout() {
  const { listCoffees, totalValue, totalWithDelivery } = useCoffeeStore();
  const { currency, formattedValue } = formatCurrency(totalValue());
  const {
    currency: currencyWithDelivery,
    formattedValue: formattedValueWithDelivery,
  } = formatCurrency(totalWithDelivery());
  return (
    <CheckoutContainer>
      <PaymentFormSide>
        <SectionTitle>
          <h1>Complete seu pedido</h1>
        </SectionTitle>
        <Container>
          <Title>
            <MapPin color="#c47f17" size={22} />
            <div>
              <span>Endereço de entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Title>
          <AddressArea>
            <Row>
              <InputText label="CEP" required style={{ minWidth: "200px" }} />
            </Row>
            <InputText label="Rua" required />
            <Row>
              <InputText
                label="Número"
                required
                style={{ minWidth: "200px" }}
              />
              <InputText label="Complemento" fullwidth />
            </Row>
            <Row>
              <InputText
                label="Bairro"
                required
                style={{ minWidth: "200px" }}
              />
              <InputText
                label="Cidade"
                required
                style={{ minWidth: "200px" }}
              />
              <InputText label="UF" required style={{ width: "60px" }} />
            </Row>
          </AddressArea>
        </Container>
        <Container>
          <Title>
            <CurrencyDollar size={22} color="#8047f8" />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </Title>
          <PaymentSelectWrapper>
            <SelectPaymentType
              Icon={CreditCard}
              label="Cartão de crédito"
              isSelected={false}
              onClick={() => console.log("clicou cartão de crédito")}
            />
            <SelectPaymentType
              Icon={Bank}
              label="Cartão de débito"
              isSelected={false}
              onClick={() => console.log("clicou cartão de débito")}
            />
            <SelectPaymentType
              Icon={Money}
              label="Dinheiro"
              isSelected={false}
              onClick={() => console.log("clicou dinheiro")}
            />
          </PaymentSelectWrapper>
        </Container>
      </PaymentFormSide>
      <SummarySide>
        <SectionTitle>
          <h1>Cafés selecionados</h1>
        </SectionTitle>
        <SummaryWrapper>
          <DisplayItems>
            {listCoffees.map((coffee: FullBodyCardProps) => (
              <SmallBodyCard
                key={coffee.id}
                name={coffee.name}
                imageUrl={coffee.imageUrl}
                price={coffee.price}
                quantity={coffee.quantity!}
              />
            ))}
          </DisplayItems>
          <SummaryFooter>
            <SummaryItem>
              <p>Total de itens</p>
              <span>
                {currency} {formattedValue}
              </span>
            </SummaryItem>
            <SummaryItem>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </SummaryItem>
            <SummaryItem>
              <strong>Total</strong>
              <strong>
                {currencyWithDelivery} {formattedValueWithDelivery}
              </strong>
            </SummaryItem>
          </SummaryFooter>
          <Button variant="primary" label="Confirmar Pedido" hasIcon={false} />
        </SummaryWrapper>
      </SummarySide>
    </CheckoutContainer>
  );
}

const CheckoutContainer = styled.div`
  display: flex;
  gap: 32px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 36px;
  }
`;

const PaymentFormSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionTitle = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 12px;
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.titleXS};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

const Title = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  span {
    font-size: ${({ theme }) => theme.fontSizes.textM};
    color: ${({ theme }) => theme.colors.base.subtitle};
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes.textS};
    color: ${({ theme }) => theme.colors.base.text};
  }
`;

const AddressArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 12px;
`;

const PaymentSelectWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const SummarySide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.base.card};
  border-radius: 6px 44px 6px 44px;
`;

const DisplayItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SummaryFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 12px;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: ${({ theme }) => theme.fontSizes.textS};
    color: ${({ theme }) => theme.colors.base.text};
  }
  strong {
    font-size: ${({ theme }) => theme.fontSizes.textL};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.base.subtitle};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.base.card};
`;

const Row = styled.div`
  display: flex;
  gap: 12px;
`;
