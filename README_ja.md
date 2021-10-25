# remark-qrcode

Markdown 内の画像またはリンクの URL 等を QR Code へ変換する [remark](https://remark.js.org/) プラグイン。

## Install

npm:

```
npm install remark-qrcode
```

## Usage

code:
```typescript
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import stringify from 'remark-stringify'
import { remarkQRCode } from '@hankei6km/remark-qrcode'

const f = async (markdown: string): Promise<string> => {
  return await unified()
    .use(remarkParse)
    .use(remarkQRCode)
    .use(stringify, {})
    .freeze()
    .process(markdown)
    .then(
      (file) => {
        return String(file)
      },
      (error) => {
        throw error
      }
    )
}

console.log(f('# title1\n\n![alt1](qrcode:test1)\ntext1')
```

yield
```markdown
# title1

![alt1](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAA ...snip ...=)
text1

```

## License

MIT License

Copyright (c) 2021 hankei6km

QR コードの商標はデンソーウェーブの登録商標です。

