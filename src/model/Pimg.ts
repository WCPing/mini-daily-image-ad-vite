interface Img {
  id: null | string
  type?: string
  tag?: Array<string>
  url: string
  title?: string
  subTitle?: string
  topic?: string
  recommend?: boolean,
  collected?: boolean,
  createDate?: Date,
  collectDate?: null | Date
}

export default class Pimg implements Img {
    id: null | string = null
    type: string = ''
    url: string = ''
    tag?: Array<string>
    title?: string
    subTitle?: string
    topic?: string
    recommend?: boolean = false
    collected?: boolean = false
    createDate?: Date
    collectDate?: null | Date
}