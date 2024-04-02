import Card from "../UI/Card";
import CostForm from "./CostForm";
import "./NewCost.css"

const NewCost = (props) => {

    const saveCostDataHandler = (inputCostData) => {
        const CostData = {
            ...inputCostData,
            id: (Math.random()*10).toString()
        };
        props.onAddCost(CostData);
    }

    return(
        <Card className = "Main_Cont_NewCost">
            <CostForm onSaveCostData={saveCostDataHandler}/>
        </Card>
    )
}

export default NewCost;

// @ 3:59:30 / 6:47:53 @
// @ 4:47:36 / 6:47:53 @