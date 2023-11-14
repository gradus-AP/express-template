
/**
 * apiからデータの取得 && 表示
 */
function fetchData() {
    // APIのエンドポイントを指定
    const apiUrl = 'http://localhost:3000/api/items';

    // fetchを使用してAPIからデータを取得
    fetch(apiUrl)
        .then(response => response.json()) // レスポンスをJSONに変換
        .then(data => {
            // 取得したデータを表示するHTML要素を取得
            const resultElement = document.getElementById('result');

            if(!resultElement) return;

            // データをHTMLに表示
            resultElement.innerHTML = !data ?
                '<p>データがありません</p>' : data.map(item => {
                    return `<tr>
                    <th scope="row">${item.id}</th>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                    <td>${item.quantity}</td>
                    <td>${item.createdAt}</td>
                </tr>`
                }).join('\n')
        })
        .catch(error => {
            console.error('データの取得に失敗しました', error);
        });
}

/**
 * ページ遷移処理
 */
function pageTransition() {
    const transitionData = [
        { id: 'register', pagePath: 'register.html' },
        { id: 'cancel', pagePath: 'index.html' }
    ]

    transitionData.forEach(data => {
        const button = document.getElementById(data.id)
        if (button) {
            button.onclick = () => { location.href = data.pagePath }
        }
    })
}

// ページが読み込まれたときにデータを取得する
document.addEventListener('DOMContentLoaded', () => {
    fetchData()
    pageTransition()
});