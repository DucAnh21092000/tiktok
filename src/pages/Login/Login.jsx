import React, { useContext, useEffect, useImperativeHandle, useState } from 'react'
import PropTypes from 'prop-types'
import { forwardRef } from 'react'
import { AppleOutlined, CloseOutlined, InstagramOutlined, LineChartOutlined, LineOutlined, TwitterOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import './Login.css'
import { LOGIN_GOOGLE_ACTION } from '../../redux/const/login'
import FacebookLogin from 'react-facebook-login'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'



const Login = forwardRef((props, ref) => {
    const state = useSelector( state => state)
    
    const clientId = '776097992818-s76ei548q69vdt3hitl4t7h7o6jbjq04.apps.googleusercontent.com'
    const [show, setShow] = useState(false)
    useImperativeHandle(ref, () => ({
        showModal() {
            setShow(true)
        }
    }))

    const dispatch = useDispatch()
    const handleGetResponse = (res) => {
        const data = jwt_decode(res.credential)
        dispatch({ type: LOGIN_GOOGLE_ACTION, data })
        return data
    }

    function handleShowLoginForm() {
        setShow(false)
    }

    return (
        <div>
            {show && <div className='login'>
                <div className='login__layout'>
                    <div className='login__header'>
                        <div className='btn__close-block'>
                            <CloseOutlined className='btn__close' onClick={() => handleShowLoginForm()} />
                        </div>
                    </div>
                    <div className='login__content'>
                        <div className='login__item'>
                            <p>Đăng nhập vào TikTok</p>
                        </div>
                        <div className='login__item'>
                            <div className='login__google'>
                                <GoogleOAuthProvider clientId={clientId}>
                                    <GoogleLogin
                                        onSuccess={handleGetResponse}
                                        text='Tiếp tục với Google'
                                        auto_select={true}
                                        isSignedIn={true}
                                    />
                                </GoogleOAuthProvider>
                            </div>
                        </div>
                        <div className='login__item'>
                            <div className='login__twitter'>
                                {/*========================== SVG Twitter Start =====================  */}
                                <span>
                                    <svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 6C6.89543 6 6 6.89543 6 8V21C6 22.1046 6.89543 23 8 23H21C22.1046 23 23 22.1046 23 21V8C23 6.89543 22.1046 6 21 6H8ZM10 19V10H19V19H10ZM28 6C26.8954 6 26 6.89543 26 8V21C26 22.1046 26.8954 23 28 23H41C42.1046 23 43 22.1046 43 21V8C43 6.89543 42.1046 6 41 6H28ZM30 19V10H39V19H30ZM8 26C6.89543 26 6 26.8954 6 28V41C6 42.1046 6.89543 43 8 43H21C22.1046 43 23 42.1046 23 41V28C23 26.8954 22.1046 26 21 26H8ZM10 39V30H19V39H10ZM26 42C26 42.5523 26.4477 43 27 43H29C29.5523 43 30 42.5523 30 42V27C30 26.4477 29.5523 26 29 26H27C26.4477 26 26 26.4477 26 27V42ZM32.5 42C32.5 42.5523 32.9477 43 33.5 43H35.5C36.0523 43 36.5 42.5523 36.5 42V27C36.5 26.4477 36.0523 26 35.5 26H33.5C32.9477 26 32.5 26.4477 32.5 27V42ZM40 43C39.4477 43 39 42.5523 39 42V27C39 26.4477 39.4477 26 40 26H42C42.5523 26 43 26.4477 43 27V42C43 42.5523 42.5523 43 42 43H40Z"></path></svg>

                                </span>
                                {/*========================== SVG Twitter Start =====================  */}
                                <div className='item__login-style '> Sử dụng mã QR</div>
                            </div>
                        </div>
                        <div className='login__item'>
                            <div className='login__twitter'>
                                {/*========================== SVG User Start =====================  */}
                                <span>
                                    <svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.0003 7C20.1343 7 17.0003 10.134 17.0003 14C17.0003 17.866 20.1343 21 24.0003 21C27.8663 21 31.0003 17.866 31.0003 14C31.0003 10.134 27.8663 7 24.0003 7ZM13.0003 14C13.0003 7.92487 17.9252 3 24.0003 3C30.0755 3 35.0003 7.92487 35.0003 14C35.0003 20.0751 30.0755 25 24.0003 25C17.9252 25 13.0003 20.0751 13.0003 14ZM24.0003 33C18.0615 33 13.0493 36.9841 11.4972 42.4262C11.3457 42.9573 10.8217 43.3088 10.2804 43.1989L8.32038 42.8011C7.77914 42.6912 7.4266 42.1618 7.5683 41.628C9.49821 34.358 16.1215 29 24.0003 29C31.8792 29 38.5025 34.358 40.4324 41.628C40.5741 42.1618 40.2215 42.6912 39.6803 42.8011L37.7203 43.1989C37.179 43.3088 36.6549 42.9573 36.5035 42.4262C34.9514 36.9841 29.9391 33 24.0003 33Z"></path></svg>

                                </span>
                                {/*========================== SVG User End =====================  */}
                                <div className='item__login-style '> Số điện thoại / Email / TikTok ID</div>
                            </div>
                        </div>
                        <div className='login__item'>
                            <div className=''>
                                <div className='facebook'>
                                    <FacebookLogin
                                        appId="1088597931155576"
                                        autoLoad={true}
                                        fields="name,email,picture"
                                        cssClass="my-facebook-button-class login__facebook item__login-style"
                                        icon="fa-brands fa-facebook"
                                        textButton='Tiếp tục với Facebook'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='login__item'>
                            <div className='login__twitter'>
                                {/*========================== SVG Twitter Start =====================  */}
                                <span>
                                    <svg width="1em" height="1em" viewBox="0 0 48 48" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M43.8044 6.79902C42.5841 7.62363 39.7822 8.82191 38.4004 8.82191V8.82437C36.8226 
                                7.08554 34.6013 6 32.1377 6C27.353 6 23.4731 10.093 23.4731 15.1387C23.4731 15.8398 
                                23.5501 16.5236 23.6925 17.1793H23.6911C17.2007 16.9996 10.1022 13.5678 5.82893
                                 7.69403C3.2016 12.4916 5.4752 17.8272 8.45673 19.7713C7.43613 19.8526 5.55733 19.6473 4.673
                                  18.737C4.61373 21.9212 6.06507 26.1403 11.3571 27.6709C10.3379 28.2494 8.53373 28.0834 
                                  7.74926 27.9604C8.0246 30.6484 11.5927 34.1625 15.4945 34.1625C14.1039 35.8594 8.8716
                                   38.9374 3 37.9582C6.98767 40.5177 11.6352 42 16.5543 42C30.5333 42 41.3894 30.0482
                                    40.8051 15.3041C40.8028 15.2879 40.8028 15.2716 40.8014 15.2539C40.8028 15.216 40.8051
                                     15.1781 40.8051 15.1387C40.8051 15.0929 40.8014 15.0496 40.8 15.0053C42.0726 14.0871 
                                     43.7801 12.463 45 10.3254C44.2925 10.7365 42.1701 11.5596 40.1952 11.7639C41.4627
                                      11.0422 43.3405 8.67865 43.8044 6.79902Z" fill="#1DA1F2" />
                                    </svg>

                                </span>
                                {/*========================== SVG Twitter Start =====================  */}
                                <div className='item__login-style '> Tiếp tục với Twitter</div>
                            </div>
                        </div>
                        <div className='login__item'>
                            <div className='login__line'>
                                {/*========================== SVG LINE Start =====================  */}
                                <span>
                                    <svg width="1em" height="1em" viewBox="0 0 48 48" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M24 47.001C36.7026 47.001 47 36.7035 47 24.001C47 11.2984 36.7026 1.00098 24
                                 1.00098C11.2975 1.00098 1 11.2984 1 24.001C1 36.7035 11.2975 47.001 24 47.001Z"
                                            fill="#FBE300" />
                                        <path d="M24.0825 10C15.6421 10 8.7998 15.3949 8.7998 22.0498C8.7998
                                  26.3524 11.6603 30.1276 15.9633 32.2594C15.7292 33.0668 14.459 37.4532 14.4084 
                                  37.7978C14.4084 37.7978 14.378 38.0567 14.5457 38.1555C14.7133 38.2542 14.9105 38.1775 
                                  14.9105 38.1775C15.3914 38.1104 20.4862 34.5316 21.3681 33.9101C22.249 34.0349 23.1562 
                                  34.0997 24.0825 34.0997C32.523 34.0997 39.3652 28.7049 39.3652 22.0498C39.3652 15.3949 
                                  32.523 10 24.0825 10Z" fill="black" />
                                        <path d="M15.6327 26.2563C15.1464 26.2563 14.751 25.8786 14.751 
                                  25.4143V20.1763H13.3752C12.8981 20.1763 12.51 19.7889 12.51 19.3129C12.51 18.837 
                                  12.8982 18.4496 13.3752 18.4496H17.8901C18.3673 18.4496 18.7554 18.837 18.7554 
                                  19.3129C18.7554 19.7889 18.3671 20.1763 17.8901 20.1763H16.5144V25.4143C16.5144 
                                  25.8786 16.1189 26.2563 15.6327 26.2563ZM23.364 26.2448C22.9963 26.2448 22.715 26.0955 
                                  22.6303 25.8554L22.1937 24.7124L19.5051 24.7123L19.0682 25.856C18.9837 26.0957 18.7026 
                                  26.2448 18.3349 26.2448C18.1415 26.245 17.9504 26.2035 17.7745 26.1232C17.5314 26.011 
                                  17.2978 25.7027 17.5655 24.8711L19.6745 19.32C19.8231 18.8978 20.2744 18.4628 20.8486 
                                  18.4498C21.4245 18.4627 21.8758 18.8978 22.0247 19.3209L24.1328 24.8695C24.4011 25.703 
                                  24.1675 26.0115 23.9244 26.1233C23.7485 26.2035 23.5573 26.245 23.364 26.2448C23.364 
                                  26.2448 23.3638 26.2448 23.364 26.2448ZM21.73 23.1507L20.8494 20.6489L19.9687 
                                  23.1507H21.73ZM25.5518 26.1277C25.0858 26.1277 24.7068 25.765 
                                  24.7068 25.3195V19.3313C24.7068 18.8451 25.1106 18.4496 25.6069 18.4496C26.1031 
                                  18.4496 26.5069 18.8451 26.5069 19.3313V24.5113H28.3805C28.8465 24.5113 29.2255 
                                  24.8739 29.2255 25.3195C29.2255 25.765 28.8465 26.1277 28.3805 26.1277H25.5518ZM30.4502 
                                  26.2448C29.9639 26.2448 29.5685 25.8494 29.5685 25.3631V19.3313C29.5685 18.8451 29.9639 
                                  18.4496 30.4502 18.4496C30.9364 18.4496 31.3319 18.8451 31.3319 19.3313V21.2264L33.7918 
                                  18.7664C33.9183 18.6399 34.0921 18.5703 34.2808 18.5703C34.501 18.5703 34.722 18.6652 
                                  34.8876 18.8307C35.042 18.985 35.1342 19.1835 35.1468 19.3896C35.1596 19.5976 35.0904 
                                  19.7882 34.9522 19.9265L32.943 21.9354L35.1133 24.8106C35.1834 24.9028 35.2344 25.0081
                                   35.2635 25.1202C35.2925 25.2323 35.299 25.3491 35.2826 25.4638C35.2669 25.5785 35.2285 
                                   25.689 35.1698 25.7888C35.1111 25.8886 35.0331 25.9758 34.9405 26.0453C34.788 26.1612 
                                   34.6017 26.2237 34.4101 26.2232C34.2735 26.2239 34.1387 26.1925 34.0164 26.1316C33.894 
                                   26.0708 33.7877 25.9821 33.7058 25.8728L31.6381 23.133L31.3321 23.439V25.3627C31.3319 
                                   25.5965 31.2389 25.8207 31.0735 25.9861C30.9082 26.1515 30.684 26.2445 30.4502 26.2448Z"
                                            fill="#FFE812" />
                                    </svg>
                                </span>
                                {/*========================== SVG LINE Start =====================  */}
                                <div className='item__login-style'> Tiếp tục với LINE</div>
                            </div>
                        </div>
                        <div className='login__item'>
                            <div className='login__instagram'>

                                {/*========================== SVG Apple Start =====================  */}
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 48 48"
                                        width="1em" height="1em"><path fillRule="evenodd"
                                            d="M32.54 4c.278 2.368-.73 4.699-2.203 6.412-1.537 1.687-3.999 2.978-6.395
                                 2.811-.312-2.276.9-4.697 2.26-6.174C27.739 5.372 30.406 4.09 32.539 4zm7.844 
                                 13.647c-.276.153-4.7 2.614-4.65 7.625.055 6.058 5.697 8.059 5.766 8.08-.034.14-.883 
                                 2.89-2.999 5.68-1.768 2.458-3.621 4.86-6.56 4.905-1.399.03-2.342-.345-3.326-.734-1.026-.407-2.095-.831-3.77-.831-1.773 0-2.89.437-3.966.86-.932.364-1.833.717-3.104.766-2.801.097-4.94-2.624-6.772-5.06-3.659-4.97-6.51-14.01-2.689-20.159 1.851-3.016 5.23-4.96 8.837-5.011 1.59-.031 3.114.538 4.45 1.038 1.02.381 1.932.722 2.678.722.657 0 1.543-.328 2.576-.709 1.628-.601 3.62-1.336 5.648-1.137 1.387.036 5.338.508 7.887 3.962l-.006.003z"
                                            clipRule="evenodd" />
                                    </svg>

                                </span>
                                {/*========================== SVG Apple End =====================  */}
                                <div className='item__login-style'> Tiếp tục với Apple</div>
                            </div>
                        </div>
                        <div className='login__item'>
                            <div className='login__instagram'>
                                {/*========================== SVG Instagram Start =====================  */}
                                <span>
                                    <svg width="1em" height="1em" viewBox="0 0 48 48" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd"
                                            d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46Z"
                                            fill="url(#InstagramCircleColor_paint0_radial)" /><path fillRule="evenodd" clipRule="evenodd"
                                                d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46Z"
                                                fill="url(#InstagramCircleColor_paint1_radial)" />
                                        <path
                                            d="M12.2689 29.0393L12.2683 29.0257L12.2674 29.0121C12.2581 28.8681 12.2467 28.7257 12.2361 28.5942L12.2357 
                                          28.5899C12.2259 28.4679 12.2168 28.3551 12.2093 28.2443V19.8627C12.21 19.8592 12.2108 19.8558 12.2115 
                                          19.8523C12.2258 19.7843 12.2503 19.6567 12.2525 19.5033C12.2783 18.5107 12.3298 17.6235 12.5372 16.7855C13.0067 
                                          14.9166 14.0499 13.622 15.7951 12.8635C16.7343 12.4582 17.7702 12.3191 18.9552 12.2691C19.2441 12.2596 19.5271
                                          12.2332 19.7741 12.2093H28.1373C28.1408 12.21 28.1442 12.2108 28.1477 12.2115C28.2157 12.2258 28.3433 12.2503
                                          28.4967 12.2525C29.4893 12.2783 30.3765 12.3298 31.2145 12.5372C33.0835 13.0068 34.3781 14.05 35.1366 
                                          15.7954C35.5419 16.7345 35.6809 17.7702 35.7309 18.9552C35.7404 19.244 35.7668 19.5271 35.7907 
                                          19.7741V28.1373C35.79 28.1408 35.7892 28.1442 35.7885 28.1477C35.7742 28.2157 35.7497 28.3433 35.7475 
                                          28.4967C35.7217 29.4894 35.6701 30.3768 35.4627 31.2149C34.9931 33.0836 33.9499 34.3781 32.2048 35.1366C31.2656 
                                          35.5418 30.2298 35.6809 29.0448 35.7309C28.756 35.7404 28.4729 35.7668 28.2259 35.7907H19.8627C19.8592 35.79
                                          19.8558 35.7892 19.8523 35.7885C19.7843 35.7742 19.6567 35.7497 19.5033 35.7475C18.5106 35.7217 17.6232 35.6701 
                                          16.7851 35.4627C14.9165 34.9931 13.622 33.95 12.8635 32.205C12.4575 31.2643 12.3187 30.2267 12.2689 29.0393Z"
                                            stroke="white" strokeWidth="2.4186" />
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M24 28.207C26.3015 28.207 28.2068 26.327 28.2068 24.0508C28.2068 21.7071 26.3437 
                                        19.8017 24.0421 19.7933C21.69 19.7933 19.7931 21.6649 19.7931 23.9917C19.7931 26.
                                         21.6731 28.207 24 28.207ZM30.5 24.0084C30.5 27.6083 27.583 30.5084 23.9831 
                                         30.5C20.4001 30.4916 17.5 27.583 17.5 23.9916C17.5 20.3917 20.417 17.4916 
                                         24.0169 17.5C27.5999 17.5084 30.5 20.417 30.5 24.0084Z" fill="white" />
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M30.4921 15.3327C31.2981 15.3327 31.9446 15.9712 31.9446 16.7692C31.9446 17.5672 
                                    31.2981 18.2216 30.5001 18.2216C29.7101 18.2216 29.0557 17.5672 29.0557 16.7692C29.
                                     15.9791 29.7101 15.3327 30.4921 15.3327Z" fill="white" />
                                        <defs>
                                            <radialGradient id="InstagramCircleColor_paint0_radial" cx={0} cy={0} r={1}
                                                gradientUnits="userSpaceOnUse" gradientTransform="translate(13.6876 49.3889)
                                       rotate(-90) scale(43.6073 40.5582)">
                                                <stop stopColor="#FFDD55" />
                                                <stop offset="0.1" stopColor="#FFDD55" />
                                                <stop offset="0.5" stopColor="#FF543E" />
                                                <stop offset={1} stopColor="#C837AB" />
                                            </radialGradient>
                                            <radialGradient id="InstagramCircleColor_paint1_radial" cx={0} cy={0} r={1}
                                                gradientUnits="userSpaceOnUse" gradientTransform="translate(-5.37023 5.16969) 
                                        (78.6806) scale(19.4926 80.3494)">
                                                <stop stopColor="#3771C8" />
                                                <stop offset="0.128" stopColor="#3771C8" />
                                                <stop offset={1} stopColor="#6600FF" stopOpacity={0} />
                                            </radialGradient>
                                        </defs>
                                    </svg>
                                </span>
                                {/*========================== SVG Instagram End =====================  */}
                                <div className='item__login-style'> Tiếp tục với Instagram</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
})



export default Login