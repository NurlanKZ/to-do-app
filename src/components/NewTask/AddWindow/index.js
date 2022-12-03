import { useState } from "react";
import "./style.css";

export default function AddWindow(props) {
    const [content, setContent] = useState("");

    const onChangeTextInput = (e) => {
        setContent(e.target.value);
    }

    const addTask = () => {
        props.setNewTaskData(content);
        setContent("");
    }

    return(
        <div className="window" style={{left: window.innerWidth-475}}>
            <p className="heading">Add New To Do</p>
            <div className="input">
                <input onChange={onChangeTextInput} value={content} placeholder="Your text"/>
            </div>
            <button onClick={addTask}>Add</button>
        </div>
    )
}