import { CoffeeTagType } from "../../@types/coffee.ts";
import { InputNumber } from "../input/InputNumber.tsx";
import { IconButton } from "../button/IconButton.tsx";
import styled from "styled-components";
import { formatCurrency } from "../../utils/conversions.ts";
import { useCoffeeStore } from "../../stores/useCoffeeStore.ts";
import toast from "react-hot-toast";
import { useState } from "react";

export interface FullBodyCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  tags: CoffeeTagType[];
  quantity: number;
}

export function FullBodyCard(props: FullBodyCardProps) {
  const {
    addOrUpdateCoffeeListView,
    addOrUpdateCoffeeListInCart,
    getCoffeeQuantity,
  } = useCoffeeStore();
  const currentQuantity = getCoffeeQuantity(props.id);
  const [isLocked, setIsLocked] = useState(false);

  const { formattedValue, currency } = formatCurrency(props.price);

  const handleUpdateQuantityChange = (newQuantity: number) => {
    addOrUpdateCoffeeListView({ ...props, quantity: newQuantity });
  };

  const handleAddToCart = () => {
    if (currentQuantity === 0) {
      toast.error("Adicione uma quantidade maior que zero");
      return;
    } else if (currentQuantity > 0 && !isLocked) {
      addOrUpdateCoffeeListInCart({ ...props, quantity: currentQuantity });
      toast.success("Adicionado ao carrinho");
      setIsLocked(true);
    } else {
      setIsLocked(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardImage src={props.imageUrl} alt={props.name} $islocked={isLocked} />
        <TagWrapper>
          {props.tags?.map((tag: CoffeeTagType) => (
            <span key={tag}>{tag}</span>
          ))}
        </TagWrapper>
      </CardHeader>
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardBody>
      <CardFooter>
        <PriceWrapper>
          <span>{currency}</span>
          <span>{formattedValue}</span>
        </PriceWrapper>
        <ControllerWrapper>
          <InputNumber
            value={currentQuantity}
            onChange={handleUpdateQuantityChange}
            isLocked={isLocked}
          />
          <IconButton variant="icon" onClick={handleAddToCart} />
        </ControllerWrapper>
      </CardFooter>
    </Card>
  );
}

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.base.card};
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  width: 256px;
  border-radius: 6px 36px 6px 36px;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
  text-align: center;
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 4px;
  span {
    text-transform: uppercase;
    padding: 4px 8px;
    color: ${({ theme }) => theme.colors.product.yellowDark};
    background-color: ${({ theme }) => theme.colors.product.yellowLight};
    border-radius: 16px;
    font-size: ${({ theme }) => theme.fontSizes.tag};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;

const CardTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.fontSizes.titleS};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.textS};
  color: ${({ theme }) => theme.colors.base.label};
`;

const CardImage = styled.img<{ $islocked: boolean }>`
  width: 120px;
  height: 120px;
  margin-top: -40px;
  opacity: ${({ $islocked }) => ($islocked ? 0.5 : 1)};
`;
const CardFooter = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`;
const PriceWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  color: ${({ theme }) => theme.colors.base.text};

  :first-child {
    font-size: ${({ theme }) => theme.fontSizes.textS};
    color: ${({ theme }) => theme.colors.base.text};
  }
  :nth-child(2) {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.fontSizes.titleM};
    font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  }
`;

const ControllerWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;
