export interface todoState {
    todos: any[];
    loading:boolean;
    error:null | string;
    page:number;
    limit:number
}
export enum todoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODOS_PAGE = 'SET_TODOS_PAGE'
}
interface fetchTodoAction {
    type: todoActionTypes.FETCH_TODOS,
}
interface fetchTodoSuccessAction {
    type: todoActionTypes.FETCH_TODOS_SUCCESS,
    payload: any[]
}
interface fetchTodoErrorAction {
    type: todoActionTypes.FETCH_TODOS_ERROR,
    payload:string
}
interface setTodoPage {
    type: todoActionTypes.SET_TODOS_PAGE,
    payload: number;
}

export type todoAction = fetchTodoAction | fetchTodoSuccessAction | fetchTodoErrorAction | setTodoPage