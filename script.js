const billInput = document.getElementById('bill-input')
const numberPeople = document.getElementById('num-ppl-input')

const five = document.getElementById('five')
const ten = document.getElementById('ten')
const fifteen = document.getElementById('fifteen')
const twentyFive = document.getElementById('twentyfive')
const fifty = document.getElementById('fifty')
const custom =document.getElementById('custom')

const tipPerPerson = document.getElementById('tip-per-person-display')
const totalPerPerson = document.getElementById('total-per-person-display')
const reset = document.getElementById('reset')
const tipOptions = document.querySelectorAll('.tipoptions')

let bill = 0
let people = 0
let tip = 0


//Calc EventListeners
billInput.addEventListener('keyup', () => allPerPersonCalc())
numberPeople.addEventListener('keyup', () => allPerPersonCalc())


//Setting tip


five.addEventListener('click', ()=>{tip = 0.05; allPerPersonCalc(); })
ten.addEventListener('click', ()=>{tip = 0.1;allPerPersonCalc();})
fifteen.addEventListener('click', ()=>{tip = 0.15;allPerPersonCalc();})
twentyFive.addEventListener('click', ()=>{tip = 0.25;allPerPersonCalc();})
fifty.addEventListener('click', ()=>{tip = 0.50;allPerPersonCalc();})
custom.addEventListener('keyup', ()=>{tip = custom.value/100; allPerPersonCalc();})



//Total Calculations
 
 function tipPerPersonCalc(){
    bill = parseInt(billInput.value)
    people = parseInt(numberPeople.value)
   return tipPerPerson.innerText = ((bill*tip)/people).toFixed(2)
}

function totalPerPersonCalc(){
    bill = parseInt(billInput.value)
    people = parseInt(numberPeople.value)
    

return totalPerPerson.innerText = ((bill+(bill*tip))/people).toFixed(2)

}

function allPerPersonCalc(){
    totalPerPersonCalc()
    tipPerPersonCalc()
}



 reset.addEventListener ('click',()=> allPerPersonCalc() )

 
 