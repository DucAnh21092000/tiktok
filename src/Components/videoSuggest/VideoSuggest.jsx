import React from 'react'
import './VideoSuggest.scss'

export default function VideoSuggest(props) {
    const arr = props.arr
    const setVideo = (value) => {
        props.callback(value)
    }
    return (
        <div className='d-flex flex-column justify-content-between h-100'>
            {arr.map((arr, index) => (
                <div key={index} className='d-flex justify-content-center position-relative' onClick={() => setVideo(arr.id)}>
                    <img className='bg__video' src={arr.img}></img>
                    <div className='small__video'>
                        <video src={arr.src}></video>
                    </div>
                    <div className='text-white live__content'>
                        SadBoy
                    </div>
                </div>
            ))}
        </div>
    )
}
