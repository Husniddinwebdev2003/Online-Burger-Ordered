import { actiontypes } from "../actiontypes/actiontypes";

const initalStore = {
    todo: [],
     filter: []
}
const todoReducer = (store = initalStore, action) => {
    switch(action.type) {
        case actiontypes.GETDATA: 
            return {todo: [...action.payload]};
        case actiontypes.ADD:
            return {
                todo: [
                    ...store.todo,
                    action.payload
                    ]
                };
        case actiontypes.DELETE:
            return {todo: [...action.payload]};
        case actiontypes.COMPLETED:
            return {todo: [...action.payload]};
        default:
            return store;
    }
}

export default todoReducer;
