var selectedCurrency; 
var currentBalance= 0;
var usdToUsd =1;
var usdToNgn = 380;
var usdToCad = 1.24;
const toCrowdCoin = 2;
var ccBalance = 0;
var ccSymbol = "CC"

var usdConversion = {
    USD: 1,
    NGN:380,
    CAD: 1.24
};

function convert(selected){
    ccBalance = (Math.round(100*currentBalance/(usdToNgn))/100)*toCrowdCoin;
};

$('.currency-code').on('click', function(){
    $('#currency').html($(this).attr('data-code'));
    selectedCurrency = $(this).attr('data-code');
  
});

$('.deposit-button').on('click', function(){
    event.preventDefault();
    currentBalance += parseInt($('.deposit-amount').val().trim());
    $('.selected-currency').html(selectedCurrency);
    $('.deposit-amount').html(currentBalance);

    if (selectedCurrency== "NGN"){
        ccBalance = (Math.round(100*currentBalance/(usdToNgn))/100)*toCrowdCoin;
        console.log(ccBalance)   
    }
    else if (selectedCurrency== "CAD"){
        ccBalance = (Math.round(100*currentBalance/(usdToCad))/100) * toCrowdCoin;

    }

    else if (selectedCurrency== "USD"){
        ccBalance = (Math.round(100*currentBalance/(usdToUsd))/100)*toCrowdCoin;
    }

     $('.crowd-coin-symbol').html(ccSymbol);
    $('.cc-amount').html(ccBalance);
});

$('transfer-amount').on('click', function(){
    event.preventDefault();
    transferAmount = $('transfer-amount').val().trim();
    console.log('transfer amount: ' + transferAmount)
});

function buy(amount,currency){

};

function sell(cryptoAmount){

};




