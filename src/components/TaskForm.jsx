import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";

export default function TaskForm() {
    const [task, setTask] = useState({ title: "", description: "" });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask({ ...task, id: uuid() }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                type="text"
                placeholder="title"
                onChange={handleChange}
            />
            <textarea
                name="description"
                placeholder="description"
                onChange={handleChange}
            ></textarea>
            <button>Guardar</button>
        </form>
    );
}
