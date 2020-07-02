import React from 'react';
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

function App() {
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
