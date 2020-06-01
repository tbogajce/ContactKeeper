const express = require('express');
const router = express.Router();

// @route       POST api/users
// @desc        Register a user
// @access      Public
router.post('/', (req, res) => {
    res.send('Register a user');
});

// We have to export the router in order for this to work
module.exports = router;
