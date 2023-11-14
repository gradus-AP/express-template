// --------------------------------------------------------
// パス　'/api/items' のルート設定
// --------------------------------------------------------
const express = require('express')
const router = express.Router()

const { getItems, createItem } = require('../../controllers/items.js')

router.get('/', getItems)

// router.get('/:id', getItem)

router.post('/', createItem)

module.exports = router