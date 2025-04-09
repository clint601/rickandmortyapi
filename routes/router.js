const express = require('express')
const router = express.Router()
const axios = require('axios')

router.use(express.static('public'))

const characterRoutes = require('./api/charRoutes')
router.use('/characters', characterRoutes)

const episRoutes = require('./api/episodeRoutes')
router.use('/episodes', episRoutes)

const locRoutes = require('./api/locationRoutes')
router.use('/locations', locRoutes)


//home
router.get('/', (req, res) => {
    res.render('pages/home', {
        title: 'Rick and Morty',
        name: 'Cartoon',
    })
})


module.exports = router