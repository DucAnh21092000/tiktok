import React, { useEffect } from 'react'
import { useState, useRef, useMemo } from 'react'
import './HomePage.scss'
import { Hagtag, Music } from '../../Components/Hagtag'
import ToggleSound from '../../utils/function/ToggleSound/ToggleSound'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import getAllVideo from '../../redux/service/getVideo'
import VideoItem from '../../Components/VideoItem/VideoItem'
import Avatar from '../../Components/Avatar/Avatar'
const axios = require('axios').default
axios.defaults.baseURL = `https://ducanh-store.herokuapp.com/api`


function HomePages() {
  const dispatch = useDispatch()
  const [videos, setVideos] = useState([])
  const [sound, setSound] = useState(1)
  const options = {
    threshold: 0.6
  };

  useEffect(() => {
    document.title = `TikTok | HomePage `
    getAllVideo()
      .then(rs => setVideos(rs))
  }, [])
  
  useEffect(() => {

    let sections = document.querySelectorAll('.item__video');
    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (entry.target.className === 'item__video') {
          if (entry.isIntersecting) {
            let soundValue = sections[entry.target.id].getAttribute('data-sound')
            if (soundValue == 0) {
              ToggleSound('muted', entry.target.id, 'fa-volume-up', 'fa-volume-mute')
            }
            else {
              ToggleSound('unMuted', entry.target.id, 'fa-volume-up', 'fa-volume-mute')
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
                    <Avatar src={arr.img} />
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
                        <Hagtag content={arr} />
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
              <VideoItem setSound={setSound} arr={arr} index={index} />
            </div>
          )
        })}
      </div>
    </div>

  )
}

export default HomePages