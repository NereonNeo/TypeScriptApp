import axios from "axios"
import {Dispatch} from "react"
import {todoAction, todoActionTypes} from "../../types/todo";

export function fetchTodo(page = 1,limit = 10) {
    return async (dispatch:Dispatch<todoAction>) => {
        try {
            dispatch({ type: todoActionTypes.FETCH_TODOS });
            await axios.get('https://jsonplaceholder.typicode.com/todos',{
                params: {_page:page,_limit:limit}
            })
                .then(response =>  dispatch({type:todoActionTypes.FETCH_TODOS_SUCCESS,payload:response.data}))
        } catch (error) {
            dispatch({
                type: todoActionTypes.FETCH_TODOS_ERROR,
                payload: 'Произошда ошибка при загрузке дел'
            });
        }
    }
}
export function setTodoPage(page:number):todoAction {
    return {type:todoActionTypes.SET_TODOS_PAGE,payload:page}
}