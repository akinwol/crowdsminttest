// Accounts response

[{
    id: 'ec5ed15c-2ad4-4ed7-bcf1-b9353e284080',
    currency: 'BTC',
    balance: '3.4796942300000000',
    available: '3.47969423',
    hold: '0.0000000000000000',
    profile_id: 'd73f2fe8-9f1e-429b-b1ca-8ac2c90d69f1'
},
{
    id: 'ef1dec8c-69c4-4f70-be32-f5a8cd263464',
    currency: 'USD',
    balance: '114000.0000770754356000',
    available: '114000.0000770754356',
    hold: '0.0000000000000000',
    profile_id: 'd73f2fe8-9f1e-429b-b1ca-8ac2c90d69f1'
},
{
    id: '23408b4b-23db-4a99-9985-5aeb337507c8',
    currency: 'LTC',
    balance: '0.0000000000000000',
    available: '0',
    hold: '0.0000000000000000',
    profile_id: 'd73f2fe8-9f1e-429b-b1ca-8ac2c90d69f1'
},
{
    id: 'e204dc27-f1ff-4564-9043-c2e0018afb63',
    currency: 'GBP',
    balance: '0.0000000000000000',
    available: '0',
    hold: '0.0000000000000000',
    profile_id: 'd73f2fe8-9f1e-429b-b1ca-8ac2c90d69f1'
},
{
    id: 'cdc5b36b-3784-4a11-9001-c65416b4e54d',
    currency: 'EUR',
    balance: '0.0000000000000000',
    available: '0',
    hold: '0.0000000000000000',
    profile_id: 'd73f2fe8-9f1e-429b-b1ca-8ac2c90d69f1'
},
{
    id: 'e82bcffd-db59-4cc9-9211-a05ac1ae945e',
    currency: 'ETH',
    balance: '0.0000000000000000',
    available: '0',
    hold: '0.0000000000000000',
    profile_id: 'd73f2fe8-9f1e-429b-b1ca-8ac2c90d69f1'
},
{
    id: '9f2f9506-6915-4cdf-a151-39df219c88f0',
    currency: 'BCH',
    balance: '0.0000000000000000',
    available: '0',
    hold: '0.0000000000000000',
    profile_id: 'd73f2fe8-9f1e-429b-b1ca-8ac2c90d69f1'
}]


// Trade Response
buyTrade = {
    id: '1308a935-0add-4f88-bf8e-28f6d31cc5f7',
    product_id: 'BTC-USD',
    side: 'buy',
    stp: 'dc',
    funds: '9970.0897308000000000',
    specified_funds: '10000.0000000000000000',
    type: 'market',
    post_only: false,
    created_at: '2018-08-26T14:42:57.964842Z',
    fill_fees: '0.0000000000000000',
    filled_size: '0.00000000',
    executed_value: '0.0000000000000000',
    status: 'pending',
    settled: false
}

sellTrade = {
    id: 'd3be37cc-56cb-4b4b-a6ba-b144beffbc53',
    size: '4.80992817',
    product_id: 'BTC-USD',
    side: 'sell',
    stp: 'dc',
    funds: '5000.0000000000000000',
    specified_funds: '5000.0000000000000000',
    type: 'market',
    post_only: false,
    created_at: '2018-08-26T14:59:18.471106Z',
    fill_fees: '0.0000000000000000',
    filled_size: '0.00000000',
    executed_value: '0.0000000000000000',
    status: 'pending',
    settled: false
}

// Order Response
orderResponse = {
    id: '1308a935-0add-4f88-bf8e-28f6d31cc5f7',
    product_id: 'BTC-USD',
    side: 'buy',
    funds: '9970.0897308000000000',
    specified_funds: '10000.0000000000000000',
    type: 'market',
    post_only: false,
    created_at: '2018-08-26T14:42:57.964842Z',
    done_at: '2018-08-26T14:42:57.973Z',
    done_reason: 'filled',
    fill_fees: '29.9102691538818000',
    filled_size: '1.33023394',
    executed_value: '9970.0897179606000000',
    status: 'done',
    settled: true
}

sellResponse = {
    id: 'd3be37cc-56cb-4b4b-a6ba-b144beffbc53',
    size: '4.80992817',
    product_id: 'BTC-USD',
    side: 'sell',
    funds: '5000.0000000000000000',
    specified_funds: '5000.0000000000000000',
    type: 'market',
    post_only: false,
    created_at: '2018-08-26T14:59:18.471106Z',
    done_at: '2018-08-26T14:59:18.482Z',
    done_reason: 'filled',
    fill_fees: '14.9999998810572000',
    filled_size: '0.76041277',
    executed_value: '4999.9999603524000000',
    status: 'done',
    settled: true
}


// Product ticket response 
tickerResponse = { trade_id: 2122051,
    price: '6970.34000000',
    size: '0.01099960',
    bid: '6503.48',
    ask: '6900.65',
    volume: '168.46886527',
    time: '2018-08-26T18:51:39.722000Z' }