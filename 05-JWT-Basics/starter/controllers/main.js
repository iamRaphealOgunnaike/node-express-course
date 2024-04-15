const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) => {
    const {username, password} = req.body
   
    if(!username || !password){
        throw new CustomAPIError('Please provide email and password', 400)
    }
    console.log(username,password);
    res.send('Fake login/Register/Signup Route')
}

const dashboard = async (req, res) => {
    const luckNumber = Math.floor(Math.random() * 100)
    res.status(200).json({ msg: `Hello, John Doe `, secret: `Here is your authorized data, your lucky number is ${luckNumber}` })
}

module.exports={login, dashboard}