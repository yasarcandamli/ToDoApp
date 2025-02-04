import { useContext } from "react";

import ToDoContext from "../context/ToDoContext";

let filtered = "tet";

function TodoList() {
    const { todos, setTodos, activeFilter } = useContext(ToDoContext);

    const onDestroy = (id) =>
        setTodos(todos.filter((todo) => todo.id !== id && todo));

    const onChange = (id) => {
        const updatedData = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );

        setTodos(updatedData);
    };

    filtered = todos;

    if (activeFilter !== "all") {
        filtered = todos.filter((todo) =>
            activeFilter === "active"
                ? todo.completed === false && todo
                : todo.completed === true && todo
        );
    }

    return (
        <ul className="todo-list">
            {filtered.map((todo, index) => (
                <li key={index} className={todo.completed ? "completed" : ""}>
                    <div className="view">
                        <input
                            property="done"
                            className="toggle"
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => onChange(todo.id)}
                        />
                        <label property="text">{todo.text}</label>
                        <button
                            className="destroy"
                            onClick={() => onDestroy(todo.id)}
                        ></button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;