import CostItem from "./CostItem.js";
import "./CostCont.css"
import Card from "../UI/Card.js";
import CostFilter from "./CostFilter/CostFilter.js";
import React, {useState} from "react";


const CostCont = (props) => {

    const [FilterValues, setFilterValues] = useState({
        selectedYear: '2021',
        CostsData: props.data.filter((el) => el.date.getFullYear() == "2021"),
        
    });

    const SelectNewYearHandler = (NewYearValue) => {
        setFilterValues(prevState => {
            return{
                // ...prevState,
                selectedYear: NewYearValue,
                CostsData: props.data.filter((el) => el.date.getFullYear() == NewYearValue),
        }});
    }

    return(
        <Card className="CostCont">

            <CostFilter year={FilterValues.selectedYear} onSelectNewYear={SelectNewYearHandler}/>


            {FilterValues.CostsData.map(cost => (
            <CostItem
                key={cost.id} 
                date={cost.date} 
                description = {cost.description} 
                amount={cost.amount}
            ></CostItem>
            ))}


            {/* <CostItem 
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
            ></CostItem> */}
        </Card>
    )
}

export default CostCont