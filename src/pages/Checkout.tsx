import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from "@phosphor-icons/react";
import { useForm, Controller } from "react-hook-form";

import { InputText } from "../components/input/InputText.tsx";
import { SelectPaymentType } from "../components/select/SelectPaymentType.tsx";
import { SmallBodyCard } from "../components/card/SmallBodyCard.tsx";
import { Button } from "../components/button/Button.tsx";
import styled from "styled-components";
import { useCoffeeStore } from "../stores/useCoffeeStore.ts";
import { FullBodyCardProps } from "../components/card/FullBodyCard.tsx";
import { formatCurrency } from "../utils/conversions.ts";
import { CheckoutFormDataPropTypes } from "../@types/form";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const {
    coffeeListInCart,
    totalValue,
    totalWithDelivery,
    resetCoffeeLists,
    setAddressData,
  } = useCoffeeStore();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<CheckoutFormDataPropTypes>({
    mode: "onChange",
  });

  const { currency, formattedValue } = formatCurrency(totalValue());
  const {
    currency: currencyWithDelivery,
    formattedValue: formattedValueWithDelivery,
  } = formatCurrency(totalWithDelivery());

  const onSubmit = (data: CheckoutFormDataPropTypes) => {
    setAddressData(data);
    resetCoffeeLists();
    navigate("/confirmed");
  };

  return (
    <CheckoutContainer>
      <PaymentFormSide
        id="checkout-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
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
              <Controller
                name="code"
                control={control}
                rules={{ required: "CEP é um campo obrigatório" }}
                render={({ field, fieldState }) => (
                  <InputWrapper hasError={!!fieldState.error}>
                    <InputText
                      label="CEP"
                      required
                      style={{ minWidth: "200px" }}
                      {...field}
                    />
                    {fieldState.error && (
                      <span>{fieldState.error.message}</span>
                    )}
                  </InputWrapper>
                )}
              />
            </Row>
            <Controller
              name="address"
              control={control}
              rules={{ required: "Rua é um campo obrigatório" }}
              render={({ field, fieldState }) => (
                <InputWrapper>
                  <InputText label="Rua" required {...field} />
                  {fieldState.error && <span>{fieldState.error.message}</span>}
                </InputWrapper>
              )}
            />
            <Row>
              <Controller
                name="number"
                control={control}
                rules={{ required: "Número é um campo obrigatório" }}
                render={({ field, fieldState }) => (
                  <InputWrapper>
                    <InputText
                      label="Número"
                      required
                      style={{ minWidth: "200px" }}
                      {...field}
                    />
                    {fieldState.error && (
                      <span>{fieldState.error.message}</span>
                    )}
                  </InputWrapper>
                )}
              />
              <Controller
                name="complement"
                control={control}
                render={({ field }) => (
                  <InputText label="Complemento" fullwidth {...field} />
                )}
              />
            </Row>
            <Row>
              <Controller
                name="address2"
                control={control}
                rules={{ required: "Bairro é um campo obrigatório" }}
                render={({ field, fieldState }) => (
                  <InputWrapper>
                    <InputText
                      label="Bairro"
                      required
                      style={{ minWidth: "200px" }}
                      {...field}
                    />
                    {fieldState.error && (
                      <span>{fieldState.error.message}</span>
                    )}
                  </InputWrapper>
                )}
              />
              <Controller
                name="city"
                control={control}
                rules={{ required: "Cidade é um campo obrigatório" }}
                render={({ field, fieldState }) => (
                  <InputWrapper>
                    <InputText
                      label="Cidade"
                      required
                      style={{ minWidth: "200px" }}
                      {...field}
                    />
                    {fieldState.error && (
                      <span>{fieldState.error.message}</span>
                    )}
                  </InputWrapper>
                )}
              />
              <Controller
                name="state"
                control={control}
                rules={{ required: "Estado é um campo obrigatório" }}
                render={({ field, fieldState }) => (
                  <InputWrapper>
                    <InputText
                      label="UF"
                      required
                      style={{ width: "60px" }}
                      {...field}
                    />
                    {fieldState.error && (
                      <span>{fieldState.error.message}</span>
                    )}
                  </InputWrapper>
                )}
              />
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
          <Controller
            name="paymentMethod"
            control={control}
            rules={{ required: "Selecione um metodo de pagamento" }}
            render={({ field, fieldState }) => (
              <InputWrapper>
                <PaymentSelectWrapper>
                  <SelectPaymentType
                    Icon={CreditCard}
                    label="Cartão de crédito"
                    isSelected={field.value === "credit"}
                    onClick={() => field.onChange("credit")}
                  />
                  <SelectPaymentType
                    Icon={Bank}
                    label="Cartão de débito"
                    isSelected={field.value === "debit"}
                    onClick={() => field.onChange("debit")}
                  />
                  <SelectPaymentType
                    Icon={Money}
                    label="Dinheiro"
                    isSelected={field.value === "cash"}
                    onClick={() => field.onChange("cash")}
                  />
                </PaymentSelectWrapper>
                {fieldState.error && <span>{fieldState.error.message}</span>}
              </InputWrapper>
            )}
          />
        </Container>
      </PaymentFormSide>
      <SummarySide>
        <SectionTitle>
          <h1>Cafés selecionados</h1>
        </SectionTitle>
        <SummaryWrapper>
          <DisplayItems>
            {coffeeListInCart.map((coffee: FullBodyCardProps) => (
              <SmallBodyCard
                key={coffee.id}
                name={coffee.name}
                imageUrl={coffee.imageUrl}
                price={coffee.price}
                quantity={coffee.quantity!}
                tags={coffee.tags}
                id={coffee.id}
                description={coffee.description}
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
          <Button
            type="submit"
            variant="primary"
            label="Confirmar Pedido"
            hasIcon={false}
            form="checkout-form"
          />
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

const PaymentFormSide = styled.form`
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

const InputWrapper = styled.div<{ hasError?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    font-size: ${({ theme }) => theme.fontSizes.textXS};
    color: #ef4444;
    margin-left: 2px;
  }
`;
