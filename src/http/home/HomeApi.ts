import ApiClient from '../ApiClient'
import MockHandle from '@/mock/MockHandle'

export default class HomeApi {
  static getImg(): Promise<any> {
    // return ApiClient.server().get(`/query/imgs`, {})
    //   .then((res: any) => {
    //     return res.data
    //   })
    return new Promise((resolve) => {
      setTimeout(() => {
        var data = MockHandle.getImgs()
        var res = {
          status: 200,
          success: true,
          data: data
        }
        resolve(res)
      }, 200)
    })
  }

  static getMoreImg(number: number = 5): Promise<any> {
    // return ApiClient.server().get(`/query/imgs`, {})
    //   .then((res: any) => {
    //     return res.data
    //   })
    return new Promise((resolve) => {
      setTimeout(() => {
        var data = MockHandle.getRandowImgs(number)
        var res = {
          status: 200,
          success: true,
          data: data
        }
        resolve(res)
      }, 200)
    })
  }
}
