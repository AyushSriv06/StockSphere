interface Order {
    price: number,
    quantity: number,
    orderId: string;
}

interface Bid extends Order {
    side: 'bid'
}

interface Ask extends Order {
    side: 'ask'
}

interface OrderBook {
    bids: Bid[],
    asks: Ask[]
}

export const orderbook: OrderBook = {
    bids: [


    ],
    asks: [


    ]
}

export const bookWithQuntity: {bids: {[price: number]:number}; asks: {[price: number]: number}} = {
    bids: {},
    asks: {}
}