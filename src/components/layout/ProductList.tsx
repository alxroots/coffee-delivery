import { FullBodyCard } from "../card/FullBodyCard.tsx";
import { coffeeDrinks } from "../../utils/content.ts";
import styled from "styled-components";

export function ProductList() {
  return (
    <ListContainer>
      <Title>Nossos cafés</Title>
      <ListWrapper>
        {coffeeDrinks.map((coffee) => (
          <FullBodyCard
            key={coffee.id}
            id={coffee.id}
            name={coffee.name}
            description={coffee.description}
            imageUrl={coffee.imageUrl}
            price={coffee.price}
            tags={coffee.tags}
            quantity={coffee.quantity}
          />
        ))}
      </ListWrapper>
    </ListContainer>
  );
}

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.base.title};
  margin-top: 3.375rem;
  margin-bottom: 3.375rem;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 120px auto;
`;

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  gap: 2rem;
  width: 100%;
  padding: 0 1rem;
  justify-items: center;
`;
