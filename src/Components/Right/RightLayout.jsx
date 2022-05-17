import { CloseOutlined, LaptopOutlined, PhoneOutlined, ToTopOutlined } from '@ant-design/icons'
import React from 'react'
import './RightLayout.scss'
import { useState } from 'react'
import Notification from '../Notification/Notification'
export default function RightLayout() {

    const [notification, setNotification] = useState(false)
    const changeState = (state) => { 

        setNotification(!state)
    }
    return (
        <div className='rightLayout'>
            {notification && <Notification callback={changeState} />}
            <button type='button' className={notification ? 'd-none' : 'mb-2 getApp '} onClick={() => setNotification(!notification)}>
                Get app
            </button>
            <div className='w-100' style={{ height: '32px' }}>
                <button className='scroll'>
                    <ToTopOutlined style={{ fontSize: '18px' }} />
                </button>
            </div>

        </div>
    )
}
