import styled from "@emotion/styled"

import { colors } from "styles/colors"

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  box-sizing: border-box;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-left: 30px;
  justify-content: left;
  width: 100%;
  box-sizing: border-box;
`

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 710px;
  height: 250px;
  border-radius: 20px;
  background: linear-gradient(
    133.66deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  box-sizing: border-box;
  backdrop-filter: blur(2px);
`

export const CardCity = styled.p`
  padding-left: 8px;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: ${colors.WHITE};
`

export const CardDeegrees = styled.p`
  font-size: 57px;
  font-weight: 500;
  line-height: 69px;
  color: ${colors.WHITE};
`

export const CardImg = styled.img`
  width: 100px;
  height: 100px;
`

export const CardImgContainer = styled.div`
  width: fit-content;
  display: flex;
  flex: 1;
  justify-content: right;
  padding-right: 150px;
`

export const CardItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`
export const ButtonControl = styled.div`
  width: 100%;
  max-width: 470px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  padding-top: 20px;
  box-sizing: border-box;
  column-gap: 50px;
`

export const WeathersNotFound = styled.p`
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  color: white;
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
  gap: 30px;
`

export const ModalInfo = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: purple;
`