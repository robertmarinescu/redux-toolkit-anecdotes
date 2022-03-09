import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    createAnecdote(state, action){
      state.push(action.payload)
    },
    voteAnecdote(state, action){
      const id = action.payload
      const anecdote = state.find(a => a.id === id)
      console.log('id=>',id)
      const changedAnecdote = {
        ...anecdote,
        votes: anecdote.votes + 1
      }
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
    },
    setAnecdotes(state, action){
      return action.payload
    }
  }
})

export const { createAnecdote, voteAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer