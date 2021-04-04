import React, {useEffect, useState} from 'react';
import UserList from './Components/UserList';
import MyComponent from "./Components/todoList";
import {useDispatch} from "react-redux";
import {filterCity} from "./redux/actions/cityAction";
import {useTypedSelector} from "./hooks/useTypedSelector";

const App = () => {
    const {city} = useTypedSelector(state => state.city )
    const dispatch = useDispatch()

    const [state,setState] = useState('');

    useEffect(()=>{
        dispatch(filterCity(''))
    },[])

    function handleInput(e:React.ChangeEvent<HTMLInputElement>):void{
        setState(e.target.value)
        dispatch(filterCity(e.target.value))

    }
    console.log(city)

  return (
    <div style={{padding:20}}>
        <div className="input">
            <input type="text" value={state} onChange={handleInput}/>
            {
                city.map((elem,index) => {
                    return(
                        <div key={index}>
                            <p>{elem}</p>
                        </div>
                    )
                })
            }
        </div>
      <h1>UserList</h1>
      <UserList />
      <hr/>
      <h1>Todos</h1>
      <MyComponent/>
    </div>
  );
};

export default App;
