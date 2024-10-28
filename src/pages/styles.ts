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
export const SearchButtonContainer = styled.div`
  width: 210px;
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

export const SuccessModalWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
`;

export const ModalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const ModalInfo = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: purple;
`;

export const ModalIcon = styled.img`
  width: 200px;
  height: 200px;
`;