import styled from "@emotion/styled"
import { colors } from "styles/colors"

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: 30px;

  width: 100%;
  padding: 10px;
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
  overflow-y: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-height: calc(100vh - 200px);
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

export const WeathersNotFound = styled.p`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: ${colors.WHITE};
  font-size: 36px;
`

export const SuccessModalWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
`

export const ModalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  gap: 30px;
`

export const ModalInfo = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: white;
`
