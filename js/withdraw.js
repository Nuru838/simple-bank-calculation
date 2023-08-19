document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawButtonClick = document.getElementById('withdraw-field');
    const withdrawButtonClickString = withdrawButtonClick.value;
    const newWithdraw = parseFloat(withdrawButtonClickString);
    withdrawButtonClick.value = '';

    if(isNaN(newWithdraw)){
        alert('Please, provide a number');
        return;
    }

    const previousWithdraw = document.getElementById('withdraw-total');
    const previousWithdrawString = previousWithdraw.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawString);
    

    const previousTotalAmount = document.getElementById('balance-total');
    const previousTotalAmountString = previousTotalAmount.innerText;
    const currentTotalAmount = parseFloat(previousTotalAmountString);

    if(newWithdraw > currentTotalAmount){
        alert('Input money is insuficient');
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdraw;
    previousWithdraw.innerText = currentWithdrawTotal;

    const totalAmount = currentTotalAmount - currentWithdrawTotal; 
    previousTotalAmount.innerText = totalAmount;
})