import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "store/hooks"
import { WeatherData } from "store/weatherApp/types"
import { weatherSliceAction, weatherSliceSelectors } from "store/weatherApp/weatherAppSlice"

import Button from "components/Button/Button"
import { CardProps } from "./types"
import {
  CardContainer,
  PageWrapper,
  WeathersNotFound,
  ButtonControl,
  CardWrapper,
  CardItem
} from "./styles"

function Card({ CityWeather, isHomePage, error }: CardProps){
  return (
    <PageWrapper>
    {CityWeather ? (
      <CardWrapper>
          <CardItem>{CityWeather.name}</CardItem>
          <CardItem>{CityWeather.temp}°C</CardItem>
          <CardItem>{CityWeather.icon}</CardItem>
        <ButtonControl>
        <Button name="Delete" onClick={() => console.log("Delete weather from parent")} isCardButton />
        </ButtonControl>
        {isHomePage && (
          <Button name="Save" onClick={() => console.log("Save weather from parent") } isCardButton />
        )}
      </CardWrapper>
    ) : error ? (
      <WeathersNotFound>{error}</WeathersNotFound>
    ) : (
      <WeathersNotFound>Cards not found</WeathersNotFound>
    )}
  </PageWrapper>
);
}

export default Card
