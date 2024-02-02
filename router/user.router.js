const express = require('express');
const { saveUser } = require('../db/db');

const router = express.Router();

router.post('/register', (req, res, next) => {
    // finduser
    // if user exists
    // return response that says Email exists try loggin in
    // else
    // encrypt password
    // set the password with encrypted password
    // save the user to the database
    // saveUser(newUser);
});

router.post('/login', (req, res, next) => {});