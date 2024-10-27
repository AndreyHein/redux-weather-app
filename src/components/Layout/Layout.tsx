import { useNavigate } from "react-router-dom"
import { WEATHER_APP_ROUTES } from "constants/routes"
import { LayoutProps } from "./types"

import {
  LayoutWrapper,
  AppHeader,
  AppTitle,
  HeaderLink,
  HeaderNav,
  AppMain,
} from "./styles"

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()
  const goToHomePage = () => {
    navigate(WEATHER_APP_ROUTES.HOME)
  }

  return (
    <LayoutWrapper>
      <AppHeader>
        <AppTitle onClick={goToHomePage}>Weather App</AppTitle>
        <HeaderNav>
          <HeaderLink to={WEATHER_APP_ROUTES.HOME}>Home</HeaderLink>
          <HeaderLink to={WEATHER_APP_ROUTES.WEATHERS}>Weathers</HeaderLink>
        </HeaderNav>
      </AppHeader>
      <AppMain>{children}</AppMain>
    </LayoutWrapper>
  )
}

export default Layout
