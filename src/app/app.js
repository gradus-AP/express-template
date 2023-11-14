// --------------------------------------------------------
// アプリケーション設定
// --------------------------------------------------------
const express = require('express')
const app = express()
const itemsRoutes = require('./routes/api/items.js')

// --------------------------------------------------------
// ルート設定
// --------------------------------------------------------
app.use('/static', express.static(__dirname + '/../../public'));
app.use(express.json());
app.use('/api/items', itemsRoutes)

module.exports = app