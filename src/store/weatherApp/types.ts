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
  messageModal: string
  dataObj: WeatherData | undefined
  data: WeatherData[]
  error: undefined | string
  isLoading: boolean
  isModalOpened: boolean
}
