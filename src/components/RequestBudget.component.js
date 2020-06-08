import React, {useState}from 'react'
import ErrorComponent from './Error.component';

const RequestBudgetComponent = props => {

    const [amountBudget, setAmountBudgetState] = useState(0);

    const [error, setErrorState] = useState(false);

    const onChangeAmount = event => {
        setAmountBudgetState(
            // ...amountBudget,
            // adding the form info to the state
            parseInt(event.target.value, 10)
        );
    } 

    const onSubmit = event => {
        event.preventDefault();

        if (amountBudget < 0.0001 ||
            isNaN(amountBudget) ){
            setErrorState(true);
            return;
        }
        setErrorState(false);

        props.setBudgetState(amountBudget);
        props.setRemainingBudgetState(amountBudget);
        props.setLoadRequestBudgetState(false);
    }
    
    return (
        <>
            <h2>What is the budget for the Project?</h2>
            {/** if - error message with .css*/}
            {error ?
                <ErrorComponent message="A valid Budget must be higher than 0"/>
            : null
            }
            
            <form onSubmit={onSubmit}>
                <input 
                type="number"
                className="u-full-width"
                placeholder="What is the budget?"
                onChange={onChangeAmount}
                />

                <input 
                type="submit"
                className="button-primary u-full-width"
                value="Define Budget"
                />
            </form>
        </>
    )
}

export default RequestBudgetComponent
