import React from 'react'
import Header from '../../Components/Header/Header'
import RightLayout from '../../Components/Right/RightLayout'
import LayoutLeft from '../LayoutLeft/LayoutLeft'
import './DefaultLayout.scss'
import { useState, useEffect } from 'react'
const axios = require('axios').default


axios.defaults.baseURL = `https://ducanh-store.herokuapp.com/api`
export default function DefaultLayout(props) {
  const [totalSuggest, setTotalSuggest] = useState(0)
  const [totalFollow, setTotalFollow] = useState(0)
  const [state, setState] = useState({
    numberFollow: 0,
    numberSuggest: 0
  })
  const [followList, setFollowList] = useState([])
  const [suggestList, setSuggestList] = useState([])

  useEffect(() => {
    async function getSuggests() {
      await axios.get(`/suggests?_start=0&_end=${state.numberSuggest + 5}`)
        .then(data => {
          setSuggestList(data.data.data)
          setTotalSuggest(data.data.pagination._total)
          return data
        })
    }
    getSuggests()
  }, [state.numberSuggest])

  useEffect(() => {
    async function getFollowings() {
      await axios.get(`/followings?_start=0&_end=${state.numberFollow + 5}`)
        .then(data => {
          setFollowList(data.data.data)
          setTotalFollow(data.data.pagination._total)
          return data
        })
    }
    getFollowings()
    return () => {

    }
  }, [state.numberFollow])

  const changeState = (value) => {
    if (value.type === 'setNumberSuggest') {
      setState({
        ...state,
        numberSuggest: value.value
      })
    }
    else if (value.type === 'setNumberFollow') {
      setState({
        ...state,
        numberFollow: value.value
      })
    }
  }
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
            <LayoutLeft
              followList={followList}
              suggestList={suggestList}
              state={state}
              totalFollow={totalFollow}
              totalSuggest={totalSuggest}
              callback={changeState}
              discover={true}
            />
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
