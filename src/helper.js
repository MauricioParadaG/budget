
export const checkRemainingBudget = (budget, remainingBudget)  => {
    let color;

    if((budget/ 2.5) > remainingBudget){
        color = 'alert alert-danger';
    } else if((budget/ 1.4) > remainingBudget){
        color = 'alert alert-warning';
    } else {
    color = 'alert alert-success';
    }
    
    return color;
}
