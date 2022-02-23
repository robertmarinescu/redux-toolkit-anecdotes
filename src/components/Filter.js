import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = () => {

  const [filterValue, setFilterValue] = useState()
  const dispatch = useDispatch() 

  const handleChange = (event) => {
    // console.log('VALUE => ', event.target.value)
    dispatch(setFilter(event.target.value))
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input value={filterValue} onChange={handleChange} />
    </div>
  )
}

export default Filter
