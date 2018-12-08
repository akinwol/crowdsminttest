require("dotenv").config();
// var keys = require('./keys')
const Gdax = require('gdax');
const publicClient = new Gdax.PublicClient();




const coinbaseKey = process.env.coinbase_key;
const coinbaseSecret = process.env.coinbase_secret;
const coinbasePassPhrase = process.env.coinbase_passphrase;

const apiURI = 'https://api.gdax.com';
const sandboxURI = 'https://api-public.sandbox.gdax.com';

const authedClient = new Gdax.AuthenticatedClient(
    coinbaseKey,
    coinbaseSecret,
    coinbasePassPhrase,
    sandboxURI
);



function exchange() {
    // User input - grab exhange amount, desired currency, current currency 
    var userExchange = {
        amount: 700,
        currentCurrency: 'USD',
        desiredCurrency: 'EUR'
    }
    // use switch case depending on the desired currency - for now we just assume 1 
    // create order details based on user input 
    var order = {
        side: 'buy',
        type: 'market',
        funds: userExchange.amount,
        product_id: `BTC-${userExchange.currentCurrency}`
    };

    var buyDetails = {
        executedValue: "",
        fees: "",
        cryptoAmount: ""
    };
    var sellDetails = {
        executedValue: "",
        fees: "",
        cryptoAmount: ""
    }

    // Buy BTC based on order details 
    authedClient.placeOrder(order, (error, response, data) => {
        if (error) {
            throw error
        }
        var orderid = data.id
        // console.log(data)
        // check order to make sure it is settled and grab data 
        authedClient.getOrder(orderid, (error, response, data) => {
            var orderSettled = data.settled
            if (error) {
                throw error
            };
            if (orderSettled === false) {
                while (orderSettled === false) {
                    console.log("1 time")
                    authedClient.getOrder(orderid, (error, response, data) => {
                        if (error) {
                            throw error;
                        }
                        orderSettled = data.settled
                    });
                };
            }
            else {
                // if settled grab the funds - grab the executed_value - console it
                // grab the fill_size - console it - this gives you the amount of crypto you have 
                // grab the fill_fees - console it 
                buyDetails.executedValue = data.executed_value;
                buyDetails.fees = data.fill_fees;
                buyDetails.cryptoAmount = data.filled_size;
                // console.log(data)
                console.log("--------BUY DETAILS--------------")
                console.log("user original amount to exchange: ", userExchange.amount)
                console.log(buyDetails)
                console.log(data)

                var order = {
                    side: 'sell',
                    type: 'market',
                    size: buyDetails.cryptoAmount,
                    product_id: `BTC-${userExchange.desiredCurrency}`,
                }
                console.log("--------------SELL ORDER-----------")
                console.log(order)

                authedClient.placeOrder(order, (error, response, data) => {
                    if (error) {
                        throw error
                    }
                    var orderid = data.id

                    authedClient.getOrder(orderid, (error, response, data) => {
                    //    console.log(data)
                       var orderSettled = data.settled
                       if (error) {
                           throw error
                       };
                       if (orderSettled === false) {
                           while (orderSettled === false) {
                               console.log("1 time")
                               authedClient.getOrder(orderid, (error, response, data) => {
                                   if (error) {
                                       throw error;
                                   }
                                   orderSettled = data.settled
                               });
                           };
                       }
                       else {
                           // if settled grab the funds - grab the executed_value - console it
                           // grab the fill_size - console it - this gives you the amount of crypto you have 
                           // grab the fill_fees - console it 
                           sellDetails.executedValue = data.executed_value;
                           sellDetails.fees = data.fill_fees;
                           sellDetails.cryptoAmount = data.filled_size;
                           // console.log(data)
                           console.log("--------Sell DETAILS--------------")
                           console.log("user original amount to exchange: ", userExchange.amount)
                           console.log(sellDetails)
                           console.log(data)

                            // var transactionDetails = {
                            //     totalFees = parseFloat(buyDetails.fees) + parseFloat(sellDetails.fees)
                            // }

                           console.log("--------------Totals -------------")
                           console.log(`
                           Original Amount: ${userExchange.currentCurrency}${userExchange.amount}
                           User receives :${userExchange.desiredCurrency}${sellDetails.executedValue} 
                           ${userExchange.currentCurrency}fees: ${buyDetails.fees}
                           ${userExchange.desiredCurrency}fees: ${sellDetails.fees}`)
                       }

                    });

                });


            };

        });

    });
};

exchange();
// authedClient.getOrder('b5889987-0ad3-4ed7-b8a2-903ccf7949ff', (error, response, data) => {
//     if (error) {
//         throw error
//     };


//     console.log(data)
// });



// check order to make sure it was settled (settled is true)
// if false keep checking to see if it was settled 
// 
// Sell the purchased BTC (fill-size) - sell it for the desired currency 
// run function to see if it was settled and grab the same stuff as above 
// the executed value is what the user is going to get 
// Show the current currency and amount, the desired currency and amonunt, the total fees 
//  compare the desired currency amount to actual exchange rate % 
// specified funds - if specified thats what it is 
// executed value + fees will give you a speficied funds amount 
// to buy or sell by BTC specify a size instead of funds 
// filled size will gie you the amount of crypto you have 

// authedClient.getProductTicker('BTC-USD', (error,response,data)=>{
//           if (error){
//               throw error
//           }
//           console.log(data)
//       } );

// console.log(authedClient)

// Deposit to your Exchange USD account from your Coinbase USD account.
// const depositParamsUSD = {
//     amount: '20000.00',
//     currency: 'USD',
//     coinbase_account_id: 'ef1dec8c-69c4-4f70-be32-f5a8cd263464', // USD Coinbase Account ID

// };
//   authedClient.deposit(depositParamsUSD, (error,response,data)=>{
//       if (error){
//           throw error
//       }
//       console.log(data)
//   } );

// var order = {
//     side: 'buy',
//     type: 'market',
//     price: '10000.00', // USD
//     size: '1', // BTC
//     product_id: 'BTC-USD',
// }





    // var orderID = '1308a935-0add-4f88-bf8e-28f6d31cc5f7'



// authedClient.getAccounts((error, response, data)=>{
//     if(error){
//         throw error
//     }

//     console.log(data)
// })


// Web Socket Test 
// const websocket = new Gdax.WebsocketClient(['BTC-USD', 'ETH-USD']);

// websocket.on('message', data => {
//  console.log(data)
// });
// websocket.on('error', err => {
//     console.log(err)
// });
// websocket.on('close', () => {
//   /* ... */
// });


