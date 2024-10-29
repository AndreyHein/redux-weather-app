import { useAppDispatch, useAppSelector } from "store/hooks"
import { useEffect } from "react"
import { WeatherData } from "store/weatherApp/types"
import {
  weatherSliceAction,
  weatherSliceSelectors,
} from "store/weatherApp/weatherAppSlice"
import Button from "components/Button/Button"
import Card from "components/Card/Card"
import Modal from "components/Modal/Modal"
import {
  PageWrapper,
  CardContainer,
  ButtonContainer,
  WeathersNotFound,
  SuccessModalWrapper,
  ModalInfoContainer,
  ModalInfo,
} from "./styles"

function Weathers() {
  const dispatch = useAppDispatch()
  const { data, isModalOpened,messageModal } = useAppSelector(weatherSliceSelectors.weathers)

  const closeModal = () => {
    dispatch(weatherSliceAction.closeModal())
  }

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
    closeModal()
  }, [])

  return (
    <PageWrapper>
      {isModalOpened && (
        <Modal closeModal={closeModal}>
          <SuccessModalWrapper>
            <ModalInfoContainer>
              <ModalInfo>{messageModal}</ModalInfo>
              <Button name="Close Modal" onClick={closeModal} isCardButton/>
            </ModalInfoContainer>
          </SuccessModalWrapper>
        </Modal>
      )}
      {data.length > 0 ? (
        <>
          {weatherCards}
          <ButtonContainer>
            <Button name="Delete all cards" onClick={deleteAllCards} />
          </ButtonContainer>
        </>
      ) : (
        <WeathersNotFound>There are currently no saved cards</WeathersNotFound>
      )}
    </PageWrapper>
  )
}

export default Weathers
