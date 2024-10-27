import styled from "@emotion/styled"

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  box-sizing: border-box;
  gap: 30px;
  overflow-y: auto;
  width: 100%;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const ButtonContainer = styled.div`
  width: 710px;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  box-sizing: border-box;
`

export const WeatherNotFound = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-top: 40px;
`
