import React from 'react'

export default function Account(props) {
    const arr = props.arr
    const index = props.index
  return (
      <a href={arr.src} key={index} className='suggested__item pt-2 pb-2'>
          <div className='suggested__avatar' style={{ backgroundImage: `url(${arr.avatar})` }}>
          </div>
          <div className='d-flex align-items-center flex-column pl-2'>
              <div className='suggested__name'>
                  {arr.name}
              </div>
              <small className='suggested__author'>{arr.author}</small>
          </div>
      </a>
  )
}
