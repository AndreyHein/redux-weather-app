import { ReactNode } from "react"

export interface LayoutProps {
  children: ReactNode
}

export interface WeatherData {
  id: string
  name: string
  temp: string
  icon: string
}

export interface WeatherInitialState {
  userData: WeatherData[]
  error: undefined | string
  isLoading: boolean
  isModalOpened: boolean
}
