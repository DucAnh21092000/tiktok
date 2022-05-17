import { SET_VIDEOS, GET_VIDEOS, SET_MENU_ITEM } from "../const/const"

const initialState = {
     videos: [],
     followings: [],
     suggest: [],
     menuItem: 0
}
const reducer = (state = initialState, action) => {
     switch (action.type) {
          case SET_VIDEOS: {
               console.log(action)
               return {
                    ...state, videos: [action.payload]
               }
          }
          case SET_MENU_ITEM: {
               alert(state.menuItem)
               return {
                    ...state, menuItem: action.payload
               }

          }
          default: {
               return state;
          }
     }
}

export default reducer