const express = require('express')
const router = express.Router()
const axios = require('axios')

router.use(express.static('public'))

const characterRoutes = require('./api/charRoutes')
router.use('/characters', characterRoutes)


//home
router.get('/', (req, res) => {
    res.render('pages/home', {
        title: 'Rick and Morty',
        name: 'Cartoon',
    })
})


module.exports = router