import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Recommend from '../../Components/Recommend/Recommend'
const axios = require('axios').default

axios.defaults.baseURL = `https://ducanh-store.herokuapp.com/api`

export default function Following() {
  const [videos, setVideos] = useState([]
  )
  useEffect(() => {
    document.title = `TikTok | HomePage `
    async function getVideos() {
      await axios.get('/suggest-follows')
        .then(rs => setVideos(rs.data))
    }
    getVideos()
  }, [])

  return (
    <div className='app'>
      <div className='menu__items recommend'>

        {videos.map((arr, index) => (
          <div key={index} className={'menu__item '}>
             <Recommend name={arr.name} src={arr.src} author={arr.author} img={arr.img}/>
          </div>
        ))}

      </div>
    </div>
  )
}
