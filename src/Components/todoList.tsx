import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchTodo,setTodoPage} from "../redux/actions/todosActions";

const MyComponent:React.FC = () => {
   const {page,loading,limit,error,todos} = useTypedSelector(state => state.todo);
    const dispatch = useDispatch();
    const pages = [1,2,3,4,5,6,7,8]
    useEffect(() => {
        dispatch(fetchTodo(page,limit));
    }, [page]);
    if (loading) {
        return (
            <div className="">
                <h1>Загрузка данных</h1>;
            </div>
        );
    }
    if (error) {
        return (
            <div className="">
                <h1>Ошибка :{error}</h1>;
            </div>
        );
    }
    return (
        <div>
            {todos.map((todo,index)=>{
                return(
                    <div key={todo.id}>

                        <p>
                        <span>№{todo.id}</span>    {todo.title}
                        </p>
                    </div>
                )
            })}
            <div style={{display:"flex"}}>
                {pages.map((p,index) =>{
                    return(
                        <div
                            style={{border:p === page ? '2px solid green' : '1px solid gray',padding:10,cursor:"pointer"}}
                            key={index}
                            onClick={() => dispatch(setTodoPage(p)) }
                        >
                            {p}
                        </div>
                    )
                })}
            </div>

        </div>
    );
};

export default MyComponent;
