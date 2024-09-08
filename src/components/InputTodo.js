import React, {useState} from "react";

const InputTodo = () => {

    const [desc, setDesc] = useState("")

    const onSubmitForm = async (e) => {
        e.preventDefault()
        try {
            const body = {desc};
            const response = await fetch("http://localhost:5001/todos",
               { 
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                }
            );

            console.log(response)
            response.json()
        } catch (error) {
            console.error(error.message)
        }
    }
    return <>
    <h1 className="text-center mt-5">P.E.R.N. Todo List</h1>
    <form className="d-flex mt-5" onSubmit= {onSubmitForm}>
        <input type="text" className="form-control" value = {desc} onChange = {e => {
            setDesc(e.target.value)
        }}/>
        <button className="btn btn-success">Add</button>
    </form>
    </>
};

export default InputTodo;