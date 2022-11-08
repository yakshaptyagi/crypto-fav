const router = require('express').Router();
const { addFavorite, getFavorite, removeFavorite} = require('../Controller/FavController');


router.post('/addfav', addFavorite);
router.get('/getfav', getFavorite);
router.put('/removefav', removeFavorite);

module.exports ={ router};
