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
  WeatherNotFound,
  SuccessModalWrapper,
  ModalInfoContainer,
  ModalInfo,
  ModalIcon,
} from "./styles"

function Weathers() {
  const dispatch = useAppDispatch()
  const { data, isModalOpened } = useAppSelector(weatherSliceSelectors.weathers)

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
              <ModalInfo>Your data has been saved successfully!!!</ModalInfo>
              <ModalIcon
                className="modal-icon"
                src="https://w7.pngwing.com/pngs/442/715/png-transparent-check-mark-computer-icons-icon-design-cheque-successful-angle-logo-grass-thumbnail.png"
                alt="Success Icon"
              />
            </ModalInfoContainer>
            <Button name="Close Modal" onClick={closeModal} />
          </SuccessModalWrapper>
        </Modal>
      )}
      {data.length > 0 && isModalOpened !==true ? (
        <>
          {weatherCards}
          <ButtonContainer>
            <Button name="Delete all cards" onClick={deleteAllCards} />
          </ButtonContainer>
        </>
      ) : (
        <WeatherNotFound>Card not found</WeatherNotFound>
      )}
    </PageWrapper>
  )
}

export default Weathers
