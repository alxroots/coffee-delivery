import { InputNumber } from "../input/InputNumber.tsx";
import { Button } from "../button/Button.tsx";
import styled from "styled-components";

export interface SmallBodyCardProps {
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

export function SmallBodyCard(props: SmallBodyCardProps) {
  return (
    <Card>
      <CardImage src={props.imageUrl} alt={props.name} />
      <CardBody>
        <div>
          <CardTitle>{props.name}</CardTitle>
          <CardPrice>{props.price}</CardPrice>
        </div>
        <div>
          <InputNumber min={1} initialValue={props.quantity} />
          <Button variant="secondary" hasIcon={true} />
        </div>
      </CardBody>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
`;

const CardImage = styled.img``;

const CardBody = styled.div``;

const CardTitle = styled.h2``;

const CardPrice = styled.p``;
