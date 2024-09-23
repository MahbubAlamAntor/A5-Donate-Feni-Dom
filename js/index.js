const historySection = document.getElementById('history-section');
const donateSection = document.getElementById('donate-section');
const donationBtnShow = document.getElementById('donation-btn-show');

// donation and history button work
document.getElementById('history-btn-show').addEventListener('click', function(e){
    historySection.classList.remove('hidden');
    historySection.classList.add('bg-red-500');

    donateSection.classList.add('hidden')

    donationBtnShow.classList.remove('bg-primary')
})



document.getElementById('donate-now-btn').addEventListener('click', function(e){
    // incresse amount
    const donateAmount = parseFloat(document.getElementById('donate-amount').value);
    const accountBalance = allBalance('account-balance');

    if(isNaN(donateAmount)){
        alert('not valid number'); 
        return;
    }else if(accountBalance <=0){
        alert('influence balance');
        return;
    }
    else{
        const newTotalBalance = donateAmount + accountBalance;
        document.getElementById('account-balance').innerText = newTotalBalance;
        document.getElementById('my_modal_5').showModal();
    }

    // decrese amount

    const myAvailableBalance = allBalance('my-available-balance');
    
    const newMyAvailableBalance = myAvailableBalance - donateAmount;
    document.getElementById('my-available-balance').innerText = newMyAvailableBalance;
})