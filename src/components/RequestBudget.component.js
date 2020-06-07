import React, {useState}from 'react'

const RequestBudgetComponent = () => {

    const [amountBudget, setAmountBudgetState] = useState(0);

    const [error, setErrorState] = useState(false);

    const onChangeAmount = event => {
        setAmountBudgetState(
            // ...amountBudget,
            // adding the form info to the state
            console.log(parseInt(event.target.value))
        );
    } 
    
    return (
        <>
            <h2>What is the budget for the Project?</h2>
            
            <form>
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
