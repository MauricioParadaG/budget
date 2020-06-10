import React, {useState, useEffect} from 'react';
import RequestBudgetComponent from './components/RequestBudget.component';
import FormExpenseComponent from './components/FormExpense.component';
import ListingExpensesComponent from './components/ListingExpenses.component';
import ControlBudgetComponent from './components/ControlBudget.component';
//import './App.css';

function App() {

  // local storage initial expenses
  let initialExpenses = JSON.parse(localStorage.getItem('expenses'));
  // Is there a budget rigth now?
  let isThereABudget = true;

  if (!initialExpenses){
    initialExpenses = [];
  }else if(initialExpenses.length === 0){
    isThereABudget = true;
  }else{
    isThereABudget = false;
  }

  // local storage budget
  let initialBudget = JSON.parse(localStorage.getItem('budget'));
  if(!initialBudget){
    initialBudget = 0;
  }

  //Remaining Local storage
  let initialRemaining = JSON.parse(localStorage.getItem('remainingBudget'));
  if(!initialRemaining){
    initialRemaining = 0;
  }


  //-----------------------------------------
  // States

  const [budget, setBudgetState] = useState(initialBudget);

  const [remainingBudget, setRemainingBudgetState] = useState(initialRemaining);
  // Load or not RequestBudgetComponent
  const [loadRequestBudget, setLoadRequestBudgetState] = useState(isThereABudget);

  //  All the expenses from FormExpense.component.js
  const [expenses, setExpensesState] = useState(initialExpenses);
  
    // Added expense here as useEffect need to know it
  const [mainExpense, setMainExpenseState] = useState({});
  // makes that useEffect only executes once!
  const [ atleastoneExpense, setAtleastoneExpenseState ] = useState(false);

  // updating Remaining budget and adding a expense
  
  


  useEffect(() => {
    if(atleastoneExpense){

    setExpensesState([
      ...expenses,
      mainExpense
    ]);

    const subtracting = remainingBudget - mainExpense.amount;
    setRemainingBudgetState(subtracting);

    setAtleastoneExpenseState(false);
  }
  }, [mainExpense, expenses, remainingBudget, atleastoneExpense]);

  
  useEffect( () => {
    if(initialExpenses){
      localStorage.setItem('expenses', JSON.stringify(expenses));
    } else {
      localStorage.setItem('expenses', JSON.stringify([]));
    }

    // Initial Budget
    if(initialBudget){
      localStorage.setItem('budget', JSON.stringify(budget));
    }else{
      localStorage.setItem('budget', JSON.stringify([]));
    }

    // Adding remaining to local storage
    let initialRemaining = JSON.parse(localStorage.getItem('remainingBudget'));
    if (initialRemaining) {
      localStorage.setItem('remainingBudget', JSON.stringify(remainingBudget));
    } else {
      localStorage.setItem('remainingBudget', JSON.stringify([]));
    }

    
  }, [expenses, budget, remainingBudget, initialExpenses, initialBudget, initialRemaining] );
  

/*
  const newExpenses = expense =>{
    setExpensesState([
      ...expenses,
      expense
    ]);
  }
*/

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
            setMainExpenseState={setMainExpenseState}
            setAtleastoneExpenseState={setAtleastoneExpenseState}
            />
          </div>
          
          {/** Second Column */}
          <div className="one-half column">
            <h2>Project Expenses</h2>
            {iteringExpenses()}

            <ControlBudgetComponent
              budgetState={budget}
              remainingBudgetState={remainingBudget}
            />
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
