import "./CostForm.css"
import React, {useState} from "react"

const CostForm = (props) =>{
    // const [name, setName] = useState('');
    // const [amount, setAmount] = useState('');
    // const [date, setDate] = useState('');

    const [userInput, setUserInput]= useState({
        name: '',
        amount: '',
        date: ''
    })

    const nameChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     name: event.target.value

        // })
        setUserInput((previousState) => {
            return{
                ...previousState,
                name: event.target.value
            }
        })
    };
    const amountChangeHandler = (event) => {
        setUserInput((previousState) => {
            return{
                ...previousState,
                amount: event.target.value
            }
        })
    };
    const dateChangeHandler = (event) => {
        setUserInput((previousState) => {
            return{
                ...previousState,
                date: event.target.value
            }
        })
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const costData = {
            name:userInput.name,
            amount:userInput.amount,
            date:new Date(userInput.date),
        };
        props.onSaveCostData(costData)
        // userInput.name = '';
        // userInput.amount = '';
        // userInput.date = '';
        setUserInput({
                name: '',
                amount: '',
                date: ''
        })

    };

    return(
        <form onSubmit={submitHandler}>
            <div className="CostForm_block">
                <h1>Название</h1>
                <input type="text" className="CostForm_input" value={userInput.name} onChange={nameChangeHandler}/>
            </div>
            <div className="CostForm_block">
                <h1>Сумма</h1>
                <input type="num" min = "0.01" step= "0.01" className="CostForm_input" value={userInput.amount} onChange={amountChangeHandler}/>
            </div>
            <div className="CostForm_block">
                <h1>Дата</h1>
                <input type="date" min = "2019-01-01" max = "2025-12-12" className="CostForm_input" value={userInput.date} onChange={dateChangeHandler} />
            </div>
            <div className="CostForm_block"> 
                <button className="CostForm_but" type="submit">Добавить Расход</button>
            </div>
        </form>
    )
}

export default CostForm;