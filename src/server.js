// --------------------------------------------------------
// サーバー起動
// --------------------------------------------------------
var app = require('./app/app.js')

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})