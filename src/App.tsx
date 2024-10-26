import { Route, Routes } from "react-router-dom"

import Layout from "components/Layout/Layout"
import Home from "pages/Home/Home"
import Weathers from "pages/Weathers/Weathers"
import { WEATHER_APP_ROUTES } from "constants/routes"


const App = () => {
  return (
    
      <Layout>
        <Routes>
          <Route path={WEATHER_APP_ROUTES.HOME} element={<Home />} />
          <Route path={WEATHER_APP_ROUTES.WEATHERS} element={<Weathers />} />
        </Routes>
      </Layout>
   
  )
}

export default App
