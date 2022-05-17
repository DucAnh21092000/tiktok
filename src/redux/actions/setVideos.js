import { GET_VIDEOS } from "../const/const"
export const SET_VIDEOS = 'set_videos'

export const setVideo = (videos) => ({
    type: SET_VIDEOS,
    payload: videos,
});
export const getVideos = () => ({
    type: GET_VIDEOS
})