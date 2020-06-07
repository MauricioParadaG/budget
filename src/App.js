import React from 'react';
import RequestBudgetComponent from './components/RequestBudget.component';
//import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Budget Project 3B</h1>

        <div className="main-content content">
          <RequestBudgetComponent/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
