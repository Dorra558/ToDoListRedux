const ADD_TODO = "ADD_TODO"
export const addTodos = (data) => ({
    type: ADD_TODO,
    payload: {
        id: new Date().getTime().toString(),
        data:data
    }

})

export const deleteTodo = (id) => ({
    type: "DELETE_TODO",
    id
})

export const removeTodo = () => ({
    type: "REMOVE_TODO"
})
