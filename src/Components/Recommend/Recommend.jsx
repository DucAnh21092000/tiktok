import React from 'react'
import { useEffect } from 'react'
import './Recommend.scss'

export default function Recommend(props) {

    useEffect(() => {
      let video = document.querySelectorAll('.recommend-card__video')
      video.forEach( (arr,index) => {
          arr.onmouseover = () => {
              arr.play()
          }
          arr.onmouseout = () => {
              arr.pause()
              arr.currentTime =0
          }
      })
    }, [])

    return (
        <div className='recommend-card'>
            <video loop data-sound={1} muted={true} className={'item__video recommend-card__video'} src={props.src}>
                <source src={props.src} type={'video/mp4'} ></source>
            </video>
            <div className='recommend-card__info'>
                <div className='avatar' style={{ backgroundImage: `url(${props.img})`, width: '40px', height: '40px' }}></div>
                <div className='recommend-card__name'>
                    {props.name}
                </div>
                <div className='recommend-card__author'>
                    <small>{props.author} </small>
                </div>
                <button className='btn__follow float-right '> Follow</button>
            </div>
        </div>
    )
}
