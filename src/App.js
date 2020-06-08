import React, {useState, useEffect} from 'react';
import RequestBudgetComponent from './components/RequestBudget.component';
//import './App.css';

function App() {

  const [budget, setBudgetState] = useState(0);

  const [remainingBudget, setRemainingBudgetState] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Budget Project 3B</h1>

        <div className="main-content content">
          <RequestBudgetComponent 
          setBudgetState={setBudgetState}
          setRemainingBudgetState={setRemainingBudgetState}
          />
        </div>
        
      </header>
    </div>
  );
}

export default App;
