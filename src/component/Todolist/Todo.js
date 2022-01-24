import React, { useState, useEffect }from 'react';
import Form from './Form';
import TodoList from './TodoList';
import "./Todo.css";
import { getData } from "../../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";


export default function Todo() {
    const data = useSelector(store => store.data.todo);
    const dispatch = useDispatch();

    const [status, setStatus] = useState();

    useEffect(() => { 
        localGet();
    }, []);
    
    const localSave = () => {
        localStorage.setItem("todos", JSON.stringify(data))
    }

    const localGet = () => {
        if(localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            dispatch(getData(todoLocal));
        }
    }

    useEffect(() => {
        localSave();
    }, [data]);
     
    return (
        <>
            <header>
                <h1>Ed's Todo List</h1>
            </header> 
            <Form status={setStatus} />
            <TodoList status={status} />
        </>
    )
}
