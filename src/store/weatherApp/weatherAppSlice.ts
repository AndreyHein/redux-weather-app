import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"

import { WeatherInitialState, WeatherData } from "./types"

const weatherDataInitialState: WeatherInitialState = {
  data: [],
  error: undefined,
  isLoading: false,
  isModalOpened: false,
}

export const weatherSlice = createAppSlice({
  name: "WEATHER",
  initialState: weatherDataInitialState,
  reducers: create => ({
    getWeatherData: create.asyncThunk(
      async (
        { cityName, appKey }: { cityName: string; appKey: string },
        { rejectWithValue },
      ) => {
        const WEATHER_API_URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appKey}`
        const response = await fetch(WEATHER_API_URL)
        const result = await response.json()

        if (response.ok) {
          return result
        } else {
          rejectWithValue(result)
        }
      },
      {
        pending: () => {},
        fulfilled: () => {},
        rejected: () => {},
      },
    ),
    delAllCard: create.reducer(() => weatherDataInitialState),
    delCardById: create.reducer(
      (state: WeatherInitialState, action: PayloadAction<string>) => {
        state.data = [...state.data].filter(
          (card: WeatherData) => card.id !== action.payload,
        )
      },
    ),
  }),
  selectors: {
    weathers: (state: WeatherInitialState) => state,
  },
})

export const weatherSliceAction = weatherSlice.actions
export const weatherSliceSelectors = weatherSlice.selectors
