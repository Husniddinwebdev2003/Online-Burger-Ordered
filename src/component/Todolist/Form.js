import React, {useState} from 'react';
import { useRef } from 'react';
import { FaPlusSquare } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/action";

export default function Form({status}) {
    const dispatch = useDispatch();

    const inputRef = useRef(null);
    const formRef = useRef(null);
    const [err, setErr] = useState(false);

    const submitHendler = (e) => {
        e.preventDefault();
        if(inputRef.current.value !== ""){
            setErr(false);
            dispatch(addTodo({
                    id: (Math.random() * 1000),
                    text: inputRef.current.value,
                    completed: false,
                    delete1: false
                }));
            formRef.current.reset();
        } else {
            setErr(true);
            setTimeout(() => {
                setErr(false);
            }, 2000);
        }
    }

    const statusHandler = (e) => {
        status(e.target.value);
    }
    
    return (
        <form onSubmit={submitHendler} ref={formRef}>
            <div className="todoForm">
                <input ref={inputRef} type="text" />
                <button><FaPlusSquare /></button>
            </div>

            <select className="todoSelect" onChange={statusHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>

            {err ? 
                <div className='err'>
                    <p>Iltmos biror nma yozing</p>
                </div>
                :
                <></>
            }
        </form>
    )
}
