import React, { useEffect, useState, memo, useRef } from 'react'
import logo from '../../asset/image/logo.png'
import './Header.css'
import { CloudUploadOutlined, MessageOutlined, MoreOutlined, PlusOutlined, SearchOutlined, SendOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import avatar from '../../asset/image/avatar.jpg'
import Avatar from '../Avatar/Avatar'
import Login from '../../pages/Login/Login'
import { useSelector } from 'react-redux'

function Header(props) {
    const ref = useRef(null)
    const store = useSelector(state => state)
    console.log(store.accountGoogle)
    return (
        <div className=' header'>
            <img src={logo} className="logo" alt='logo' ></img>
            <form className='form'>
                <input type="text" className='text' placeholder='Search accounts and videos' />
                <span className='slice'>|</span>
                <button type="submit" className='btn-submit'> <SearchOutlined style={{ fontSize: '18px' }} /> </button>
            </form>
            <div className='header__item-right'>
                {props.component}
                {store.login && <div className='d-flex justify-content-between align-items-center w-75'>
                    <CloudUploadOutlined style={{ fontSize: '23px' }} />
                    <SendOutlined style={{ fontSize: '23px' }} />
                    <MessageOutlined style={{ fontSize: '23px' }} />

                    <Avatar src={store.accountGoogle.picture} style={{ width: '35px', height: '35px', position: 'relative' }} isProfile={true} />
                </div>}

                {
                    store.login == false && <div className='d-flex justify-content-between align-items-center w-100'>
                        <button className='btn btn__upload'><PlusOutlined /><span>Upload</span></button>
                        <button className='btn btn__login' onClick={() => ref.current.showModal()} >Login</button>
                        <MoreOutlined style={{ fontSize: '23px' }} />
                    </div>
                }
                <div className='' style={{ position: 'absolute', zIndex: 99 }}>
                    <Login ref={ref} />
                </div>
            </div>
        </div>
    )
}


export default Header
