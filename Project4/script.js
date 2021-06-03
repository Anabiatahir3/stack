//get DOM elements
const currencyOne=document.getElementById("currency-one");
const amountCurrencyOne=document.getElementById("amount-one");
const currencyTwo=document.getElementById("currency-two");
const amountCurrencyTwo=document.getElementById("amount-two");
const swap=document.getElementById("swap");
const rate=document.getElementById("rate");
const ratelist=document.getElementById("ratelist");
//fetch exchange rates from API and update DOM

function calculate(){
    //get the currency code for currency 1 and 2
const currencyOneCode=currencyOne.value;
const currencyTwoCode=currencyTwo.value;
//send request to exchange rate api for conversion rates of currency 1
fetch(`https://v6.exchangerate-api.com/v6/d0be6e831e1783513955ed52/pair/${currencyOneCode}/${currencyTwoCode}`)
.then(res => res.json())
.then(data => {
    //get the conversion rate from currency 1 to currency 2
    const conversionRate=data.conversion_rate;
    //update the dom to display the conversion rate
    rate.innerText=`1 ${currencyOneCode}=${conversionRate} ${currencyTwoCode}`;
 //update the currency 2 amount
 amountCurrencyTwo.value=(amountCurrencyOne.value*conversionRate).toFixed(2);
//   Formatting Currency Two Amount
//  const amount2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyTwoCode }).format((amountCurrencyOne.value * conversionRate).toFixed(2));
//  // Updating DOM
//  amountCurrencyTwo.value = amount2;

});
};
function getlist(){
    const currencyOneCode=currencyOne.value;
 fetch(`https://v6.exchangerate-api.com/v6/d0be6e831e1783513955ed52/latest/${currencyOneCode}`)
 .then(rep =>rep.json())
 .then(result=> {
     console.log(result.conversion_rates);

});
};



//event listeners
//recalculate exchange rate when currency 1 changes
currencyOne.addEventListener("change", calculate);
//recalculate exchange amount when currency 1 amount changes
amountCurrencyOne.addEventListener("input",calculate);
//recalculate exchange rate when currency 2 changes
currencyTwo.addEventListener("change", calculate);
//recalculate exchange amount when currency 2 amount changes
amountCurrencyTwo.addEventListener("input",calculate);
//swap currencies upon a click
swap.addEventListener("click",()=>{
//swapping currencies upon swap click
    const temp=currencyOne.value;
    currencyOne.value=currencyTwo.value;
    currencyTwo.value=temp;
    //once swapped, recalculate
    calculate();
    getlist();
});
ratelist.addEventListener("click",getlist)
//execute calculate function on page load
calculate();
