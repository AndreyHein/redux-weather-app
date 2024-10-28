import Button from "components/Button/Button"
import { CardProps } from "./types"
import {
  PageWrapper,
  WeathersNotFound,
  ButtonControl,
  CardWrapper,
  CardCity,
  CardTemp,
  CardImg,
  CardItemContainer,
  CardContainer,
  CardImgContainer,
} from "./styles"

function Card({ CityWeather, isHomePage, error, onSave, onDelete }: CardProps) {
  const urlIcon: string = `http://openweathermap.org/img/w/${CityWeather?.icon}.png`
  const celTemp: string = (Number(CityWeather?.temp) - 273.15).toFixed(0)

  return (
    <PageWrapper>
      {CityWeather ? (
        <CardWrapper>
          <CardContainer>
            <CardItemContainer>
              <CardTemp>{celTemp}°</CardTemp>
              <CardCity>{CityWeather.name}</CardCity>
            </CardItemContainer>
            <CardImgContainer>
              <CardImg src={urlIcon} />
              <CardImg src={urlIcon} />
              <CardImg src={urlIcon} />
            </CardImgContainer>
          </CardContainer>
          <ButtonControl>
            <Button name="Delete" onClick={onDelete} isCardButton />

            {isHomePage && <Button name="Save" onClick={onSave} isCardButton />}
          </ButtonControl>
        </CardWrapper>
      ) : error ? (
        <CardWrapper>
          <CardContainer>
            <WeathersNotFound>{error}</WeathersNotFound>
          </CardContainer>
          <ButtonControl>
            <Button name="Delete" onClick={onDelete} isCardButton />
          </ButtonControl>
        </CardWrapper>
      ) : (
        <WeathersNotFound></WeathersNotFound>
      )}
    </PageWrapper>
  )
}

export default Card
