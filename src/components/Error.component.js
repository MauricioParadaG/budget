import React from 'react'

const ErrorComponent = props => (
    <p className="alert alert-danger error">{props.message}</p>
)

export default ErrorComponent
