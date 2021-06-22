const initialState = {
    todos : ["demo"]
};

 const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_TODO":
            
            const { id, data } = action.payload;
            return {
                ...state,
                todos: [...state.todos,
                    {
                        id: id,
                        data:data
                    }]
            }
        
        case "DELETE_TODO":
            
            const newList = state.todos.filter((elem) => elem.id != action.id)
            return {
                ...state,
                todos: newList
            }

        case "REMOVE_TODO": return {
                  ...state,
                todos: []
         }
        
    default:
        return state
    }
}
export default rootReducer