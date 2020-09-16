//payment information input validation with js


const form = document.getElementById("orderForm")
const cardName = document.getElementById("ccName")
const email = document.getElementById("email")
const cardNumber = document.getElementById("cardNumber")
const securityCode = document.getElementById("ccv")
// get div box for changing color later

let cardNameBox = document.getElementById("nameBox")
let emailBox = document.getElementById("emailBox")
let cardNumberBox = document.getElementById("cardBox")
let securityCodeBox = document.getElementById("ccvBox")
    
form.addEventListener("submit", function(event){
    event.preventDefault()

    checkInput()
    

})


function checkInput(){
    //get the value from the inputs
    const nameValue = cardName.value.trim();
    const emailValue = email.value.trim();
    const cardValue = cardNumber.value.trim();
    const ccvValue = securityCode.value.trim();
    
    valuePoint = 0
    
    //name value check
    if(nameValue ==="" || nameValue.length < 5){
        cardNameBox.style.border = "2px solid red"
    }else{
        cardNameBox.style.border = "2px solid blue"
        valuePoint += 1
    }

    //email value check
    function checkEmail(email){
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    return emailRegex.test(email)
}
    if(!checkEmail(emailValue)){
        emailBox.style.border = "2px solid red"
    }else{
        emailBox.style.border = "2px solid blue"
        valuePoint += 1
    }

    //card number value check
    function checkCardNum(cardVal){
        const emailRegex = /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/;
        return emailRegex.test(cardVal)
    }
    if(!checkCardNum(cardValue)){
        cardNumberBox.style.border = "2px solid red"
    }else{
        cardNumberBox.style.border = "2px solid blue"
        valuePoint += 1
    }

    //ccv num value check
    if(ccvValue === ""){
        securityCodeBox.style.border = "2px solid red"
    }else{
        securityCodeBox.style.border = "2px solid blue"
        valuePoint += 1
    }

    if(valuePoint === 4){
        form.submit()
    }
}

// function checkAllForSubmit(){
//     if()
// }




// function checkName(){
//     if(form.ccName.value.length < 5){
//         alert("minimum length of name is 5")
//         let cardName = document.getElementById("cardName")
//         cardName.style.border = "5px solid red"
//     }else{
//         cardName.style.border = "0px"
//         form.submit()
        
//     }
// }

// function checkCardNum(cardNum){
//     cardRegex = /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/
//     return cardRegex.test(cardNum)
// }
// if(!checkCardNum(form.cardNumber.value)){
//     alert("invaild card number")
//     let card = document.getElementById("card")
//     card.style.border = "3px solid red"
// }else{
//     card.style.border = "0px"
//     form.submit()
// }