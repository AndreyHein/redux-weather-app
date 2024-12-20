import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

import { colors } from "styles/colors"
import { AppImg } from "assets"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-image: url(${AppImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`

export const AppHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #d2d2d2;
  padding: 10px;
  gap: 10px;
  backdrop-filter: blur(17.799999237060547px);
  background: linear-gradient(
      0deg,
      rgba(18, 45, 77, 0.5),
      rgba(18, 45, 77, 0.5)
    ),
    linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));

  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  }
`
export const AppTitle = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 29.05px;
  margin-left: 85px;
  color: ${colors.WHITE};
  cursor: pointer;
`

export const HeaderNav = styled.nav`
  display: flex;
  gap: 30px;
  height: 100%;
  align-items: center;
`

export const HeaderLink = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  font-weight: 400;
  line-height: 24.2px;
  color: ${colors.WHITE};
  margin-right: 85px;
  border-radius: 20px;

  &.active {
    font-weight: bold;
  }
`

export const AppMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 80px;
  flex: 1;
  padding: 40px;
`
