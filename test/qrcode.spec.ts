import { unified } from 'unified'
import remarkParse from 'remark-parse'
import stringify from 'remark-stringify'
import { remarkQRCode } from '../src/qrcode.js'

describe('remarkQRCode()', () => {
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

  it('should return count of content', async () => {
    expect(await f('#test\n\n![qrcode](qrcode:abcdef123456)')).toMatchSnapshot()
  })
})
