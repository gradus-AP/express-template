function postData() {
    // フォームのデータを取得
    const form = document.getElementById('myForm');
    const formData = new FormData(form);

    // APIのエンドポイントを指定
    const apiUrl = 'http://localhost:3000/api/items';

    console.log(form)

    // データをJSONに変換
    const jsonData = {};

    for (const [key, value] of formData) {
        jsonData[key] = value;
    }

    // POSTリクエストを送信
    fetch(apiUrl,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('APIからのレスポンス:', data);
            alert('登録成功')
            location.href = 'index.html'
        })
        .catch(error => {
            console.error('データの送信に失敗しました', error);
        });
}