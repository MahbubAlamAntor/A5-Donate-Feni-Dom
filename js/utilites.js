function allBalance (id){
    const inputAvailableBalance = parseFloat(document.getElementById(id).innerText);
    return inputAvailableBalance;
}

function getInnerText (id){
    const inputBalance = document.getElementById(id).innerText;
    return inputBalance;
}

function getInnerValue (id){
    const innerValue = parseFloat(document.getElementById(id).value)
    return innerValue;
}
// parseFloat(document.getElementById('donate-amount').value)