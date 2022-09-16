import { ADD_TYM_SUCCESS, GET_VIDEO_SUCCESS } from "../const/video"

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
        case ADD_TYM_SUCCESS: { 
            console.log(state)
            return state        
        }
        default: {
            return state
        }
    }
}
export default rootReducer