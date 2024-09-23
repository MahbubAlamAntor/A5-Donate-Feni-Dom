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
    donationBtnShow.classList.add('border', 'border-borderColor')
})
document.getElementById('donation-btn-show').addEventListener('click', function(e){
    historySection.classList.add('hidden');
    historyBtnShow.classList.remove('bg-primary');
    historyBtnShow.classList.add('border', 'text-fontPrimary');

    donateSection.classList.remove('hidden')

    donationBtnShow.classList.add('bg-primary');
    donationBtnShow.classList.remove('border', 'border-borderColor');
})

// card 1
document.getElementById('donate-now-btn').addEventListener('click', function(e){
    // incresse amount
    const donateTitle = getInnerText('donate-title');
    const donateAmount = getInnerValue('donate-amount');
    const accountBalance = allBalance('account-balance');
    const myAvailableBalance = allBalance('my-available-balance');

    if(isNaN(donateAmount)){
        return alert('not valid number'); 
    }else if(myAvailableBalance < donateAmount){
        return alert('influence balance');
    }else if(donateAmount < 0){
        return alert('Your Amount Not Valid')
    }
    else{
        const newTotalBalance = donateAmount + accountBalance;
        document.getElementById('account-balance').innerText = newTotalBalance;
        document.getElementById('my_modal_5').showModal();
    }

    // decrese amount

    const newMyAvailableBalance = myAvailableBalance - donateAmount;
    document.getElementById('my-available-balance').innerText = newMyAvailableBalance;


    // append history
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="border border-borderColor2 p-5 rounded-xl">
       <h4 class="font-bold pb-3">${donateAmount} Taka is Donated ${donateTitle}</h4>
       <span class='text-gray-500'>Date: ${new Date()}<span>
    </div>
    `;
   historySection.insertBefore(div, historySection.firstChild);
})


// card no 2

document.getElementById('donate-now-btn1').addEventListener('click', function(e){
    // incresse amount
    const donateTitle = getInnerText('donate-title');
    const donateAmount = getInnerValue('donate-amount1');
    const accountBalance = allBalance('account-balance1');
    const myAvailableBalance = allBalance('my-available-balance');

    if(isNaN(donateAmount)){
        return alert('not valid number'); 
    }else if(myAvailableBalance < donateAmount){
        return alert('influence balance');
    }else if(donateAmount < 0){
        return alert('Your Amount Not Valid')
    }
    else{
        const newTotalBalance = donateAmount + accountBalance;
        console.log(newTotalBalance)
        document.getElementById('account-balance1').innerText = newTotalBalance;
        document.getElementById('my_modal_51').showModal();
    }

    // decrese amount

    const newMyAvailableBalance = myAvailableBalance - donateAmount;
    document.getElementById('my-available-balance').innerText = newMyAvailableBalance;

    // append history
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="border border-borderColor2 p-5 rounded-xl">
       <h4 class="font-bold pb-3">${donateAmount} Taka is Donated ${donateTitle}</h4>
       <span class='text-gray-500'>Date: ${new Date()}<span>
    </div>
    `;
    historySection.insertBefore(div, historySection.firstChild);
})

// card no 3

document.getElementById('donate-now-btn2').addEventListener('click', function(e){
    // incresse amount
    const donateTitle = getInnerText('donate-title');
    const donateAmount = getInnerValue('donate-amount2');
    const accountBalance = allBalance('account-balance2');
    const myAvailableBalance = allBalance('my-available-balance');

    if(isNaN(donateAmount)){
        return alert('not valid number'); 
    }else if(myAvailableBalance < donateAmount){
        return alert('influence balance');
    }else if(donateAmount < 0){
        return alert('Your Amount Not Valid')
    }
    else{
        const newTotalBalance = donateAmount + accountBalance;
        document.getElementById('account-balance2').innerText = newTotalBalance;
        document.getElementById('my_modal_51').showModal();
    }

    // decrese amount

    const newMyAvailableBalance = myAvailableBalance - donateAmount;
    document.getElementById('my-available-balance').innerText = newMyAvailableBalance;

    // append history
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="border border-borderColor2 p-5 rounded-xl">
       <h4 class="font-bold pb-3">${donateAmount} Taka is Donated ${donateTitle}</h4>
       <span class='text-gray-500'>Date: ${new Date()}<span>
    </div>
    `;
    historySection.insertBefore(div, historySection.firstChild);
})
