import styled from "@emotion/styled"

export const PageWrapper = styled.div`
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  gap: 30px;
  min-height: 200px;
  max-height: calc(100vh - 90px);
`
export const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 710px;
  column-gap: 20px;
  padding-bottom: 100px;
`
export const InputContainer = styled.div`
  width: 100%;
`

export const CardContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
export const ButtonContainer = styled.div`
  width: 210px;
`
export const WeatherNotFound = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin-top: 40px;
`
