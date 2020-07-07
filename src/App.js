import React, {useState} from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
// import uuid from 'uuid/v4'
import { v4 as uuidv4 } from 'uuid';

const initialExpenses = [
  {id:uuidv4(), charge: "rent", amount:1600},
  {id:uuidv4(), charge: "car payment", amount:400},
  {id:uuidv4(), charge: "recreadit card billnt", amount:1200}
];

// import useState()
// function  returns [] with two values
// the actual value of the state
// function for updates/control
// default value


function App() {
  // const result = useState(initialExpenses);
  // const expenses = result[0];
  // const setExpenses = result[1];
  // console.log(expenses, setExpenses);
  const [expenses, setExpenses] = useState(initialExpenses);


  return (
    <div>
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        total spending:{""} <span className="total">
          $ {expenses.reduce((accumulator, current) => {
            return (accumulator += current.amount);
          },0)}
        </span>
      </h1>
    </div>
  );
}

export default App;
