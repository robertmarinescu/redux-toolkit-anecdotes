import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {voteAnecdote} from '../reducers/anecdoteReducer'
import {setNotification} from '../reducers/notificationReducer'


const AnecdoteList = () => {
  const filter = useSelector(state => state.filterReducer)
  let anecdotes = useSelector(({anecdoteReducer, notificationReducer, filterReducer}) => {
      return anecdoteReducer.filter(anecdote => anecdote.content.toLowerCase().includes(filterReducer.value.toLowerCase()))
  })

  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteAnecdote(id))
    const anecdote = anecdotes.find(a => a.id === id)
    dispatch(setNotification(`You voted ${anecdote.content}`))
    setTimeout(() => {
      dispatch(setNotification(''))
    }, 3000)
  }

  return (
    <div>
      {[...anecdotes].sort((a,b) => a.votes > b.votes ? -1 : 1).map(anecdote => {
        return (
          <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
        )}
      )}
    </div>
  )
}

export default AnecdoteList
