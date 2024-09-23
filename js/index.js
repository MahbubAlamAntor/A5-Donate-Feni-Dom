const historySection = document.getElementById('history-section');
const donateSection = document.getElementById('donate-section');
const donationBtnShow = document.getElementById('donation-btn-show');
const historyBtnShow = document.getElementById('history-btn-show');

// donation and history button work
document.getElementById('history-btn-show').addEventListener('click', function(e){
    historySection.classList.remove('hidden');
    historyBtnShow.classList.add('bg-primary');
    historyBtnShow.classList.remove('border', 'text-fontPrimary');

    donateSection.classList.add('hidden')

    donationBtnShow.classList.remove('bg-primary')
})



document.getElementById('donate-now-btn').addEventListener('click', function(e){
    // incresse amount
    const donateAmount = parseFloat(document.getElementById('donate-amount').value);
    const accountBalance = allBalance('account-balance');
    const myAvailableBalance = allBalance('my-available-balance');

    if(isNaN(donateAmount)){
        alert('not valid number'); 
        return;
    }else if(myAvailableBalance < donateAmount){
        alert('influence balance');
        return;
    }
    else{
        const newTotalBalance = donateAmount + accountBalance;
        document.getElementById('account-balance').innerText = newTotalBalance;
        document.getElementById('my_modal_5').showModal();
    }

    // decrese amount

    const newMyAvailableBalance = myAvailableBalance - donateAmount;
    document.getElementById('my-available-balance').innerText = newMyAvailableBalance;
})