import { useState } from "react";
import dots from "../../../assets/Dots.png";
import sqr from "../../../assets/Square.png";
import tick from "../../../assets/Ticked.png";
import bin from "../../../assets/Trash.png";
import tickBack from "../../../assets/CheckFolder.png";
import "./style.css";

export default function Item(props){
    const [showOptionsMenu, toggleOptionsMenu] = useState(0);
    const [crossed, setCrossed] = useState();

    let clickY=0;

    const handleOptionsClick = (click) => {
        toggleOptionsMenu(!showOptionsMenu);
        clickY=click.clientY;
    }

    const handleTickClick = () => {
        setCrossed(true);
        setTimeout(()=>{props.toggleDone(props.item.id)},250);
    }

    return(
        <div className="task">
            <button onClick={(click)=> handleOptionsClick(click)}> <img src={dots} alt="three-dots" /></button>
            {showOptionsMenu ? <>
                    <div className="options" style={{left: 56, top: {clickY}}}>
                        {props.catId===2 ? <button onClick={()=>props.deleteTrash(props.item.id)}>
                            <img src={bin} alt="trash-bin"/>
                            <p>Delete Forever</p>
                        </button> : <></>}
                        <button onClick={()=>props.toggleTrash(props.item.id)}>
                            {props.catId===2 ? <img src={tickBack} alt="check-folder"/> : <img src={bin} alt="trash-bin"/>}
                            {props.catId===2 ? <p>Move Back to To Do</p> : <p>Move to Trash</p>}
                        </button>
                    </div>
                </> : ''}
            {props.catId===0 ? <><button onClick={()=>handleTickClick()}>
                {crossed ? <img style={{margin:-4}} src={tick} alt="ticker"/> : <img src={sqr} alt="ticker"/>} </button>
            {crossed ? <p className="crossedOut">{props.item.content}</p> : <p>{props.item.content}</p>}</> : <></> }

            {props.catId===1 ? <><button onClick={()=>handleTickClick()}>
                {!crossed ? <img style={{margin:-4}} src={tick} alt="ticker"/> : <img src={sqr} alt="ticker"/>} </button>
            {!crossed ? <p className="crossedOut">{props.item.content}</p> : <p>{props.item.content}</p>}</> : <></> }

            {props.catId===2 ? <><button>
                {crossed ? <img style={{margin:-4}} src={tick} alt="ticker"/> : <img src={sqr} alt="ticker"/>} </button>
            {crossed ? <p className="crossedOut">{props.item.content}</p> : <p>{props.item.content}</p>}</> : <></> }
        </div>
    )
}