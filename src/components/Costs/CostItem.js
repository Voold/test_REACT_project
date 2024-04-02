import "./CostItem.css"
import CostDate from "./CostDate";
import Card from "../UI/Card";
import React, {useState} from "react";

const CostItem = props => {

    const [ description, setDescription ] = useState(props.description);

    const ButClickHandler = () =>{
        console.log("Wow!");
        setDescription ("new Value");
        } 


    return (
        <Card className="Cont">  
            <CostDate name = {"date"} date = {props.date}></CostDate>
            <div className="title">
                {description}
            </div>
            <div className="sum">
                ${props.amount}
            </div>
            {/* <button onClick={() =>{console.log("Wow!")}}>Изменить</button> */}
            <button onClick={ButClickHandler}>Изменить</button>
        </Card>  
    )
}


// @ 2:17:04 / 6:47:53 @
// @ 3:15:53 / 6:47:53 @


export default CostItem;