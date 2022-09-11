import { GET_VIDEO_SUCCESS } from "../const/video"

const initialValue = {
    login: false,
    videos: []
}

const rootReducer = (state = initialValue, action) => {
    switch (action.type) {
        case GET_VIDEO_SUCCESS: {
            return {
                ...state,
                videos: action.videos
            }
        }
        default: {
            return state
        }
    }
}
export default rootReducer