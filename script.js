const billinput = document.getElementById('bill-input')
const five = document.getElementById('five')
const ten = document.getElementById('ten')
const fifteen = document.getElementById('fifteen')
const twentyFive = document.getElementById('twentyfive')
const fifty = document.getElementById('fifty')
const custom =document.getElementById('custom')
const numberPeople = document.getElementById('num-ppl-input')
const tipPerPerson = document.getElementById('tip-per-person-display')
const totalPerPerson = document.getElementById('total-per-person-display')
const reset = document.getElementById('reset')


let bill = 0
let people = 0


 
 let tip = 0.15
five.addEventListener('click', ()=>{tip = 0.05})
ten.addEventListener('click', ()=>{tip = 0.1})
fifteen.addEventListener('click', ()=>{tip = 0.15})
twentyFive.addEventListener('click', ()=>{tip = 0.25})
fifty.addEventListener('click', ()=>{tip = 0.50})
custom.addEventListener('click', ()=>{tip = custom.value/100})




 let tots = 0
 
 function tipPerPersonCalc(){
    bill = parseInt(billinput.value)
    people = parseInt(numberPeople.value)
   return tipPerPerson.innerText = ((bill*tip)/people).toFixed(2)
}

function totalPerPersonCalc(){
    bill = parseInt(billinput.value)
    people = parseInt(numberPeople.value)
return totalPerPerson.innerText = ((bill+(bill*tip))/people).toFixed(2)

}



 reset.addEventListener ('click',()=> tipPerPersonCalc() + totalPerPersonCalc() )

 
 