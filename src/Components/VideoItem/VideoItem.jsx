import React from 'react'
import { useState } from 'react'
import { CommentOutlined, HeartFilled, ShareAltOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { ADD_TYM } from '../../redux/const/video'
import axios from 'axios'

export default function VideoItem({ index, arr, setSound }) {
    const [color, setColor] = useState('black')
    const dispatch = useDispatch()
    const handleAdd = async (arr) => {
        await axios.put('https://ducanh-store.herokuapp.com/api/videos/' + arr.id, {
            ...arr,
            comments: arr.comments + 1,
            isLove: true
        })

        if (arr.isLove) {
            setColor('blue')
        }
    }

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
    const showChange = (value, index) => {
        let video = document.querySelectorAll('.item__video')
        video[index].setAttribute('data-sound', value)
        setSound(value)
    }
    return (
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
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <div className='result__btn'>
                            <HeartFilled style={{ fontSize: "21px", color: color }} onClick={() => handleAdd(arr)} />
                        </div>
                        <small className='number'> {arr.love} </small> </div>
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <div className='result__btn'>
                            <CommentOutlined style={{ fontSize: "21px" }} />
                        </div>
                        <small className='number'> {arr.comments}</small></div>
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <div className='result__btn'>
                            <ShareAltOutlined style={{ fontSize: "21px" }} />
                        </div>
                        <small className='number'> {arr.share} </small>
                    </div>
                </div>
            </div>
        </div>
    )
}
