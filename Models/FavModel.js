const mongoose = require('mongoose');

const favSchema = mongoose.Schema({
    _id:{
        type: String,
        require: true
    },
    favArr:[
        {
            name: String,
            image: String,
            current_price: String,
            price_change_percentage_24h: String,
            market_cap: String

        }
    ]
})

module.exports = mongoose.model('FavModel', favSchema, 'FavDB');