import React from 'react'
import Header from '../../Components/Header/Header'
import './LiveLayout.scss'
import LayoutLeft from '../LayoutLeft/LayoutLeft'
import { useEffect, useState } from 'react'
import { TeamOutlined } from '@ant-design/icons'
import VideoSuggest from '../../Components/videoSuggest/VideoSuggest'
const axios = require('axios').default
axios.defaults.baseURL = `https://ducanh-store.herokuapp.com/api`


export default function LiveLayout(props) {
  document.title = `TikTok | LivePage`
  
  const [listStream, setListStream] = useState([])
  const [suggest, setSuggest] = useState([])
  const [hostLists, setHostLists] = useState([])
  const [hostList, setHostList] = useState([])
  const [totalHost, setTotalHost] = useState(0)
  const [firstVideo, setFirstVideo] = useState([])
  const [state, setState] = useState({
    start: 0,
    numberHost: 0,
    end: 4,
    idVideo: 1
  })
  useEffect(() => {
    async function getHosts() {
      await axios.get(`/live?_start=0&_end=${state.numberHost + 5}`)
        .then(data => {
          setHostList(data.data.data)
          setTotalHost(data.data.pagination._total)
          return data
        })
    }
    getHosts()
  }, [state.numberHost])

  useEffect(() => {
    async function getHosts() {
      await axios.get(`/live?_start=${state.start}&_end=${state.end}`)
        .then(data => {
          setSuggest(data.data.data)
          return data
        })
    }
    getHosts()
  }, [state.start])

  useEffect(() => {
    async function getAllHosts() {
      await axios.get(`/live`)
        .then(data => {
          setListStream(data.data)
          return data
        })
    }
    getAllHosts()
  }, [])

  useEffect(() => {
    async function getAllHosts() {
      await axios.get(`/live/${(state.idVideo)}`)
        .then(data => {
          setFirstVideo([data.data])
          setHostLists(data.data)
          return data
        })
    }
    getAllHosts()
  }, [state.idVideo])

  useEffect(() => {
    let bgVideo = document.querySelectorAll('.bgVideo')
    let video = document.querySelectorAll('.video__stream')
    video.forEach ( (arr,index) => {
      arr.play()
    })
    bgVideo.forEach(arr => {
      arr.onmouseover = () => {
     
        let promise = video.play()
        if (promise !== undefined) {
          promise.then(_ => {
            // Autoplay started!
          }).catch(error => {
            // Autoplay was prevented.
            // Show a "Play" button so that user can start playback.
          });
        }
      }
      arr.onmouseout = () => {
        let video = document.querySelector('.video__stream')
        video.pause()
      }
    })
  })

  const changeState = (value) => {
    if (value.type === 'setNumberHost') {
      setState({
        ...state,
        numberHost: value.value,
      })
    }
  }

  const setVideoStream = (value) => {
    setState({
      ...state,
      idVideo: value,
      start: value - 1,
      end: value + 3
    })
  }

  return (
    <div className='live'>

      {/* 
    =====================================================================================================
          New Header
    =====================================================================================================
    */}
      <div className='live__header border__bottom'>
        <Header component={<div className='btn__getcoin d-flex justify-content-center align-items-center '
          style={{ border: '1px solid black', width: '137.5px', height: '39px', borderRadius: ' 5px' }} >
          <span class="tiktok-o3tw52-SpanLogoContainerInner equhrky2">
            <svg width="22.5" height="22.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.0002 2.49992C5.85803 2.49992 2.50016 5.85778 2.50016 9.99992C2.50016 14.1421 5.85803 17.4999
             10.0002 17.4999C14.1423 17.4999 17.5002 14.1421 17.5002 9.99992C17.5002 5.85778 14.1423 2.49992 10.0002 
             2.49992ZM0.833496 9.99992C0.833496 4.93731 4.93755 0.833252 10.0002 0.833252C15.0628 0.833252 19.1668 
             4.93731 19.1668 9.99992C19.1668 15.0625 15.0628 19.1666 10.0002 19.1666C4.93755 19.1666 0.833496 15.0625 
             0.833496 9.99992Z">

              </path>
              <path fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.141 4.99992C12.141 6.27424 13.2115 7.3484 14.5835 7.3484V9.01507C13.6736 9.01507 12.8267 8.72389 
            12.141 8.22854V11.4961C12.141 13.2238 10.7059 14.5833 8.98723 14.5833C7.26852 14.5833 5.8335 13.2238 5.8335
             11.4961C5.8335 9.76845 7.26852 8.40901 8.98723 8.40901V10.0757C8.1429 10.0757 7.50016 10.7343 7.50016
              11.4961C7.50016 12.2579 8.1429 12.9166 8.98723 12.9166C9.83156 12.9166 10.4743 12.2579 10.4743 
              11.4961V4.99992H12.141Z">
              </path>
            </svg>
          </span>
          <span className='ml-2 getcoin' style={{ fontWeight: 600 }}>
            Get coins
          </span>
        </div>} />
      </div>

      {/*
      ===================================================================================================
       Layout Left 
      ===================================================================================================
       */}
      <div className='defaultLayout' style={{ padding: '0px 20px' }}>
        <div className='defaultLayout__content liveLayout__content'>
          <div className='defaultLayout__content-left liveLayout__content-left' >
            <LayoutLeft
              hostList={hostList}
              state={state}
              callback={changeState}
              totalHost={totalHost}
              discover={false}

            />
          </div>
          <div className='defaultLayout__content-right liveLayout__content-right'>
            <div className='live__video'>
              {firstVideo.map((arr, index) => {
                return (
                  <div key={index} className='liveLayout' style={{ backgroundImage: `url(${arr.img})` }}>
                    <div key={index} className={'bgVideo'}>
                      <div className='main__video'>
                        <video src={arr.src} className='video__stream'>
                        </video>
                      </div>
                      <div className='liveContent'>
                        <div className='liveContent__info '>
                          <div className='avatar'>
                            <div className='bg-avatar' style={{ backgroundImage: `url(${arr.img})`, width: '41px', height: '41px' }}></div>
                          </div>
                          <div className='liveContent__info-name text-white ml-3'>
                            <b> {arr.name}</b>
                            <small>{arr.author}</small>
                          </div>
                        </div>
                        <div className='liveContent__menu text-white'>
                          <TeamOutlined /> <span className='ml-2'>{arr.people}</span>
                          <button className='btn__live'> LIVE</button>
                        </div>
                      </div>
                    </div>
                    <div style={{ height: '448px' }} className='d-flex flex-column align-items-center'>
                      <VideoSuggest arr={suggest} callback={setVideoStream} />
                    </div>
                  </div>
                )
              })}
            </div>
            <div className='mt-3'>
              <div>
                <b className='' style={{ fontSize: '1.1rem' }}>Recommended LIVE videos</b>
              </div>
              <div className='d-flex flex-wrap justify-content-between'>
                {listStream.map((arr, index) => (
                  <div className='recommend__video-stream' onClick={() => setVideoStream(arr.id)}>
                    <div>
                      <video src={arr.src} className='video'>
                      </video>
                      <div className='d-flex'>
                        <div className='avatar'>
                          <div className='bg-avatar' style={{ backgroundImage: `url(${arr.img})` }}></div>
                        </div>
                        <div className='ml-2 mb-3'>
                          <div style={{ fontWeight: 500 }}>SadBoy Thái Bình on stream</div>
                          <div>{arr.name}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
