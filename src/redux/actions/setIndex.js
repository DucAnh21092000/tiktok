import { SET_MENU_ITEM } from "../const/const";

export const setIndex = (index) => (
    {
        type: SET_MENU_ITEM,
        payload: index
    }
)