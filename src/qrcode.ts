import { Plugin, Transformer } from 'unified'
import { Node } from 'unist'
import { Root } from 'mdast'
import { toImageDataURL } from 'mdast-qrcode'

export const remarkQRCode: Plugin = function rehypeImageSalt(): Transformer {
  return async function transformer(tree: Node): Promise<void> {
    await toImageDataURL(tree as Root)
  }
}
