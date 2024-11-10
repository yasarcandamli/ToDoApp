import { createContext, useState } from "react";

const ToDoContext = createContext(null);

export const TodoProvider = ({ children }) => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Test1",
            completed: false,
        },
    ]);

    const values = {
        todos,
        setTodos,
        activeFilter,
        setActiveFilter,
    };

    return <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>;
};

export default ToDoContext;