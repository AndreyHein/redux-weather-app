import { useNavigate } from "react-router-dom"
import { EMPLOYEE_APP_ROUTES } from "constants/routes"
import { LayoutProps } from "pages/EmployeeApp/types"

import {
  LayoutWrapper,
  AppHeader,
  HeaderLink,
  HeaderLogo,
  HeaderNav,
  AppMain,
} from "./styles"

function EmployeeLayout({ children }: LayoutProps) {
  const navigate = useNavigate()
  const goToHomePage = () => {
    navigate(EMPLOYEE_APP_ROUTES.HOME)
  }

  return (
    <LayoutWrapper>
      <AppHeader>
        <HeaderLogo
          src="https://www.365akademie.de/wp-content/uploads/2022/11/Microsoft-365-Apps-Logo-1.png"
          alt="App Logo"
          onClick={goToHomePage}
        />
        <HeaderNav>
          <HeaderLink to={EMPLOYEE_APP_ROUTES.CREATE_EMPLOYEE}>
            Create Employee
          </HeaderLink>

          <HeaderLink to={EMPLOYEE_APP_ROUTES.EMPLOYEES}>Employees</HeaderLink>
        </HeaderNav>
      </AppHeader>
      <AppMain>{children}</AppMain>
    </LayoutWrapper>
  )
}

export default EmployeeLayout
