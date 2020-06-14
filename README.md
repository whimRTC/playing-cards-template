# playing-cards-template

## 概要
wh.im上でのトランプゲームのVue.jsによるテンプレートです。
- カードを全員に配る
- 順番をランダムに決める
- 順番に一人ずつターンを回す
- 現在のターンのプレイヤーを枠で囲う
- 場にカードを出し、ターンを次の人に移す。
などの基本的な動作が実装されています。ご自由に真似していただいて構いません！

## 起動
``` 
yarn
yarn serve
``` 

## 起動(Docker)
```
docker build --tag app:latest . 
docker run -it -v $PWD:/template -p 3001:3001 app:latest
```

## ドキュメント・質問
実装を見てわからないところがあれば、ドキュメントを確認してみてください！
- https://docs.wh.im/developer

またわからないところがあれば、質問も大歓迎です！
- https://groups.google.com/forum/?hl=ja#!forum/whim-developer
