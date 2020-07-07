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

// class based component
// state = {expenses:initialExpenses}
// this.setState({})

function App() {
  // const result = useState(initialExpenses);
  // const expenses = result[0];
  // const setExpenses = result[1];
  // console.log(expenses, setExpenses);
  const [expenses, setExpenses] = useState(initialExpenses);


  return (
    <div>
      hello from app
      <ExpenseForm />
      <ExpenseList />
      <Alert />
    </div>
  );
}

export default App;
