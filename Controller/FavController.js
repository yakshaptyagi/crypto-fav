const FavModel = require('../Models/FavModel');

function addFavorite(req, res) {
    FavModel.findOne({ _id: req.body._id }, (err, data) => {
        if (!data) {
            const favData = new FavModel({
                _id: req.body._id,
                favArr: [{
                    name: req.body.name,
                    image: req.body.image,
                    current_price: req.body.current_price,
                    price_change_percentage_24h: req.body.price_change_percentage_24h,
                    market_cap: req.body.market_cap
                }]
            })
            favData.save((err) => {
                if (!err) {
                    res.status(200).send("data added to the favourites");
                }
                else {
                    throw err;
                }
            })

        }
        else if (data) {
            FavModel.findOneAndUpdate({ _id: req.body._id }, { $push: { favArr: { name: req.body.name, image: req.body.image, current_price: req.body.current_price, price_change_percentage_24h: req.body.price_change_percentage_24h, market_cap: req.body.market_cap } } }, (err, data) => {
                if (!err) {
                    res.status(200).send("data added to the favourites");
                }
                else {
                    throw err;
                }
            })
        }
    })
}

function getFavorite(req, res) {
    FavModel.findOne({ _id: req.query._id }, (err, data) => {
        if (!err) {
            res.status(200).send(data);
            
        }
        else if (err) {
            throw err;
        }

        else {
            res.send("no data found");
            
        }
    })
}

function removeFavorite(req, res) {
    FavModel.findOneAndUpdate({ _id: req.body._id }, { $pull: { favArr: { name: req.body.name } } }, (err, data) => {
        if (!err) {
            res.status(200).send(data);
        }
        else {
            throw err;
        }
    })
}

module.exports = { addFavorite, getFavorite, removeFavorite };

