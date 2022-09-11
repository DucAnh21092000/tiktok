import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { GET_VIDEO_Error, GET_VIDEO_SUCCESS } from "../const/video";
import getAllVideo, { getVideoById } from "../service/getVideo";


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

function* mySaga() {
    yield takeEvery("GET_ALL_VIDEO", handleGetAllVideos)
    yield takeEvery("USER_GET_VIDEO_BY_ID", handleGetVideoById)
}
export default mySaga