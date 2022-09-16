import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Avatar.css'
import { MoneyCollectOutlined, SettingOutlined, ShopOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons'

function Avatar({ src, style, onmouseover, isProfile }) {
    const [hover, setHover] = useState(false)
    const handleShow = () => {
        if (isProfile) {
            showProfile()
        }
    }
    const showProfile = () => {
        setHover(true)
    }
    return (
        <div className='block__avatar'>
            <div className='avatar'
                style={{ backgroundImage: `url(${src})`, height: '50px', width: '50px', ...style }}
                onMouseOver={() => handleShow()}
                onMouseOut
            >
                {hover && <MenuProfile />}
            </div>
        </div>
    )
}

Avatar.propTypes = {}

const MenuProfile = () => {
    return (
        <div className='menu__profile'>
            <div className='menu__profile-items'>
                <ul>
                    <li className='menu__profile-item'>
                        <div><UserOutlined style={{ fontSize: '20px' }} /></div>
                        <div>Xem hồ sơ</div>
                    </li>
                    <li className='menu__profile-item'>
                        <div> <MoneyCollectOutlined style={{ fontSize: '20px' }} /></div>
                        <div> Nhận xu</div>
                    </li>
                    <li className='menu__profile-item'>
                        <div>
                            <ShopOutlined style={{ fontSize: '20px' }} />
                        </div>
                        <div>Bộ công cụ cho doanh nghiệp</div>
                    </li>
                    <li className='menu__profile-item'>
                        <div><SettingOutlined style={{ fontSize: '20px' }} /> </div>
                        <div>Cài đặt</div>
                    </li>
                    <li className='menu__profile-item'>
                        Tiếng Việt
                    </li>
                    <li className='menu__profile-item'>
                        Phản hồi
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Avatar
