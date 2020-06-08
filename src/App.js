import React, {useState, useEffect} from 'react';
import RequestBudgetComponent from './components/RequestBudget.component';
import FormExpenseComponent from './components/FormExpense.component';
//import './App.css';

function App() {

  const [budget, setBudgetState] = useState(0);

  const [remainingBudget, setRemainingBudgetState] = useState(0);
  // Load or not RequestBudgetComponent
  const [loadRequestBudget, setLoadRequestBudgetState] = useState(true);

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
            <FormExpenseComponent/>
          </div>
          {/** Second Column */}
          <div className="one-half column">
            2                
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
