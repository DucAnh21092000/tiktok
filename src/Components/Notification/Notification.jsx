import React from 'react'
import { PhoneOutlined, LaptopOutlined, CloseOutlined } from '@ant-design/icons';
import { useState } from 'react'
export default function Notification(props) {
    const [notification, setNotification] = useState(false)
    const changeState = () => {
        setNotification(!notification)
        props.callback(true)
    }
    return (
        <div className={notification ? 'd-none' : ' '}>
            <div className={notification ? 'd-none' : 'notification'}>
                <div style={{ width: '90%' }}>
                    <div className='notification__item' style={{ borderBottom: '1px solid black' }}>
                        <LaptopOutlined style={{ padding: '5px 10px' }} />
                        <span> Get TikTok for desktop  </span>
                    </div>
                    <div className='  notification__item'>
                        <PhoneOutlined style={{ padding: '5px 10px' }} />
                        <span>Get TikTok App</span>
                    </div>
                </div>
                <CloseOutlined style={{ width: '10%', marginTop: '15px' }} onClick={() => changeState()} />
            </div>
        </div>
    )
}
