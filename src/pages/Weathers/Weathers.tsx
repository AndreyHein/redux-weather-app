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

  const deleteCard = (id: string) => {
    dispatch(weatherSliceAction.delCardById(id))
  }

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <PageWrapper>
      {data.length > 0 ? (
        <>
          <CardContainer>
            {data.map((weather: WeatherData) => (
              <Card
                key={weather.id}
                CityWeather={weather}
                onDelete={() => deleteCard(weather.id)}
              />
            ))}
          </CardContainer>
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
