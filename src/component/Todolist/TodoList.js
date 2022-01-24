import React, {useState, useEffect} from 'react';
import { FaTrash, FaCheck } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, completed } from "../../redux/actions/action";

export default function TodoList({status}) {
    const data = useSelector(store => store.data.todo);
    const dispatch = useDispatch();

    const [filtredTodo, setFiltredTodo] = useState(data);

    const colpetedHendler = (todos) => {
        dispatch(completed(
            data.map(item => {
                if(item.id === todos.id) {
                    return {
                        ...item, completed: !todos.completed
                    }
                }
                return item;
            })
        ));
    }

    const deleteHendler = (todoId) => {
            dispatch(deleteTodo(data.map(item => {
                if(item.id === todoId) {
                    return{...item, delete1: true};
                }
                return item;
            })));
        setTimeout(() => {
            const newTodos = data.filter((item) => item.id !== todoId);
            dispatch(deleteTodo(newTodos));
        }, 300);
    }

    const filterHendler = () => {
         switch(status) {
            case "completed": 
                setFiltredTodo(data.filter(item => item.completed === true));
                break;
            case "uncompleted":
                setFiltredTodo(data.filter(item => item.completed === false));
                break;
            default:
                setFiltredTodo(data);
        }
    }

    useEffect(() => {
        filterHendler();
    });


    return (
        <div className="todoListContent">
            <ul>
                {filtredTodo.map((item,index) => {
                    return( <li key={index} className={`${(item.completed ? "completed" : null)} ${(item.delete1 ? "delete" : "")}`}>
                        <span>{item.text}</span>
                        <div className="todoBtn" >
                            <button onClick={() => colpetedHendler(item)}><FaCheck /></button>
                            <button onClick={() =>deleteHendler(item.id)}><FaTrash /></button>
                        </div>
                    </li>)
                })}
            </ul>
        </div>
    )
}
