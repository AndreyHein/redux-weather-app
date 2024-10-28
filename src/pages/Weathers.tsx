import { useAppDispatch, useAppSelector } from "store/hooks"
import { useEffect } from "react"
import { WeatherData } from "store/weatherApp/types"
import {
  weatherSliceAction,
  weatherSliceSelectors,
} from "store/weatherApp/weatherAppSlice"
import Button from "components/Button/Button"
import Card from "components/Card/Card"
import {
  PageWrapper,
  CardContainer,
  ButtonContainer,
  WeatherNotFound,
} from "./styles"

function Weathers() {
  const dispatch = useAppDispatch()
  const { data, error } = useAppSelector(weatherSliceSelectors.weathers)

  const deleteAllCards = () => {
    dispatch(weatherSliceAction.delAllCard())
  }

  const weatherCards = data.map((weather: WeatherData) => {
    const deleteCard = () => {
      dispatch(weatherSliceAction.delCardById(weather.id))
    }

    return (
      <CardContainer key={weather.id}>
        <Card CityWeather={weather} onDelete={deleteCard} />
      </CardContainer>
    )
  })

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <PageWrapper>
      {data.length > 0 ? (
        <>
          {weatherCards}
          <ButtonContainer>
            <Button name="Delete all cards" onClick={deleteAllCards} />
          </ButtonContainer>
        </>
      ) : (
        <WeatherNotFound>{error}</WeatherNotFound>
      )}
    </PageWrapper>
  )
}

export default Weathers
