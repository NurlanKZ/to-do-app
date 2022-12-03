import { useState } from "react";
import PlusMath from "../../assets/PlusMath.png";
import AddWindow from "./AddWindow";
import "./style.css";

export default function NewTask(props){
    const [showMenu, toggleMenu] = useState(0);

    return (
        
        <div className="newTask">
            <button className="plus" onClick={()=> toggleMenu(!showMenu)}>
                <img src={PlusMath} alt="plusSign"/>
            </button>
            {showMenu ? <>
                    <div>
                        <AddWindow newTaskData={props.newTaskData} setNewTaskData={props.setNewTaskData}/>
                    </div>
                </> : ''}
        </div>
    )
}