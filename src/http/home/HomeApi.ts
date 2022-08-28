import ApiClient from '../ApiClient'
import testData from '../testData'

export default class HomeApi {
    static getImg(): Promise<any> {
        // return ApiClient.server().get(`/query/imgs`, {})
        //   .then((res: any) => {
        //     return res.data
        //   })
        return new Promise((resolve) => {
            setTimeout(() => {
                var data = testData.getImgs()
                var res ={
                    status: 200,
                    success: true,
                    data: data
                }
                resolve(res)
            }, 200)
        })
      }
}