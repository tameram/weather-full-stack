const express = require('express')
const router = express.Router()

const City = require("../model/City")
const APIKEY = 'c2176abe1c13e806283f16c7681d21de'
// https://api.openweathermap.org/data/2.5/weather?q=jerusalem&appid=c2176abe1c13e806283f16c7681d21de
//=jerusalem&appid=c2176abe1c13e806283f16c7681d21de
const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q'

const searchCity  = cityName =>{
    
}

router.get('/city/:cityName' , function(req , res){

})

module.exports = router