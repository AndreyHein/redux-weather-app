import {
  PageWrapper,
  SearchContainer,
  CardContainer,
  ButtonContainer,
  InputContainer,
} from "./styles"
import { useNavigate } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "store/hooks"
import { ChangeEvent, MouseEvent } from "react"

import Input from "components/Input/Input"
import Button from "components/Button/Button"
import Card from "components/Card/Card"
import {
  weatherSliceAction,
  weatherSliceSelectors,
} from "store/weatherApp/weatherAppSlice"

function Home() {
  const navigate = useNavigate()
  const appKey: string = "42f58ab4a7b3a4d34d19463542ce3b93"

  const dispatch = useAppDispatch()
  const { inputValue, dataObj } = useAppSelector(weatherSliceSelectors.weathers)
  console.log(inputValue)
  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("Input value:", event.target.value)
    dispatch(weatherSliceAction.getCityName(event.target.value))
  }

  const getWeatherData = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    dispatch(
      weatherSliceAction.getWeatherData({ cityName: inputValue, appKey }),
    )
  }

  const clearCardWeather = () => {
    dispatch(weatherSliceAction.delObjData())
  }

  const saveCardWeather = () => {
    dispatch(weatherSliceAction.saveWeatherData())
  }

  return (
    <PageWrapper>
      <SearchContainer>
        <InputContainer>
          <Input
            value={inputValue}
            onChange={onChangeValue}
            id="city_id"
            name="city"
            type="text"
            placeholder="Enter city name"
          />
        </InputContainer>
        <ButtonContainer>
          <Button type="submit" name="Search" onClick={getWeatherData} />
        </ButtonContainer>
      </SearchContainer>
      <CardContainer>
        <Card
          CityWeather={dataObj}
          isHomePage
          onDelete={clearCardWeather}
          onSave={saveCardWeather}
        />
      </CardContainer>
    </PageWrapper>
  )
}
export default Home
