import {
  PageWrapper,
  SearchContainer,
  CardContainer,
  SearchButtonContainer,
  InputContainer,
} from "./styles"
import { useNavigate } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "store/hooks"
import { ChangeEvent } from "react"

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
  const { inputValue, dataObj, error } = useAppSelector(
    weatherSliceSelectors.weathers,
  )

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("Input value:", event.target.value)
    dispatch(weatherSliceAction.getCityName(event.target.value))
  }

  const getWeatherData = () => {
    if (!inputValue.trim()) {
      alert("Please enter a city name")
      return
    }
    dispatch(
      weatherSliceAction.getWeatherData({ cityName: inputValue, appKey }),
    )
    dispatch(weatherSliceAction.saveWeatherData())
  }

  const clearCardWeather = () => {
    dispatch(weatherSliceAction.delObjData())
  }

  const clearErrorCard = () => {
    dispatch(weatherSliceAction.delError())
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
        <SearchButtonContainer>
          <Button type="submit" name="Search" onClick={getWeatherData} />
        </SearchButtonContainer>
      </SearchContainer>
      {dataObj && (
        <CardContainer>
          <Card
            CityWeather={dataObj}
            isHomePage
            onDelete={clearCardWeather}
            onSave={saveCardWeather}
          />
        </CardContainer>
      )}
      {error && (
        <>
          {clearCardWeather()}
          <CardContainer>
            <Card error={error} onDelete={clearErrorCard} />
          </CardContainer>
        </>
      )}
    </PageWrapper>
  )
}
export default Home
