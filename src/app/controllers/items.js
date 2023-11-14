// --------------------------------------------------------
// 商品Controller
// --------------------------------------------------------
const { getAll, insertItem } = require('../models/items')

const getItems = (req, res) => {
    const items = getAll()
    res.json(items)
}

const createItem = ((req, res) => {
    const newItem = {
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity
    }
    insertItem(newItem)
    res.status(201).json(newItem)
})

module.exports = { getItems, createItem}