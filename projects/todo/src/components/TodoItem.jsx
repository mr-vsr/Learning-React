import { useState } from "react";
import { useTodo } from '../contexts/index'


function TodoItem({ todo }) {

    const [isTodoEditable, setIsTodoEditable] = useState(false)//This is setting up to handle all the changes if a user wants to edit any of the todo
    const [todoMsg, setTodoMsg] = useState(todo.todo)//This is setting up the new todo message if the user changes any of the todo.
    const { updateTodo, deleteTodo, toggleComplete } = useTodo()//Using the useTodo method we are calling the context of all these functions and we'll use it here.

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })//first we're identifying the todo to be updated and then we're updating the todo object with the prevous value and then overriding the todo key with the new value.
        setIsTodoEditable(false)//Now here we switch from editable to not editable 
    }
    //This function makes sure to mark a todo as completed or uncomplete
    const toggleCompleted = () => {
        toggleComplete(todo.id)//This comes from the TodoContext
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
