import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface menuState {
  value: boolean
}

const initialState: menuState = {
  value: false,
}

export const menuStateSlice = createSlice({
  name: 'menuState',
  initialState,
  reducers: {
    responsive: (state, action: PayloadAction<boolean>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { responsive } = menuStateSlice.actions

export default menuStateSlice.reducer