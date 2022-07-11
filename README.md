# README
## Installation Requirements

- Node.js >= v16.x
- yarn >= v1.x

## Install

```
yarn install
```

## Run

```
yarn start
```

### Coding Guideline
- Hạng mục này giải thích về guideline của các ngôn ngữ

### HTML(JSX)
- Không thiết lập giới hạn trong cách xắp xếp - xử lý HTML.
- Chọn Tag, thuộc tính chính xác và phù hợp với bối cảnh rồi markup (đánh dấu).

### React
- Không giới hạn số lượng các component.
- Chỉ hoàn thành "src/App.jsx" cũng được, và phân chia bằng độ chính xác thích hợp là OK.

### CSS(SCSS)
- Đã tải/đọc [ress] bằng [src/index.jsx] để reset lại Defaut CSS của các browser.
- Bạn có thể gỡ bỏ nếu cảm thấy không cần thiết trong công việc hoặc cũng có thể sử dụng reset CSS riêng đang được công khai cũng không sao.
- Vì Autoprefixrer có hiệu lực cho nên không cần phải viết tiếp đầu ngữ(prefix) Vendor. 
- Không chỉ định quy tắc đặt tên Selector. Bạn có thể giới thiệu phương pháp thiết kế như là SMACSS hoặc ECSS.

### JavaScript
- Vì Babel có hiệu lực cho nên có thể mô tả bằng tiêu chuẩn từ ES2015 trở đi.
- Không giới hạn cách viết. Nếu thấy không xuất hiện lỗi ở Console của Browser thì viết như thế nào cũng được.
- Sau khi thực hiện UI component, nếu như sử dụng Frame Work hoặc Library đang được công khai mà nhanh hơn thì bản thân tự phán đoán rồi thêm vào cũng không sao.

### Image
Phương pháp chèn hình ảnh thì có ví dụ ở src/App.jsx
hello.png là hình ảnh mẫu (sample), cho nên bạn có thể xóa đi cũng được.



# README

## Installation Requirements

- Node.js >= v16.x
- yarn >= v1.x

## Coding Guideline

この項では各言語のガイドラインについて説明していきます。

### HTML(JSX)

- HTML の組み方に制約は設けていません。
- 文脈に合った正しいタグ、属性を選択しマークアップを行ってください。

### React

- コンポーネントの数に制限はありません。
- `App.jsx` だけで完結しても良いですし、最適な粒度で分割してもらっても構いません。

### CSS(SCSS)

- 各ブラウザのデフォルト CSS をリセットするのに [ress](https://github.com/filipelinhares/ress) を `src/index.jsx` で読み込んでいます。
  - 作業上必要ないようであれば外してもらってもよいですし、公開されている別のリセット CSS を使ってもらっても構いません。
- Autoprefixer が有効なため、ベンダー接頭辞を書く必要はありません。
- セレクタの命名規則の指定はありません。SMACSS や ECSS のような設計手法を導入してもよいです。

### JavaScript

- Babel が有効なため、ES2015 以降の仕様で記述可能です。
- 書き方に制限はありません。ブラウザのコンソールにエラーが出ないようであれば、どのように書いても問題ありません。
- UI コンポーネントを実装する上で、公開されているフレームワークやライブラリを活用したほうが早い場合、各自の判断で追加してもらって構いません。

### Image

- 画像の挿入方法は `src/App.jsx` に例があります。
  - hello.png はサンプル画像ですので、消してしまって構いません。
