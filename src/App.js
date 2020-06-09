import React, {useState, useEffect} from 'react';
import RequestBudgetComponent from './components/RequestBudget.component';
import FormExpenseComponent from './components/FormExpense.component';
import ListingExpensesComponent from './components/ListingExpenses.component';
//import './App.css';

function App() {

  const [budget, setBudgetState] = useState(0);

  const [remainingBudget, setRemainingBudgetState] = useState(0);
  // Load or not RequestBudgetComponent
  const [loadRequestBudget, setLoadRequestBudgetState] = useState(true);

  //  All the expenses from FormExpense.component.js
  const [expenses, setExpensesState] = useState([]);

  const newExpenses = expense =>{
    setExpensesState([
      ...expenses,
      expense
    ]);
  }

  // Iteration - List of expenses function
  const iteringExpenses = () =>(
    expenses.map(expense => (
      <ListingExpensesComponent
        key={expense.id}
        expensesState={expense}
      />
    ))
  );
    

  return (
    <div className="container">
      <header>
        <h1>Budget Project 3B</h1>

        <div className="main-content content">
         {loadRequestBudget ? (
           // Show Budget Question
            <RequestBudgetComponent 
            setBudgetState={setBudgetState}
            setRemainingBudgetState={setRemainingBudgetState}
            setLoadRequestBudgetState={setLoadRequestBudgetState}
            />
           )
         : (
          // Show two columns Budget and Expenses
          <div className="row">
          {/** First Column */}
          <div className="one-half column">
            <FormExpenseComponent
            newExpenses={newExpenses}
            />
          </div>
          
          {/** Second Column */}
          <div className="one-half column">
            <h2>Project Expenses</h2>
            {iteringExpenses()}
            
          </div>
        </div> 

          )
         }

        </div>
      </header>
    </div>
  );
}

export default App;
