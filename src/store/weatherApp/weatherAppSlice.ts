import { v4 } from "uuid"

import { createAppSlice } from "store/createAppSlice"
import { PayloadAction } from "@reduxjs/toolkit"

import { WeatherInitialState, WeatherData } from "./types"

const weatherDataInitialState: WeatherInitialState = {
  messageModal: "", // либо хранить локально, либо отдельный Slice
  dataObj: undefined,
  data: [],
  error: undefined,
  isLoading: false,
  isModalOpened: false, // либо хранить локально, либо отдельный Slice
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
        const WEATHER_API_URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appKey}` // можно хранить тут appKey
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
          state.dataObj = undefined
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

    saveWeatherData: create.reducer((state: WeatherInitialState) => {
      state.data = state.dataObj ? [...state.data, state.dataObj] : state.data
      state.dataObj = undefined
      state.isModalOpened = true
      state.messageModal = "Your data has been saved successfully!!!"
    }),
    delError: create.reducer((state: WeatherInitialState) => {
      state.error = undefined
      state.isModalOpened = true
      state.messageModal = "Your data has been successfully deleted !!!"
    }),
    delObjData: create.reducer((state: WeatherInitialState) => {
      state.dataObj = undefined
      state.isModalOpened = true
      state.messageModal = "Your data has been successfully deleted !!!"
    }),
    delAllCard: create.reducer(() => {
      return {
        ...weatherDataInitialState,
        isModalOpened: true,
        messageModal: "Your data has been successfully deleted !!!",
      }
    }),
    delCardById: create.reducer(
      (state: WeatherInitialState, action: PayloadAction<string>) => {
        state.data = [...state.data].filter(
          (card: WeatherData) => card.id !== action.payload,
        )
        state.isModalOpened = true
        state.messageModal = "Your data has been successfully deleted !!!"
      },
    ),
    closeModal: create.reducer((state: WeatherInitialState) => {
      state.isModalOpened = false
    }),
  }),
  selectors: {
    weathers: (state: WeatherInitialState) => state,
  },
})

export const weatherSliceAction = weatherSlice.actions
export const weatherSliceSelectors = weatherSlice.selectors
