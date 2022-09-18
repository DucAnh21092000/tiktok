import { LOGIN_GOOGLE_COMPLETE } from "../const/login"
import { ADD_TYM_SUCCESS, GET_VIDEO_SUCCESS } from "../const/video"

const initialValue = {
    login: false,
    videos: [],
    accountGoogle: []
}

const rootReducer = (state = initialValue, action) => {
    switch (action.type) {
        case GET_VIDEO_SUCCESS: {
            return {
                ...state,
                videos: action.videos
            }
        }
        case ADD_TYM_SUCCESS: {
            console.log(state)
            return state
        }
        case LOGIN_GOOGLE_COMPLETE: {
            console.log(state)
            return {
                ...state,
                accountGoogle: action.data.data,
                login: true,
                showFormLogin: false
            }
        }
        default: {
            console.log(state)
            return state
        }
    }
}
export default rootReducer