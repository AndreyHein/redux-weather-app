import { v4 } from "uuid"

import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"

import { WeatherInitialState, WeatherData } from "./types"

const weatherDataInitialState: WeatherInitialState = {
  inputValue: "",
  dataObj: undefined,
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
          return rejectWithValue(result.message)
        }
      },
      {
        pending: (state: WeatherInitialState) => {
          state.error = undefined
          state.isLoading = true
        },
        fulfilled: (state: WeatherInitialState, action) => {
          state.isLoading = false
          state.dataObj = {
            id: v4(),
            name: action.payload.name,
            temp: action.payload.main["temp"],
            icon: action.payload.weather[0].icon,
          }
        },
        rejected: (state: WeatherInitialState, action) => {
          state.isLoading = false
          state.error = action.payload as string
        },
      },
    ),
    getCityName: create.reducer(
      (state: WeatherInitialState, action: PayloadAction<string>) => {
        state.inputValue = action.payload
      },
    ),
    saveWeatherData: create.reducer((state: WeatherInitialState) => {
      state.data = state.dataObj ? [...state.data, state.dataObj] : state.data
      state.dataObj = undefined
      state.inputValue = ""
    }),
    delError: create.reducer((state: WeatherInitialState) => {
      state.error = undefined
    }),
    delObjData: create.reducer((state: WeatherInitialState) => {
      state.dataObj = undefined
    }),
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
