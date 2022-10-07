function displayMailingLabel(name,address,city,state,zip) {
    console.log(name);
    console.log(address);
    console.log(city, "," , state, zip);
    
}

displayMailingLabel("Lianna", "2223 suitland rd", "tampa", "florida", "20746");

function addNumbers(num1 , num2) {
    console.log('${num1} + ${num2} = ${num1+num2}');

}
addNumbers(2,2);

function displayrecipt(totalDue, AmountPaid) {
    console.log('Total Due: ${totalDue}');
    console.log('Amount Paid: ${amountPaid}');
    console.log('Chnage Due ${amountPaid - totalDue}');
}
displayrecipt(200-250)