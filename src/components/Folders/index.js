import { useEffect, useState } from "react";
import NewTask from "../NewTask";
import ItemList from '../ItemList';
import "./style.css";

export default function Folders(){
    const [catId, setCatId] = useState([]);
    const [categories, setCategory] = useState([
        "To Do",
        "Done",
        "Trash"
    ]);
    const [componentMounted, setComponentMounted] = useState(false);
    const [newTaskData, setNewTaskData] = useState();
    const [prevTaskData, setPrevTaskData] = useState();

    useEffect(()=>{
        setCatId(0);
        setComponentMounted(true);
    }, [componentMounted])

    return(
        <div>
            <div className="menu">
                <div className="folders">
                    {catId===0 ? <button className="activeFolder" onClick={()=>(setCatId(0))}>{categories[0]}</button> 
                    : <button className="passiveFolder" onClick={()=>(setCatId(0))}>{categories[0]}</button>}
                    {catId===1 ? <button className="activeFolder" onClick={()=>(setCatId(1))}>{categories[1]}</button> 
                    : <button className="passiveFolder" onClick={()=>(setCatId(1))}>{categories[1]}</button>}
                    {catId===2 ? <button className="activeFolder" onClick={()=>(setCatId(2))}>{categories[2]}</button> 
                    : <button className="passiveFolder" onClick={()=>(setCatId(2))}>{categories[2]}</button>}
                </div>
                <NewTask newTaskData={newTaskData} setNewTaskData={setNewTaskData}/>
            </div>
            <div>
                <ItemList prevTaskData={prevTaskData} setPrevTaskData={setPrevTaskData} catId={catId} categories={categories} newTaskData={newTaskData} setNewTaskData={setNewTaskData}/>
            </div>
        </div>
        
    )
    
}