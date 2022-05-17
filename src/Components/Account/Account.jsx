import React from 'react'
import { memo, useCallback } from 'react'

function Account(props) {

    return (
        <>
            {
                props.arr.map((arr, index) => {
                    let src = arr.avatar
                    if(arr.img){
                        src = arr.img
                    }
                    return (
                        <a href={arr.src} key={index} className='suggested__item pt-2 pb-2'>
                            <div className='suggested__avatar' style={{ backgroundImage: `url(${src})` }}>
                            </div>
                            <div className='d-flex align-items-center flex-column pl-2'>
                                <div className='suggested__name'>
                                    {arr.name}
                                </div>
                                <small className='suggested__author'>{arr.author}</small>

                            </div>
                            {
                                arr.people && <div className='number__people'>
                                    {arr.people}
                                </div>
                            }
                        </a>
                    )
            })
            }
        </>
    )
}

export default memo(Account)