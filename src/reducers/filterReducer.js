import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      const content = action.payload
      console.log('filter=>', content)
      state.value.concat(content)
    }
  }
})

export const { setFilter } = filterSlice.actions

export default filterSlice.reducer