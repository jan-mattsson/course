import { useEffect, useState } from "react"


const visibleNotificationStyle = {
    color: 'green',
    background: 'lightgreen',
    borderStyle: 'solid',
    padding: '5px',
    margin: '5px'
     
}
const hiddenNotificationStyle = { ...visibleNotificationStyle, visibility: 'hidden' }
const errorStyle = { ...visibleNotificationStyle, color: 'red', background: 'lightpink'}

const TIME_TO_SHOW_NOTIFICATION = 2500

const getMessageStyle = msgType => msgType === 'error' ? errorStyle : visibleNotificationStyle

const Notification = ({message}) => {
    console.log(message)

    const [notificationStyle, setNotificationStyle] = useState(hiddenNotificationStyle)

    useEffect(() => {
        setNotificationStyle(message.message !== '' ? getMessageStyle(message.msgType) : hiddenNotificationStyle)
        console.log('Effect Called:', message.message, message.msgType)
        window.setTimeout(() => setNotificationStyle(hiddenNotificationStyle), TIME_TO_SHOW_NOTIFICATION)
    }, [message])

    return ( 
        <div style={notificationStyle}>
            {message.message}
        </div>
    )
}

export default Notification