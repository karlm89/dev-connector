const express = require('express');
const router = express.Router();
const { check, validationResult} = require('express-validator');

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post('/',[
    // validation  Name
    check('name', 'Name is required')
        .not()
        .isEmpty(),
    // validation email
    check('email', 'Please include a valid email address')
        .isEmail(),
    check('password', 'Please enter a password with 6 or more characters')
        .isLength({
            min: 6
        })
], (req,res) => { 
    errors = validationResult(req); 
    if(!errors.isEmpty() ) {
        return res.status(400 ).json({ errors: errors.array() });
    }
    res.send('User created successfully');
});

    res.send('User route');
});

module.exports = router;