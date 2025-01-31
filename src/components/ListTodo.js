import React , {useEffect, useState} from "react";

import EditTodo from "./EditTodo";

const ListTodo = () => {

    const [todos, setTodos] = useState([]);


    // Delete Function
    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5001/todos/${id}`,
                {
                    method: "DELETE"
                }
            );
            
            setTodos(todos.filter(todo => todo.todo_id !== id));

        } catch (error) {
            console.error(error.message);
        }

        // window.location = "/"
    };

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5001/todos");
            const jsonData = await response.json()
            setTodos(jsonData)
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        getTodos();
    },[]);
    // console.log(todos)


    return (
        <>
        <table className="table mt-5 text-center">
            <thead>
                <tr>
                <th scope="col">Description</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo => (
                    <tr key = {todo.todo_id}>
                        <td>{todo.description}</td>
                        <td>
                            <EditTodo todo={todo}  />
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </>
    )
};

export default ListTodo;