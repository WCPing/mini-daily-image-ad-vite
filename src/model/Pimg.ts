interface Img {
  id: null | string
  type?: string
  tag?: Array<string>
  url: string
  title?: string
  subTitle?: string
  topic?: string
  recommend?: boolean
}

export default class Pimg implements Img {
    id: null | string = null
    recommend: boolean = false
    url: string = ''
}