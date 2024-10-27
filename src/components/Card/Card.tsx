import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "store/hooks"
import { WeatherData } from "store/weatherApp/types"
import {
  weatherSliceAction,
  weatherSliceSelectors,
} from "store/weatherApp/weatherAppSlice"

import Button from "components/Button/Button"
import { CardProps } from "./types"
import {
  CardContainer,
  PageWrapper,
  WeathersNotFound,
  ButtonControl,
  CardWrapper,
  CardItem,
  CardImg
} from "./styles"

function Card({ CityWeather, isHomePage, error }: CardProps) {
  const urlIcon: string = `http://openweathermap.org/img/w/${CityWeather?.icon}.png`
  return (
    <PageWrapper>
      {CityWeather ? (
        <CardWrapper>
          <CardItem>{CityWeather.name}</CardItem>
          <CardItem>{CityWeather.temp}°C</CardItem>
          <CardImg src={urlIcon}/>
          <ButtonControl>
            <Button
              name="Delete"
              onClick={() => console.log("Delete weather from parent")}
              
            />
          </ButtonControl>
          {isHomePage && (
            <Button
              name="Save"
              onClick={() => console.log("Save weather from parent")}
              
            />
          )}
        </CardWrapper>
      ) : error ? (
        <WeathersNotFound>{error}</WeathersNotFound>
      ) : (
        <WeathersNotFound>Cards not found</WeathersNotFound>
      )}
    </PageWrapper>
  )
}

export default Card
