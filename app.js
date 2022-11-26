/*  --  Variables  --  */ 
/*Fields*/ 
const inputBillField = document.querySelector(".billField")
const inputPeopleField = document.querySelector(".peopleField")
/*Warning*/
const warningBill = document.querySelector(".warningBill")
const warningPeople = document.querySelector(".warningPeople")
/*Input data*/ 
const billAmount = document.querySelector("#billAmount")
const peopleAmount = document.querySelector("#peopleAmount")
/*Display data*/ 
const tipAmountPPerson = document.querySelector("#tipAmountPPerson")
const totalPPerson = document.querySelector("#totalPPerson")
/*Percentage selectors*/ 
const percentajeBtn = document.querySelectorAll(".percentajeBtn")
const percentajeField = document.querySelector(".percentajeField")
/*Reset*/ 
const reset = document.querySelector(".reset")

/*Add events listener*/ 

percentajeBtn.forEach(btn=>{
    btn.addEventListener("click",()=>{
        percentajeField.value=""
        if(inputsCheck()==true){
            let per = btn.value.split("")
            per.pop()
            calculation(per.join(""))
        }
    })
})
percentajeField.addEventListener("keyup",()=>{
    if(inputsCheck()==true){
        calculation(percentajeField.value)
    }
    console.log(percentajeField.value);
})
reset.addEventListener("click",()=>{
    resetFunction()
})

const inputsCheck = ()=>{
    let readyBill = false
    let readyPeople = false
    if(billAmount.value<=0){
        warningBill.style.display = "block";
        inputBillField.style.border = "solid 3px hsl(10, 61%, 63%)";
        readyBill = false
    }else{
        warningBill.style.display = "none";
        inputBillField.style.border = "none";
        readyBill = true
    }
    if(peopleAmount.value<=0){
        warningPeople.style.display = "block";
        inputPeopleField.style.border = "solid 3px hsl(10, 61%, 63%)";
        readyPeople = false
    }else{
        warningPeople.style.display = "none";
        inputPeopleField.style.border = "none";
        readyPeople = true
    }
    if(readyBill==true && readyPeople==true){
        return true
    }else{
        return false
    }
}

const calculation = (percentage)=>{
    let totalTipPPerson = 0
    let paymentPlusTipPPerson = 0
    totalTipPPerson = ((billAmount.value*(percentage/100))/peopleAmount.value).toFixed(2)
    tipAmountPPerson.innerHTML="$"+totalTipPPerson
    paymentPlusTipPPerson = ((billAmount.value/peopleAmount.value)+parseFloat(totalTipPPerson)).toFixed(2)
    totalPPerson.innerHTML="$"+paymentPlusTipPPerson
}

window.addEventListener("scroll", ()=>{
    resetFunction()
})

const resetFunction = ()=>{
    billAmount.value = ""
    peopleAmount.value = ""
    tipAmountPPerson.innerHTML="$0.00"
    totalPPerson.innerHTML="$0.00"
}


