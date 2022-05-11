import React from 'react'
import Header from '../../Components/Header/Header'
import RightLayout from '../../Components/Right/RightLayout'
import LayoutLeft from '../LayoutLeft/LayoutLeft'
import './DefaultLayout.scss'

export default function DefaultLayout(props) {

  const Layout = props.children;

  return (
    <React.Fragment>
      <div className='defaultLayout border__bottom position-fixed'>
        <div className='defaultLayout__header'>
          <Header />
        </div>
      </div>
      <div className='defaultLayout'>
        <div className='defaultLayout__content'>
          <div className='defaultLayout__content-left'>
            <LayoutLeft />
          </div>
          <div className='defaultLayout__content-right'>
{Layout}
          </div>
        </div>     
      </div>
      <RightLayout />
    </React.Fragment>
  )
}
