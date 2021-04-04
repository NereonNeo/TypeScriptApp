import {todoAction, todoActionTypes, todoState} from "../../types/todo";
const initialState:todoState = {
        todos:[],
        error: null,
        page:1,
        loading:false,
        limit: 10
}
export function todoReducer(state=initialState,action:todoAction):todoState {
        switch(action.type){
                case todoActionTypes.FETCH_TODOS:
                        return {
                             ...state,
                              loading:true
                        }
                case todoActionTypes.FETCH_TODOS_SUCCESS:
                        return {
                                ...state,
                                loading:false,
                                // todos:state.todos.concat(action.payload)
                                todos:action.payload
                        }
                case todoActionTypes.FETCH_TODOS_ERROR:
                        return {
                                ...state,
                                error:action.payload
                        }
                case todoActionTypes.SET_TODOS_PAGE:
                        return {
                                ...state,
                                page: action.payload
                        }
                default: return state
        }

}