const express = require('express')
const router = express.Router()
const axios = require('axios')

let count
axios.get('https://api.sampleapis.com/rickandmorty/locations')
.then(res => count = res.data.length)


//localhost:3000/locatonsRoutes
router.get('/', (req, res) => {
    const url = 'https://api.sampleapis.com/rickandmorty/locations'

    axios.get(url).then(response => {
        res.render('pages/location', {
            title: 'location',
            name: 'location',
            data: response.data,
            path: 'locations'
        })
    })
})

//single page
// localhost:3000/locations${id}

router.get('/:id', (req, res)=> {
    const id = req.params.id

    const url = `https://api.sampleapis.com/rickandmorty/locations/${id}`

    axios.get(url).then(resp => {
        const data = resp.data
        res.render('pages/locationSingle', {
            title: data.title,
            name: data.name,
            data: data,
            path: 'locations',
            count
        })
    })
})

module.exports = router