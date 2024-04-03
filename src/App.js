import CostCont from "./components/Costs/CostCont.js";
import NewCost from "./components/NewCost/NewCost.js";
import MainCont from "./components/UI/MainCont.js";
import React, {useState} from "react";

const INNITIAL_COSTS = [

  {
    id: '1',
    date: new Date(2019, 1, 12),
    description: "Холодильник",
    amount: 999.99
  },
  {
    id: '2',
    date: new Date(2020, 2, 13),
    description: "Сковородка",
    amount: 21.99
  },
  {
    id: '3',
    date: new Date(2021, 3, 4),
    description: "Вульдыр",
    amount: 119.90
  },
  {
    id: '0',
    date: new Date(2022, 3, 4),
    description: "Дыня",
    amount: 50.00
  },
  {
    id: '4',
    date: new Date(2023, 3, 4),
    description: "Часы",
    amount: 89.39
  },
  {
    id: '5',
    date: new Date(2024, 3, 4),
    description: "Арбуз",
    amount: 339.99
  },
  {
    id: '6',
    date: new Date(2024, 1, 12),
    description: "Черемша",
    amount: 92.99
  },
  {
    id: '7',
    date: new Date(2023, 2, 13),
    description: "Фуфелка",
    amount: 721.99
  },
  {
    id: '8',
    date: new Date(2022, 3, 4),
    description: "Карандаш",
    amount: 1.90
  },
  {
    id: '9',
    date: new Date(2021, 3, 4),
    description: "Железка",
    amount: 520.00
  },
  {
    id: '10',
    date: new Date(2020, 3, 4),
    description: "Чунув",
    amount: 39.39
  },
  {
    id: '11',
    date: new Date(2019, 3, 4),
    description: "Арбуз",
    amount: 339.99
  },

]

function App() {

  const[costs, setCosts] = useState(INNITIAL_COSTS)

  const addCostHandler = (cost) => {
    // console.log(cost);
    // console.log('AppComponent');
    // setCosts([cost, ...costs]);
    setCosts( prevCost => {
      return [cost, ...costs]
    })
  }

  

  return (
    <MainCont>
      <NewCost onAddCost={addCostHandler} />
      <CostCont data={costs} />
    </MainCont>
  );
}

export default App;
