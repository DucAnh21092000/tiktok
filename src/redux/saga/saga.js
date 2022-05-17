import { call, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { setIndex } from '../actions/setIndex'
import { getVideos, setVideo } from '../actions/setVideos'
import { loadVideos } from '../apis/getVideos'
import { INCREASE_FOLLOWING, INCREASE_SUGGEST, GET_VIDEOS, SET_VIDEOS } from '../const/const'

function* watchIncreaseSuggest() {
    yield takeLatest(INCREASE_FOLLOWING)
}

function* watchActionGetVideos() {
    yield takeLatest(GET_VIDEOS, handleGetVideos)
}


function* handleGetVideos() {
    console.log("nonn")
    const videos = yield call(loadVideos)
    console.log(videos)
    yield put(setVideo(videos))
}
function* watchIncreaseFollowing() {
    yield take(INCREASE_SUGGEST)
    console.log("kk")
}
function* mySaga() {
    yield fork(watchActionGetVideos)
    yield fork(setIndex)
}

export default mySaga