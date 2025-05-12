import styled from "styled-components";
import BackgroundBannerImage from "../../assets/banner-background-image.png";
import MainImage from "../../assets/banner-main-image.png";
import { services } from "../../utils/content.ts";

export function Banner() {
  return (
    <BannerContainer>
      <BannerWrapper>
        <LeftSide>
          <BannerTitle>
            Encontre o café perfeito para qualquer hora do dia
          </BannerTitle>
          <BannerSubtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </BannerSubtitle>
          <ServiceList>
            {services.map((service) => (
              <ServiceItem key={service.id}>
                <ServiceIcon _bgColor={service.bgColor}>
                  <service.Icon size={16} weight="fill" color={"#fafafa"} />
                </ServiceIcon>
                <ServiceText>{service.description}</ServiceText>
              </ServiceItem>
            ))}
          </ServiceList>
        </LeftSide>
        <RightSide>
          <img src={MainImage} alt="Banner Image" />
        </RightSide>
      </BannerWrapper>
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  width: 100%;
  height: 544px;
  background-image: url(${BackgroundBannerImage});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  display: flex;
  gap: 56px;
  justify-content: space-between;

  @media (max-width: 900px) {
    margin-top: 264px;
    flex-direction: column;
    align-items: center;
    padding: 20px 16px;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 588px;
`;

const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: ${(props) => props.theme.fontSizes.titleXL};
  font-weight: bold;
`;

const BannerSubtitle = styled.p`
  color: ${(props) => props.theme.colors.base.subtitle};
  font-size: ${(props) => props.theme.fontSizes.textL};
  margin-top: 16px;
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 66px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 12px;
`;

const ServiceItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const ServiceIcon = styled.div<{ _bgColor?: string }>`
  margin-right: 10px;
  width: 32px;
  height: 32px;
  background-color: ${(props) => props._bgColor || "#333"};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ServiceText = styled.span`
  font-size: 16px;
`;
