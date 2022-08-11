import { useEffect, useState } from "react"

const visibleNotificationStyle = {
    color: 'green',
    background: 'lightgreen',
    borderStyle: 'solid',
    padding: '5px',
    margin: '5px'
     
}
const hiddenNotificationStyle = { ...visibleNotificationStyle, visibility: 'hidden' }

const TIME_TO_SHOW_NOTIFICATION = 2500

const Notification = ({message}) => {

    const [notificationStyle, setNotificationStyle] = useState(hiddenNotificationStyle)

    useEffect(() => {
        setNotificationStyle(message !== '' ? visibleNotificationStyle : hiddenNotificationStyle)
        console.log('Effect Called:', message)
        window.setTimeout(() => setNotificationStyle(hiddenNotificationStyle), TIME_TO_SHOW_NOTIFICATION)
    }, [message])

    return ( 
        <div style={notificationStyle}>
            {message}
        </div>
    )
}

export default Notification