// // 1.display number in text box

function displayNumber(num){
    result.value +=num
}

// // 2. clear text value

function clearBox(){
  result.value= ""
}


// // 3. Evaluate Expression

function evaluateExp(){
    result.value = eval(result.value)
}



// // Remove last iem from text box

function removeLastItem(){
    result.value = result.value.slice(0,-1)
}



