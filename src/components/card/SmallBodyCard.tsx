import { InputNumber } from "../input/InputNumber.tsx";
import { Button } from "../button/Button.tsx";
import styled from "styled-components";
import { formatCurrencyDefault } from "../../utils/conversions.ts";
import { useCoffeeStore } from "../../stores/useCoffeeStore.ts";
import { FullBodyCardProps } from "./FullBodyCard.tsx";

export function SmallBodyCard(props: FullBodyCardProps) {
  const {
    addOrUpdateCoffeeListView,
    addOrUpdateCoffeeListInCart,
    removeCoffeeFromCart,
    getCoffeeQuantity,
  } = useCoffeeStore();
  const currentQuantity = getCoffeeQuantity(props.id);
  const handleValueConversion = (value: number) => {
    return formatCurrencyDefault(value);
  };

  const handleUpdateQuantityChange = (newQuantity: number) => {
    addOrUpdateCoffeeListInCart({ ...props, quantity: newQuantity });
    addOrUpdateCoffeeListView({ ...props, quantity: newQuantity });
  };

  const handleRemoveCoffeeFromCart = () => {
    removeCoffeeFromCart(props.id);
  };

  return (
    <>
      <Card>
        <CardImage src={props.imageUrl} alt={props.name} />
        <CardBody>
          <HeadingWrapper>
            <CardTitle>{props.name}</CardTitle>
            <CardPrice>{handleValueConversion(props.price)}</CardPrice>
          </HeadingWrapper>
          <ControllerWrapper>
            <InputNumber
              min={1}
              value={currentQuantity}
              onChange={handleUpdateQuantityChange}
            />
            <Button
              variant="secondary"
              hasIcon={true}
              onClick={handleRemoveCoffeeFromCart}
            />
          </ControllerWrapper>
        </CardBody>
      </Card>
      <Divider />
    </>
  );
}

const Card = styled.div`
  display: flex;
  width: 368px;
  align-items: center;
  padding: 8px;
  gap: 16px;
  background-color: ${({ theme }) => theme.colors.base.card};
`;

const CardImage = styled.img`
  width: 64px;
  height: 64px;
`;

const CardBody = styled.div`
  width: 100%;
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CardTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.textM};
`;

const CardPrice = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const ControllerWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 8px;
`;

const Divider = styled.hr`
  height: 1px;
  opacity: 0.3;
  transform: scaleY(0.5);
  background-color: ${({ theme }) => theme.colors.base.button};
  margin: 12px 0;
`;
