const express = require('express')
const router = express.Router()
const axios = require('axios')

let count
axios.get('https://api.sampleapis.com/rickandmorty/characters')
.then(res => count = res.data.length)

router.get('/type/:type', (req, res)=> {
    const type = req.params.type
    const url = 'https://api.sampleapis.com/rickandmorty/characters'

    let typeArr

    axios.get(url)
    .then(resp => typeArr = resp.data.filter(item => item.type == type))
    .then(typeArr => {
        res.render('pages/characters', {
            title: type,
            name: `${type} characters`,
            data: typeArr
        })
    })

})




//localhost:3000/characters
router.get('/', (req, res) => {
    const url = 'https://api.sampleapis.com/rickandmorty/characters'

    axios.get(url).then(response => {
        res.render('pages/characters', {
            title: 'Characters',
            name: 'Cartoons',
            data: response.data,
            path: 'characters'
        })
    })
})

//single page
// localhost:3000/characters${id}

router.get('/:id', (req, res)=> {
    const id = req.params.id

    const url = `https://api.sampleapis.com/rickandmorty/characters/${id}`

    axios.get(url).then(resp => {
        const data = resp.data
        res.render('pages/charactersSingle', {
            title: data.title,
            name: data.name,
            data: data,
            path: 'characters',
            count
        })
    })
})




module.exports = router