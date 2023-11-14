// --------------------------------------------------------
// 商品モデル
// --------------------------------------------------------
const fs = require('fs');
const { parse } = require('csv-parse/sync');
const { stringify } = require('csv-stringify/sync');
const file = __dirname + '/../../../data/items.csv'

console.log(file)

const getAll = () => {
    const content = fs.readFileSync(file).toString();
    return parse(content, { columns: true });
}

const insertItem = (item) => {
    const items = getAll()

    items.push({
        'id': items.length + 1,
        ...item,
        'createdAt': (new Date()).toLocaleString()
    })

    content = stringify(items,
        { header: true, columns: [{ key: 'id' }, { key: 'name' }, { key: 'price' }, { key: 'quantity' }, { key: 'createdAt' }] }
    )

    fs.writeFileSync(file, content)

    return item
}

module.exports = { getAll, insertItem }