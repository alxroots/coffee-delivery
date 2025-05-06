import { CoffeeTagType } from "../../@types/coffee.ts";
import { InputNumber } from "../input/InputNumber.tsx";
import { IconButton } from "../button/IconButton.tsx";
import styled from "styled-components";

interface FullBodyCardProps {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  tags: CoffeeTagType[];
}

export function FullBodyCard(props: FullBodyCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardImage src={props.imageUrl} alt={props.name} />
        <TagWrapper>
          {props.tags?.map((tag: CoffeeTagType) => <span>{tag}</span>)}
        </TagWrapper>
      </CardHeader>
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardBody>
      <CardFooter>
        <span>{props.price}</span>
        <InputNumber />
        <IconButton />
      </CardFooter>
    </Card>
  );
}

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.base.card};
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardBody = styled.div``;

const TagWrapper = styled.div``;

const CardTitle = styled.h2``;
const CardDescription = styled.p``;
const CardImage = styled.img`
  width: 100%;
  height: auto;
`;
const CardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
