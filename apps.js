const btnTipPercent = document.querySelectorAll('.btnPercent')
const inputCustom = document.getElementById('inputCustom')
const billInput = document.getElementById('bill')
const peopleCount = document.getElementById('peopleCount')
const errorBill = document.querySelector('.error-bill')
const errorCount = document.querySelector('.error-count')

btnTipPercent.forEach(btn=>{
    btn.addEventListener('click',()=>{
        tipFun(btn.value)
    })
})

function tipFun(btn){
    if(billInput.value === ''){
        errorBill.classList.toggle('active')
        error()
    }else if(peopleCount.value === ''){
        errorCount.classList.toggle('active')
        error()
    }else{
        computational(btn)
    }
}

inputCustom.addEventListener('input',()=>{
    const tip = `${inputCustom.value}`
    if(billInput.value === ''){
        errorBill.classList.add('active')
        error()
    }else if(peopleCount.value === ''){
        errorCount.classList.toggle('active')
        error()
    }else{
        computational(tip)
    }

})

const tipResult = document.getElementById('total-amount')
const totalResult = document.getElementById('total-person')



function computational(dataValue){
    const billValue = parseFloat(billInput.value);
    const people = parseFloat(peopleCount.value);

    const tip = ((billValue * (dataValue / 100)) / people).toFixed(2);
    const totalAmount = ((billValue / people) + parseFloat(tip)).toFixed(2);

    tipResult.textContent = tip;
    totalResult.textContent = totalAmount;
}

document.getElementById('reset').addEventListener('click',()=>{
    clear()
})

function clear(){
    tipResult.textContent = '0.00';
    totalResult.textContent = '0.00';
    inputCustom.value = ''
    billInput.value = ''
    peopleCount.value = ''
}
function error (){
    setInterval(()=>{
        errorBill.classList.remove('active')
        errorCount.classList.remove('active')
    },5000)
}

