import CostCont from "./components/Costs/CostCont.js";
import NewCost from "./components/NewCost/NewCost.js";
import MainCont from "./components/UI/MainCont.js";

function App() {

  const costs = [

    {
      id: '1',
      date: new Date(2021, 1, 12),
      description: "Холодильник",
      amount: 999.99
    },
    {
      id: '2',
      date: new Date(2021, 2, 13),
      description: "Сковородка",
      amount: 21.99
    },
    {
      id: '3',
      date: new Date(2023, 3, 4),
      description: "Часы",
      amount: 39.99
    },

  ]

  const addCostHandler = (cost) => {
    console.log(cost);
    console.log('AppComponent');
  }

  return (
    <MainCont>
      <NewCost onAddCost={addCostHandler} />
      <CostCont data={costs} />
    </MainCont>
    
  );
}

export default App;
