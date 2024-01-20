import { useState } from "react";
import {useTodo} from '../contexts/index'

function TodoForm() {

    const [todo, setTodo] = useState('');
    const { addTodo } = useTodo();//this method is available in the global context and using the useTodo custom hook we are using the context

    //This function first checks if the todo value has some value or not
    //=> if it has some value the we are using the global method of addTodo and adding the current todo to the arrays of todos
    //=> after this we are seting the value of the input box to empty
    const add = (e) => {
        e.preventDefault();
        if (!todo) return
        
        addTodo({ todo, completed: false });
        setTodo("");
    }

    return (
        <form className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}//This is wiring the todo variable with the value in the input field
                onChange={(e) => setTodo(e.target.value)}//This tells the input field to set the value of the todo variable to the new value whenever a change occurs in the input field.
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

