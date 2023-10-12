import React, { Fragment, useState } from "react";

const InputTodo = () => {

    const [description , setDescription] = useState("hello")

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { description };
            //tambah await sebelum fetch
            const response = await fetch("http://localhost:5300/todos", {
                method : "POST",
                headers : { "Content-Type": "application/json" },
                body : JSON.stringify(body)
            });
            console.log(response);

        } catch (err) {
            console.error(err.meseage);
        }
    }
    return (
        <Fragment>
            <h1 className="text-center mt-5">Todo Degabalagodai</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input 
                    type="text" className="form-control" 
                    value={description} 
                    onChange={e => setDescription(e.target.value)}
                />
                <button className="btn btn-success ml-3">add</button>
            </form>
        </Fragment>
    );
};

export default InputTodo;