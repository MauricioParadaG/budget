import React, {useState} from 'react';
import ErrorComponent from './Error.component';
import shortid from 'shortid';

const FormExpenseComponent = props => {

    const [expense, setExpenseState] = useState(
        {
           id:'',
           title:'',
           amount:0,
           date:'',
           paidBy:'',
        }
      );

    const [error, setErrorState] = useState(false);

    //also in html onChange={event => setExpenseState(event.target.value)}
    const onChangeFormBudget = event => {
        setExpenseState({
            ...expense,
            // adding an ID - shorid library
            id: shortid.generate(),
            // adding the form info to the state
            [event.target.name]: event.target.type === 'number' ? parseFloat(event.target.value)
            : event.target.value
        });
    } 

    const onSubmit = event => {
        event.preventDefault();

        // validation
        if (expense.title.trim() ==='' || 
        expense.amount < 0.001 ||
        isNaN(expense.amount) ||
        expense.date.trim() ==='' ||
        expense.paidBy.trim() ==='' ){
            setErrorState(true);
            return;
        } 
        setErrorState(false);

        //console.log(expense);
        // sharing with expensesState main Component
        props.newExpenses(expense);

        setExpenseState({ 
            id:'',
            title:'',
            amount:0,
            date:'',
            paidBy:'',
        });

    }

    return (
        <form onSubmit={onSubmit}>
            <h2>New Expenses Here!</h2>
        {/** if - error message with .css*/}
        {error ?
            <ErrorComponent message="All filds are required / Amount more than 0"/>
            : null
        }
            <div className="fild">
                <label>Expense Name</label>
                <input type="text"
                 name= "title"
                 placeholder="Expense Name"
                 className="u-full-width"
                 onChange={onChangeFormBudget}
                 value={expense.title}
                />

                <label>Amount</label>
                <input type="number"
                name= "amount"
                className="u-full-width"
                placeholder="Amount"
                onChange={onChangeFormBudget}
                value={expense.amount}
                />

                <label>Date</label>
                <input type="date"
                 name= "date"
                 className="u-full-width"
                 onChange={onChangeFormBudget}
                 value={expense.date}
                />

                <label>Paid by</label>
                <input type="text"
                 name= "paidBy"
                 placeholder="Expense Name"
                 className="u-full-width"
                 onChange={onChangeFormBudget}
                 value={expense.paidBy}
                />
            </div>

            {/** Button */}
            <input 
            type="submit"
            className="button-primary u-full-width"
            value="Add Expense"
            />        

        </form>
    )
}

export default FormExpenseComponent
