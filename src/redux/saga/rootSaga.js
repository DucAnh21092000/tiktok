import { call, put, takeEvery, takeLatest,select } from "@redux-saga/core/effects";
import { LOGIN_GOOGLE_ACTION, LOGIN_GOOGLE_COMPLETE, LOGIN_GOOGLE_ERROR } from "../const/login";
import { ADD_TYM_SUCCESS, GET_VIDEO_Error, GET_VIDEO_SUCCESS } from "../const/video";
import getAllVideo, { getVideoById } from "../service/getVideo";
import loginGoogle, { handleCredentialResponse } from "../service/loginGoogle";


function* handleGetAllVideos() {
    try {
        const videos = yield call(getAllVideo)
        yield put({ type: GET_VIDEO_SUCCESS, videos })
    } catch (error) {
        yield put({ type: GET_VIDEO_Error })
    }
}


function* handleGetVideoById(action) {
    try {
        const videos = yield call(getVideoById, action.payload.id)
        yield put({ type: GET_VIDEO_SUCCESS, videos })
    } catch (error) {
        yield put({ type: GET_VIDEO_Error })
    }
}

function* handleLoginGoogle(data) {
    try {       
        yield put({ type: LOGIN_GOOGLE_COMPLETE, data })
    } catch (error) {
        console.log(error)
        yield put({ type: LOGIN_GOOGLE_ERROR })
    }
}

function* mySaga() {
    yield takeEvery("GET_ALL_VIDEO", handleGetAllVideos)
    yield takeEvery("USER_GET_VIDEO_BY_ID", handleGetVideoById)
    yield takeEvery(LOGIN_GOOGLE_ACTION,handleLoginGoogle)
}
export default mySaga