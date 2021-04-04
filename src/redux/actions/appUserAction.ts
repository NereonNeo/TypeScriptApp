import axios from "axios"
import { Dispatch } from "react"
import { UserAction, UserActionTypes } from "../../types/user"

export function fetchUsers() {
    return async (dispatch:Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.FETCH_USERS });
            await axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response =>  dispatch({type:UserActionTypes.FETCH_USERS_SUCCESS,payload:response.data}))
        } catch (error) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: error.toString()
            });
        }
    }
}