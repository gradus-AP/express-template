# express template

## description

express製商品管理アプリ

## install && start

```
git clone <repository url>
```

サーバーを起動し, `http://localhost:3000/static/index.html`にアクセス.

```
cd express-template
npm run start
```

## API

| endpoint          | 説明           | サンプル                                                                                                                                   |
| ----------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `GET /api/items`  | 商品一覧の取得 | `curl 'http://localhost:3000/api/items'`                                                                                                   |
| `POST /api/items` | 商品登録       | `curl -X POST -H "Content-Type: application/json" -d '{"name":"sausage", "price":"600", "quantity": "3"}' http://localhost:3000/api/items` |

## CSV

商品情報は`data/items.csv`に保存されます. 以下は, 商品情報の保存内容の例です.

```csv
id,name,price,quantity,createdAt
1,pizza,1000,10,2023/11/13 20:04:21
2,french fries,400,5,2023/11/13 20:09:26
3,coke,250,5,2023/11/13 20:09:47
```