const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.json(
        [
            {
                name: 'hadiul',
                id: '01',
                address: 'Rajshahi'
            },
            {
                name: 'Bithi',
                id: '02',
                address: 'Dhaka'
            },
            {
                name: 'Asha',
                id: '03',
                address: 'Tangail'
            },
            {
                name: 'Munmun',
                id: '04',
                address: 'Gazipur'
            },
    ]
    )
})

module.exports = router;