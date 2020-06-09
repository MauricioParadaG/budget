import React from 'react'

const ListingExpensesComponent = props => (
    <div className="performed-expenses">
        <li className="expenses">
            <p style={{color:'blue'}}><b>{props.expensesState.title}</b>
                <span className="expense">${props.expensesState.amount}</span>
            </p>
            <p>Paid by<b>{props.expensesState.paidBy}</b>
                <span>{props.expensesState.date}</span>
            </p>
        </li>
    </div>
);


export default ListingExpensesComponent
