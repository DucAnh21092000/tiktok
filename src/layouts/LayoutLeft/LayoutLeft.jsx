import { Discover, menuItems } from './const'
import React from 'react'
import { useState, useEffect } from 'react'
import Account from '../../Components/Account/Account'
import './LayoutLeft.scss'
import { Hagtag, Music } from '../../Components/Hagtag'
import MenuItem from '../../Components/MenuItem/MenuItem'
import { useParams, Link } from 'react-router-dom'

const axios = require('axios').default;
axios.defaults.baseURL = `https://ducanh-store.herokuapp.com/api`
const LayoutLeft = (props) => {
    const state = props.state
    const suggestList = props.suggestList
    const followList = props.followList
    const hostList = props.hostList
    const totalFollow = props.totalFollow
    const totalSuggest = props.totalSuggest
    const setNumberFollow = () => {
        props.callback({
            type: 'setNumberFollow',
            value: state.numberFollow < totalFollow ? (state.numberFollow + 5) : 0
        })
    }
    const setNumberSuggest = () => {
        props.callback({
            type: 'setNumberSuggest',
            value: state.numberSuggest < totalSuggest ? (state.numberSuggest + 5) : 0
        })
    }

    const setNumberHost = () => {
        props.callback({
            type: 'setNumberHost',
            value: state.numberHost < props.totalHost ? (state.numberHost + 5) : 0
        })
    }
    return (
        <React.Fragment>
            <div className='menu'>
                {menuItems.map((arr, index) => (
                    <div key={index}>
                        <MenuItem icon={arr.icon} name={arr.name} index={index} path={arr.path} />
                    </div>
                ))}
            </div>
            {
                suggestList && <div className='suggested border__bottom'>
                    <div className='pt-2'>
                        <p className='text__header'> Suggestes Accounts </p>
                    </div>
                    <Account arr={suggestList} />
                    <a className='btn btn__suggest' onClick={() => setNumberSuggest()}>
                        <small> {state.numberSuggest < totalSuggest ? 'See more' : 'See less'}
                        </small>
                    </a>

                </div>}

            {
                followList && <div className='following border__bottom'>
                    <div className='pt-2'>
                        <p className='text__header'> Following Accounts</p>
                    </div>
                    <Account arr={followList}  />
                    <a className='btn btn__suggest' onClick={() => setNumberFollow()}>
                        <small> {state.numberFollow < totalFollow ? 'See more' : 'See less'}
                        </small>
                    </a>

                </div>
            }

            {
                hostList && <div className='following border__bottom'>
                    <div className='pt-2'>
                        <p className='text__header'> Suggested hosts</p>
                    </div>
                    <Account arr={hostList} people={5} />
                    <a className='btn btn__suggest' onClick={() => setNumberHost()}>
                        <small> {state.numberHost < props.totalHost ? 'See more' : 'See less'}
                        </small>
                    </a>

                </div>
            }
            {
                props.discover && <div className='discover border__bottom'>
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
            }
            <div className='about mb-3'>
                <small style={{ fontWeight: 600, width: '80%' }} className='text__header'>
                    <div className='d-flex flex-wrap' style={{ width: '90%' }}>
                        <p className='pl-2'>About</p>
                        <p className='pl-2'>Newsroom</p>
                        <p className='pl-2'> Contact </p>
                        <p className='pl-2'> Careers </p>
                        <p className='pl-2'> ByteDance</p>
                    </div>
                    <div className='d-flex flex-wrap justify-content-between'>
                        <p className='pl-2'>TikTok for Good</p>
                        <p className='pl-2'>Advertise</p>
                        <p className='pl-2'>Developers</p>
                        <p className='pl-2'>Transparency</p>
                        <p className='pl-2'>TikTok Rewards</p>
                    </div>
                    <div className='d-flex flex-wrap justify-content-between'>
                        <p className='pl-2'>Safety</p>
                        <p className='pl-2'>Terms</p>
                        <p className='pl-2'>Privacy</p>
                        <p className='pl-2'>Help,</p>
                        <p className='pl-2'>Creator Portal</p>
                        <p className='pl-2'> Community Guidelines</p>
                    </div>
                    <div>© 2022 TikTok</div>
                </small>
            </div>
        </React.Fragment>
    )
}
export default LayoutLeft