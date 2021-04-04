import {cityAction, cityActionTypes, cityState} from "../../types/city";

const initialState:cityState = {
    city:[]
}

export const cityReducer = (state= initialState, action:cityAction):cityState => {
    switch (action.type) {
        case cityActionTypes.FILTER_CITY:
            return {
                ...state,
                city: action.payload
            }
        default:return state
    }
}