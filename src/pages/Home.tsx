import { useEffect } from "react"

import {
  PageWrapper,
  SearchContainer,
  CardContainer,
  SearchButtonContainer,
  InputContainer,
  WeathersNotFound,
  SuccessModalWrapper,
  ModalInfoContainer,
  ModalInfo,
} from "./styles"

import { useAppDispatch, useAppSelector } from "store/hooks"
import { ChangeEvent } from "react"

import Modal from "components/Modal/Modal"
import Input from "components/Input/Input"
import Button from "components/Button/Button"
import Card from "components/Card/Card"
import {
  weatherSliceAction,
  weatherSliceSelectors,
} from "store/weatherApp/weatherAppSlice"
import { boolean } from "yup"

function Home() {
  const appKey: string = "42f58ab4a7b3a4d34d19463542ce3b93"

  const dispatch = useAppDispatch()
  const { inputValue, dataObj, error, isLoading, isModalOpened, messageModal } =
    useAppSelector(weatherSliceSelectors.weathers)

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
  }

  const closeModal = () => {
    dispatch(weatherSliceAction.closeModal())
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

  useEffect(() => {
    closeModal()
  }, [])

  useEffect(() => {
    if (error) {
      clearCardWeather()
      closeModal()
    }
  }, [error])

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
          <Button
            type="submit"
            name="Search"
            onClick={getWeatherData}
            disabled={isLoading}
          />
        </SearchButtonContainer>
      </SearchContainer>

      {!isModalOpened && (
        <>
          {dataObj ? (
            <CardContainer>
              <Card
                CityWeather={dataObj}
                isHomePage
                onDelete={clearCardWeather}
                onSave={saveCardWeather}
              />
            </CardContainer>
          ) : (
            error && <Card error={error} onDelete={clearErrorCard} />
          )}
        </>
      )}

      {isModalOpened && (
        <Modal closeModal={closeModal}>
          <SuccessModalWrapper>
            <ModalInfoContainer>
              <ModalInfo>{messageModal}</ModalInfo>
              <Button name="Close Modal" onClick={closeModal} isCardButton />
            </ModalInfoContainer>
          </SuccessModalWrapper>
        </Modal>
      )}
    </PageWrapper>
  )
}
export default Home
