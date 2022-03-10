import React from 'react'
import {createAnecdote} from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import {useSelector, useDispatch} from 'react-redux'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    dispatch(createAnecdote(content))
    dispatch(setNotification(`You created ${content}`))
    setTimeout(() => {
      dispatch(setNotification(''))
    }, 3000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote'/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
