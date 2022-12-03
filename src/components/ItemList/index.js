import { useEffect, useState } from "react";
import Item from "./Items";
import "./style.css";

export default function ItemList(props){
    const [toDo, setToDo] = useState([
        {
            id: 0,
            content: "Write Essay"
        },
        {
            id: 1,
            content: "One Hour CSS Course Online"
        },
        {
            id: 2,
            content: "Buy One Way Tickets to San Francisco"
        },
        {
            id: 3,
            content: "Go to Gym"
        },
        {
            id: 4,
            content: "Buy Groceries"
        }
    ]);

    const [done,setDone] = useState([
        
    ]);

    const [trash,setTrash] = useState([
        {
            id: 5,
            content: "Write Essay"
        },
        {
            id: 6,
            content: "Write Essay"
        },
        {
            id: 7,
            content: "Write Essay"
        },
    ]);

    useEffect(()=>{
        if (props.newTaskData!==props.prevTaskData) {
            props.setPrevTaskData(props.newTaskData);
            const newItem = {
                id: Math.floor(Math.random()*1000000000),
                content: props.newTaskData
            };
            setToDo(toDo.concat(newItem));
        }
        
    },[props])

    const toggleDone = (id) => {
        if (props.catId===0) {
            setToDo(toDo.filter(item=>item.id!==id));
            setDone(done.concat(toDo.filter(item=>item.id===id)));
        }
        if (props.catId===1) {
            setDone(done.filter(item=>item.id!==id));
            setToDo(toDo.concat(done.filter(item=>item.id===id)));
        }
    }

    const toggleTrash = (id) => {
        if (props.catId===0) {
            setTrash(trash.concat(toDo.filter(item=>item.id===id)));
            setToDo(toDo.filter(item=>item.id!==id));
        }
        if (props.catId===1) {
            setTrash(trash.concat(done.filter(item=>item.id===id)));
            setDone(done.filter(item=>item.id!==id));
        }
        if (props.catId===2) {
            setToDo(toDo.concat(trash.filter(item=>item.id===id)));
            setTrash(trash.filter(item=>item.id!==id));
        }
    }

    const deleteTrash = (id) => {
        setTrash(trash.filter(item=>item.id!==id));
    }



    return (
        <div className="itemlist">
            <b className="category">{props.categories[props.catId]}</b>
            <div className="horizontalDivider"></div>
            {props.catId===0 ? <>
                {toDo.map((item)=><Item key={item.id} item={item} catId={props.catId} toggleDone={toggleDone} toggleTrash={toggleTrash}/>)}
            </> : <></>}
            {props.catId===1 ? <>
                {done.map((item)=><Item key={item.id} item={item} catId={props.catId} toggleDone={toggleDone} toggleTrash={toggleTrash}/>)}
            </> : <></>}
            {props.catId===2 ? <>
                {trash.map((item)=><Item key={item.id} item={item} catId={props.catId} deleteTrash={deleteTrash} toggleTrash={toggleTrash}/>)}
            </> : <></>}
        </div>
    )
    
}