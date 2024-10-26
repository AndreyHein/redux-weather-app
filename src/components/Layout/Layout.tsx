import { useNavigate } from "react-router-dom"
import { v4 } from "uuid"
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
  const appLinks = {
    [WEATHER_APP_ROUTES.HOME]: "Home",
    [WEATHER_APP_ROUTES.WEATHERS]: "Weathers",
    // [WEATHER_APP_ROUTES.NOT_FOUND]: "Weather App",
  }
  const headerLinks = Object.keys(appLinks).map((link: string) => {
    return (
      <HeaderLink
        key={v4()}
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: isActive ? "underline" : "none",
        })}
        to={link}
      >
        {appLinks[link as keyof typeof appLinks]}
      </HeaderLink>
    )
  })
  return (
    <LayoutWrapper>
      <AppHeader>
        <AppTitle onClick={goToHomePage}>Weather App</AppTitle>
        {/* <HeaderLogo onClick={goToHomePage} /> */}
        <HeaderNav>
          <HeaderNav>{headerLinks}</HeaderNav>
        </HeaderNav>
      </AppHeader>
      <AppMain>{children}</AppMain>
    </LayoutWrapper>
  )
}

export default Layout
