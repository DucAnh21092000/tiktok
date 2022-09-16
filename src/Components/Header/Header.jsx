import React, { useEffect, useState, memo } from 'react'
import logo from '../../asset/image/logo.png'
import './Header.css'
import { CloudUploadOutlined, MessageOutlined, MoreOutlined, SearchOutlined, SendOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import avatar from '../../asset/image/avatar.jpg'
import Avatar from '../Avatar/Avatar'
function Header(props) {

    return (
        <div className=' header'>
            <img src={logo} className="logo" alt='logo' ></img>
            <form className='form'>
                <input type="text" className='text' placeholder='Search accounts and videos' />
                <span className='slice'>|</span>
                <button type="submit" className='btn-submit'> <SearchOutlined style={{ fontSize: '18px' }} /> </button>
            </form>
            <div className='header__item-right'>
                <CloudUploadOutlined style={{ fontSize: '23px' }} />
                <SendOutlined style={{ fontSize: '23px' }} />
                <MessageOutlined style={{ fontSize: '23px' }} />
                {props.component}
                <Avatar src={avatar} style={{ width: '35px', height: '35px', position:'relative' }} isProfile={true} />
            </div>
        </div>
    )
}


export default Header
