import { Coffee, House, ArrowLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/button/Button.tsx";

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <NotFoundContainer>
      <ContentWrapper>
        <IconWrapper>
          <Coffee size={120} color="#8047f8" weight="fill" />
        </IconWrapper>

        <TextContent>
          <ErrorCode>404</ErrorCode>
          <Title>Ops! Página não encontrada</Title>
          <Description>
            Parece que a página que você está procurando não existe ou foi Que
            tal voltar para o início e escolher um delicioso café?
          </Description>
        </TextContent>

        <ButtonGroup>
          <Button
            type="button"
            variant="secondary"
            label="Voltar"
            hasIcon={true}
            icon={<ArrowLeft />}
            onClick={handleGoBack}
          />
          <Button
            type="button"
            variant="primary"
            label="Ir para o início"
            hasIcon={true}
            icon={<House />}
            onClick={handleGoHome}
          />
        </ButtonGroup>
      </ContentWrapper>
    </NotFoundContainer>
  );
}

const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
  padding: 60px 40px;
  background-color: ${({ theme }) => theme.colors.base.card};
  border-radius: 6px 44px 6px 44px;
  max-width: 600px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 40px 24px;
    gap: 24px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ErrorCode = styled.h1`
  font-size: 72px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.base.subtitle};
  margin: 0;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 56px;
  }
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.titleXS};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.base.subtitle};
  margin: 0;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.base.text};
  line-height: 1.6;
  margin: 0;
  max-width: 400px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;

    button {
      width: 100%;
    }
  }
`;
