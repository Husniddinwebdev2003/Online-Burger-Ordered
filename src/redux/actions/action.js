import { actiontypes } from "../actiontypes/actiontypes"

export const addTodo = (todo) => {
    return {
        type: actiontypes.ADD,
        payload: todo
    }
}

export const deleteTodo = (todos) => {
    return {
        type: actiontypes.DELETE,
        payload: todos
    }
}

export const completed = (todos) => {
    return {
        type: actiontypes.COMPLETED,
        payload: todos
    }
}

export const getData = (todos) => {
    return {
        type: actiontypes.GETDATA,
        payload: todos
    }
}