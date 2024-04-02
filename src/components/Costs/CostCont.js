import CostItem from "./CostItem.js";
import "./CostCont.css"
import Card from "../UI/Card.js";

const CostCont = (props) => {
    return(
        <Card className="CostCont">
            <CostItem 
            date={props.data[0].date} 
            description = {props.data[0].description} 
            amount={props.data[0].amount}
            ></CostItem>
            <CostItem
            date={props.data[1].date} 
            description = {props.data[1].description} 
            amount={props.data[1].amount}
            ></CostItem>
            <CostItem
            date={props.data[2].date} 
            description = {props.data[2].description} 
            amount={props.data[2].amount}
            ></CostItem>
        </Card>
    )
}

export default CostCont