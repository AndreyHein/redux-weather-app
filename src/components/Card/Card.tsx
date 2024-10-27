import { useEffect } from "react";
import { useAppDispatch } from "store/hooks";
import { WeatherData } from "store/weatherApp/types";
import Button from "components/Button/Button";
import { CardProps } from "./types";
import {
  PageWrapper,
  WeathersNotFound,
  ButtonControl,
  CardWrapper,
  CardCity,
  CardDeegrees,
  CardImg,
  CardItemContainer,
  CardContainer,
  CardImgContainer,
} from "./styles";

function Card({ CityWeather, isHomePage, error }: CardProps) {
  const urlIcon: string = `http://openweathermap.org/img/w/${CityWeather?.icon}.png`;
  const celTemp: string = (Number(CityWeather?.temp) - 273.15).toFixed(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  return (
    <PageWrapper>
      {CityWeather ? (
        <CardWrapper>
          <CardContainer>
          <CardItemContainer>
          <CardDeegrees>{celTemp}°</CardDeegrees>
          <CardCity>{CityWeather.name}</CardCity>
          </CardItemContainer>
          <CardImgContainer>
          <CardImg src={urlIcon}/>
          <CardImg src={urlIcon}/>
          <CardImg src={urlIcon}/>
          </CardImgContainer>
          </CardContainer>
          <ButtonControl>
          {isHomePage ? (
            <Button name="Delete" onClick={() => console.log("Delete weather from Home parent")} isCardButton />
          ) : (
            <Button name="Delete" onClick={() => console.log("Delete weather from Weathers parent")} isCardButton />
          )}
          {isHomePage && (
            <Button name="Save" onClick={() => console.log("Save weather from parent") } isCardButton />
          )}
          </ButtonControl>
        </CardWrapper>
      ) : error ? (
        <WeathersNotFound>{error}</WeathersNotFound>
      ) : (
        <WeathersNotFound></WeathersNotFound>
      )}
    </PageWrapper>
  );
}

export default Card;
