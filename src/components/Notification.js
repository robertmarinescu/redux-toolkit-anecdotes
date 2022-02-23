import { useSelector } from 'react-redux'

const Notification = () => {

  const { notification } = useSelector(store => store.notificationReducer)
  console.log('Notification message =>', notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification