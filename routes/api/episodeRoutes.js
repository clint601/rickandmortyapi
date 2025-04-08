const express = require('express')
const router = express.Router()
const axios = require('axios')

let count
axios.get('https://api.sampleapis.com/rickandmorty/episodes')
.then(res => count = res.data.length)


//localhost:3000/episodeRoutes
router.get('/', (req, res) => {
    const url = 'https://api.sampleapis.com/rickandmorty/episodes'

    axios.get(url).then(response => {
        res.render('pages/episodes', {
            title: 'episodes',
            name: 'episodes',
            data: response.data,
            path: 'episodes'
        })
    })
})

//single page
// localhost:3000/episodes${id}

router.get('/:id', (req, res)=> {
    const id = req.params.id

    const url = `https://api.sampleapis.com/rickandmorty/episodes/${id}`

    axios.get(url).then(resp => {
        const data = resp.data
        res.render('pages/episodesSingle', {
            title: data.title,
            name: data.name,
            data: data,
            path: 'episodes',
            count
        })
    })
})

module.exports = router