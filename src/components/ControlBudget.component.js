import React from 'react'
import {checkRemainingBudget} from './../helper';

const ControlBudgetComponent = props => (
        <>
            <div className="alert alert-primary">
                <p>Starting Budget: ${props.budgetState} </p>
            </div>
            <div className={checkRemainingBudget(props.budgetState, props.remainingBudgetState)}>
                <p>Remaining budget: ${props.remainingBudgetState}</p>
            </div>

        </>
    )

export default ControlBudgetComponent
