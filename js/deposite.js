document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositeField = document.getElementById('deposite-field');
    const depositeAmontString = depositeField.value;
    const depositeAmont = parseFloat(depositeAmontString);
    depositeField.value = '';
    
    if(isNaN(depositeAmont)){
        alert('Please, provide a number');
        return;
    }

    const depositeTotalElement = document.getElementById('deposite-total');
    const depositeTotalString = depositeTotalElement.innerText;
    const depostiteTotal = parseFloat(depositeTotalString);
    

    const currentDepositeTotal = depositeAmont + depostiteTotal;
    depositeTotalElement.innerText = currentDepositeTotal;

    
    
    const previousTotalAmount = document.getElementById('balance-total');
    const previousTotalAmountString = previousTotalAmount.innerText;
    const currentTotalAmount = parseFloat(previousTotalAmountString);

    const totalAmount = currentTotalAmount + currentDepositeTotal; 
    previousTotalAmount.innerText = totalAmount;
})