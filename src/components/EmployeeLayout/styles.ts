import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"

import { colors } from "styles/colors"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120px;
  border-bottom: 1px solid black;
  background-color: ${colors.WHITE};
  padding: 20px 40px;
`

export const HeaderLogo = styled.img`
  height: 100px;
  width: 100px;
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
  font-weight: normal;
  color: ${colors.PRIMARY};

  &.active {
    font-weight: bold;
    text-decoration: underline;
  }
`

export const AppMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 40px;
  background-color: ${colors.PRIMARY};
  min-height: calc(100vh - 120px);
`
