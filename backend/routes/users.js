const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users)) //returns in json format
    .catch(err => res.status(400).json('Error: ' + err)); //returns a status 400 if error occurs
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!')) //after user added to dB
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; //standard code for exporting router