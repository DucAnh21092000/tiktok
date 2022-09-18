import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Avatar.css'
import { MoneyCollectOutlined, SettingOutlined, ShopOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons'

function Avatar({ src, style, onmouseover, isProfile }) {
    const [show, setShow] = useState(false)
    const [hover, setHover] = useState(false)
    const handleShow = () => {
        if (isProfile) {
            showProfile()
        }
    }
    const showProfile = () => {
        setHover(true)
        setShow(true)
    }
    console.log(show)
    return (
        <div className='block__avatar'>
            <div className='avatar'
                style={{ backgroundImage: `url(${src})`, height: '50px', width: '50px', ...style }}
                onMouseOver={() => handleShow()}
                onMouseOut={() => setHover(false)}
            >
                <MenuProfile />
            </div>
        </div>
    )
}

Avatar.propTypes = {}

const MenuProfile = (props) => {
    const setShow = (state) => {
        props.setShow(state)
    }
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
                        <div>
                            <i class="fa-solid fa-globe" style={{ fontSize: '20px' }}></i>
                        </div>
                        <div>
                            Tiếng Việt
                        </div>
                    </li>
                    <li className='menu__profile-item'>
                        <div>
                            <i class="fa-solid fa-question" style={{ fontSize: '20px' }}></i>
                        </div>
                        <div>
                            Phản hồi
                        </div>
                    </li>
                    <li className='menu__profile-item'>
                        <div>
                            <i class="fa-solid fa-keyboard" style={{ fontSize: '20px' }}></i>
                        </div>
                        <div>
                            Phím tắt trên bàn phím
                        </div>
                    </li>
                    <li className='menu__profile-item'>
                        <div>
                            <i class="fa-solid fa-arrow-right-from-bracket" style={{ fontSize: '20px' }}></i>
                        </div>
                        <div>
                            Đăng xuất
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Avatar
