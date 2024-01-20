import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todo: "todo message will be stored here",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
});

//Inside the createContext function we need to pass the global object holding all the variables and function which will be made available everwhere when wrapped inside the contextProvider.
//Also the methods are not defined here and will be defined where they'll be used with the same name and therefore it will behave in the same manner.

//This is a custom hook which returns a context when called in out case it'll give us the global context which we have declared above.
export const useTodo = () => {
    return useContext(TodoContext);
}

//This is the context provider and this can also be done where we are using the context. 
export const TodoProvider = TodoContext.Provider;