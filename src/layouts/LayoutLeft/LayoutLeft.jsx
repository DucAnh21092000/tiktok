import { Discover, menuItems } from './const'
import React from 'react'
import { useState, useEffect } from 'react'
import Account from '../../Components/Account/Account'
import './LayoutLeft.scss'
import { Hagtag, Music } from '../../Components/Hagtag'

const axios = require('axios').default;
axios.defaults.baseURL = `https://ducanh-store.herokuapp.com/api`
const LayoutLeft = () => {
    const [id, setId] = useState(1)
    const [followList, setFollowList] = useState([])
    const [suggestList, setSuggestList] = useState([])
    const [numberFollow, setNumberFollow] = useState(0)
    const [numberSuggest, setNumberSuggest] = useState(0)
    const [totalSuggest, setTotalSuggest] = useState(0)
    const [totalFollow, setTotalFollow] = useState(0)
    const handleSetNumberSuggest = (number) => {
        if (number <= totalSuggest) {
            setNumberSuggest(number => number + 5)
        }
        else {
            setNumberSuggest(0)
        }

    }

    const handleSetNumberFollow = (number) => {
        if (number <= totalFollow) {
            setNumberFollow(number => number + 5)
        }
        else {
            setNumberFollow(0)
        }

    }

    useEffect(() => {
        async function getSuggests() {
            await axios.get(`/suggests?_start=0&_end=${numberSuggest + 5}`)
                .then(data => {
                    setSuggestList(data.data.data)
                    setTotalSuggest(data.data.pagination._total)
                })
        }
        getSuggests()
    }, [numberSuggest])

    useEffect(() => {
        async function getFollowings() {
            await axios.get(`/followings?_start=0&_end=${numberFollow + 5}`)
                .then(data => {
                    setFollowList(data.data.data)
                    setTotalFollow(data.data.pagination._total)
                })
        }
        getFollowings()
        return () => {

        }
    }, [numberFollow])

    return (
        <React.Fragment>
            <div className='menu'>
                {menuItems.map((arr, index) => (
                    <div className={id === (index + 1) ? 'menu__item active' : 'menu__item'} key={index} onClick={() => setId(index + 1)}>
                        <span>
                            <arr.icon style={{ fontSize: '24px', padding: '10px 15px 10px 0' }} />
                        </span>
                        <span className='menu__item-text'> {arr.name}</span>
                    </div>
                ))}
            </div>
            <div className='suggested border__bottom'>
                <div className='pt-2'>
                    <p className='text__header'> Suggestes Accounts {totalSuggest}</p>
                </div>
                {suggestList.map((arr, index) => {

                    return (
                        <Account arr={arr} />
                    )
                })}

                <a className='btn btn__suggest' onClick={() => handleSetNumberSuggest(numberSuggest)}><small> {numberSuggest < totalSuggest ? 'See more' : 'See less'}</small></a>

            </div>
            <div className='following border__bottom'>
                <div className='pt-2'>
                    <p className='text__header'> Following Accounts</p>
                </div>
                {followList.map((arr, index) => {
                    return (
                        <Account arr={arr} />
                    )
                })}
                <a className='btn btn__suggest' onClick={() => handleSetNumberFollow(numberFollow)}><small> {numberFollow < totalFollow ? 'See more' : 'See less'}</small></a>

            </div>
            <div className='discover border__bottom'>
                <div className='pt-2'>
                    <p className='text__header'> Discover</p>
                </div>
                <div className='discover__items mb-3'>
                    {Discover.map((arr, index) => {
                        let Tag = Hagtag

                        if (arr.type === 'music') {
                            Tag = Music
                        }
                        return (
                            <div key={index} className='discover__item'>
                                <span><Tag /></span>
                                <span className='discover__item-text pr-2'>{arr.content}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='about mb-3'>
                <small style={{fontWeight:600,width:'80%'}} className='text__header'>
                    <div className='d-flex flex-wrap justify-content-between' style={{width:'90%'}}>
                        <p>About</p>
                        <p>Newsroom</p>
                        <p> Contact </p>
                        <p> Careers </p>
                        <p> ByteDance</p>
                    </div>
                    <div className='d-flex flex-wrap justify-content-between'>
                        <p>TikTok for Good</p>
                        <p>Advertise</p>
                        <p>Developers</p>
                        <p>Transparency</p>
                        <p>TikTok Rewards</p>
                    </div>
                    <div className='d-flex flex-wrap justify-content-between'>
                        <p>Safety</p>
                        <p>Terms</p>
                        <p>Privacy</p>
                        <p>Help,</p>
                        <p>Creator Portal</p>
                        <p> Community Guidelines</p>
                    </div>
                    <div>© 2022 TikTok</div>
                </small>
            </div>
        </React.Fragment>
    )
}
export default LayoutLeft