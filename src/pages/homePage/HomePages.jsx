import React, { useEffect } from 'react'
import { useState, useRef, useMemo } from 'react'
import './HomePage.scss'
import { CommentOutlined, HeartFilled, ShareAltOutlined } from '@ant-design/icons'
import { Music } from '../../Components/Hagtag'


const axios = require('axios').default
axios.defaults.baseURL = `https://ducanh-store.herokuapp.com/api`
function HomePages() {

  const [sound, SetSound] = useState(1)
  const options = {
    threshold: 0.6
  };

  useEffect(() => {

    let sections = document.querySelectorAll('.item__video');
    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (entry.target.className === 'item__video') {
          if (entry.isIntersecting) {
            let soundValue = sections[entry.target.id].getAttribute('data-sound')
            if (soundValue == 0) {
              togleSound('muted', entry.target.id)
            }
            else {
              togleSound('unMuted', entry.target.id)
            }
            let promise = entry.target.play()
            if (promise !== undefined) {
              promise.then(_ => {
                // Autoplay started!
              }).catch(error => {
                // Autoplay was prevented.
                // Show a "Play" button so that user can start playback.
              });
            }
            togleBtnPlay(entry.target.id)
            entry.target.volume = soundValue
          }
          else {
            entry.target.pause()
            togleBtnPause(entry.target.id)
          }
        }
      });
      return () => {
        sections = null
      }
    }, options);

    // loop 
    sections.forEach(section => {
      observer.observe(section);
    });
  })

  const togleBtnPlay = (index) => {
    let btnPlay = document.querySelectorAll('.fa-play')
    let btnPause = document.querySelectorAll('.fa-pause')
    btnPlay[index].classList.add('d-none')
    btnPause[index].classList.remove('d-none')
  }
  const togleBtnPause = (index) => {
    let btnPlay = document.querySelectorAll('.fa-play')
    btnPlay[index].classList.remove('d-none')
    let btnPause = document.querySelectorAll('.fa-pause')
    btnPause[index].classList.add('d-none')
  }
  const handlePlay = (index) => {
    togleBtnPlay(index)
    let video = document.querySelectorAll('.item__video')
    video[index].play()
  }
  const handlePause = (index) => {
    togleBtnPause(index)
    let video = document.querySelectorAll('.item__video')
    video[index].pause()
  }
  const togleSound = (state, index) => {
    let unMuted = document.querySelectorAll('.fa-volume-up')
    let muted = document.querySelectorAll('.fa-volume-mute')
    if (state == 'muted') {
      unMuted[index].classList.add('d-none')
      muted[index].classList.remove('d-none')
    }
    else {
      unMuted[index].classList.remove('d-none')
      muted[index].classList.add('d-none')
    }
  }

  const [videos, setVideos] = useState([])
  useEffect(() => {
    document.title = `TikTok | HomePage `
    async function getVideos() {
      await axios.get('/videos')
        .then(rs => setVideos(rs.data))
    }
    getVideos()
  }, [])

  const showChange = (value, index) => {
    let video = document.querySelectorAll('.item__video')
    video[index].setAttribute('data-sound', value)
    SetSound(value)
  }
  return (
    <div className='app'>
      <div className='app__items'>
        {videos.map((arr, index) => {
          return (
            <div className='app__item border__bottom' key={index}>

              {/* 
                  Header video start 
            */}
              <div className='app__item-header flex-column'>

                {/* avatar */}

                <div className='d-flex'>
                  <div className='item__header-avatar'>
                    <div className='avatar' style={{ backgroundImage: `url(${arr.img})`, height: '50px', width: '50px' }}></div>
                  </div>
                  <div className='d-flex flex-column info'>
                    <b>{arr.name}</b>
                    <div>
                      <small style={{ fontWeight: 600 }}>{arr.author}</small>
                    </div>
                    
                  </div>
                  <button className='btn__follow float-right'> Follow</button>
                </div>
                {/* Tên + nội dung, hagtag */}

                <div className='item__header-content'>
                  <div className='w-100' style={{ padding: '0 20px' }}>                
                   
                  </div>

                  <div className='author__main'>
                    <span className='author__content'>
                      {arr.content}
                      {arr.hagtag.map((arr, index) => (
                        <b key={index}>
                          #{arr + ' '}
                        </b>
                      ))}
                      <div><Music /><b> {arr.music}</b></div>
                    </span>
                  </div>
                </div>

              </div>

              {/* 
                  Header video end 
            */}

              {/* Video layout */}
              <div className='video__layout'>
                <div className='controls'>
                  <i class="fas fa-play" onClick={() => handlePlay(index)}></i>
                  <i class="fas fa-pause d-none" onClick={() => handlePause(index)}></i>
                </div>
                <div className='volumes'>
                  <i class="fas fa-volume-up volume "> </i>
                  <input className='range' onChange={(e) => showChange(e.target.value, index)} type='range' min={0} max={1} step={0.1}></input>
                  <i class="fas fa-volume-mute d-none"></i>
                </div>
                <div className='somethings'>
                  <video loop data-sound={1} id={index} className={'item__video'} src={arr.src}>
                    <source src={arr.src} type={'video/mp4'} ></source>
                  </video>
                  {/* Comment + Tym + Share */}
                  <div className='result'>
                    <div className='d-flex flex-column align-items-center justify-content-center'> <div className='result__btn'><HeartFilled style={{ fontSize: "21px" }} />      </div> <small className='number'> {arr.love} </small> </div>
                    <div className='d-flex flex-column align-items-center justify-content-center'> <div className='result__btn'><CommentOutlined style={{ fontSize: "21px" }} />  </div> <small className='number'> {arr.comments}</small></div>
                    <div className='d-flex flex-column align-items-center justify-content-center'> <div className='result__btn'><ShareAltOutlined style={{ fontSize: "21px" }} /> </div>  <small className='number'> {arr.share} </small> </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>

  )
}

export default HomePages