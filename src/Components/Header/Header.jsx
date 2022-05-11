import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import logo from '../../asset/image/logo.png'
import './Header.css'
import { CloudUploadOutlined, MessageOutlined, MoreOutlined, SearchOutlined, SendOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'

const axios = require('axios').default


function Header(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            await axios.get('https://ducanh-store.herokuapp.com/api/videos')
                .then((rs) => {
                    setData(rs.data)
                })
        }
        getData()

    }, [])

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
                <SendOutlined style={{fontSize: '23px'}} />
                <MessageOutlined style={{fontSize: '23px'}} />
                <div className='avatar'>
                    <div className='bg-avatar'>

                    </div>
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {}

export default Header
