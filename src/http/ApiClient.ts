/* eslint-disable @typescript-eslint/camelcase */
import Config from '@/config'
import Fly from 'flyio/dist/npm/wx.js'


function create() {
  const fly = new Fly()
  fly.config.baseURL = Config.BASE_URL
  fly.config.timeout = 15 * 1000
  // 请求拦截
  fly.interceptors.request.use((request: any) => {
    // 根据get模型中多包了层params，做特殊处理
    if (request.method === 'GET') {
      if (Object.keys(request.body).length > 0) {
        const keys = Object.keys(request.body)
        if (keys.includes('params')) {
          request.body = request.body['params']
        }
      }
    }
    request.headers['Content-Type'] = 'application/json'

    return request
  })
  // 返回拦截
  fly.interceptors.response.use(
    function(response: any) {
      // #ifdef MP-DINGTALK
      if (typeof response.data == 'string') {
        try {
          const obj = JSON.parse(response.data)
          if (typeof obj == 'object' && obj) {
            response.data = {
              data: obj
            }
          }
        } catch (e) {
          console.log(e)
        }
      }
      // #endif
      if ((response.data && response.data.success) || (!response.data.success && response.data.code === 500001)) {
        response.data = {
          data: response.data
        }
        return Promise.resolve(response.data)
      }

      const error = new Error()
      if (response.data.success || (!response.data.success && response.data.code === 500001)) {
        return response
      } else if (response.data.msg) {
        error.message = response.data.msg
      } else if (response.data.message) {
        error.message = response.data.message
      } else {
        error.message = response.status + '服务器内部异常-' + response.data.code
      }
      ;(error as any).response = response.data
      return Promise.reject(error)
    },
    function(error: any) {
      if (!error.status) {
        error.message = '请检查网络设置'
        return Promise.reject(error)
      }
      switch (error.status) {
        case 1:
          error.message = '网络超时!'
          break
        case 401:
          uni.showToast({ title: '登录已过期,请重新登录!', icon: 'none' })
          uni.reLaunch({ url: '/pages/auth/Login' })
          break
        case 403:
          error.message = '禁止访问!'
          break
        case 503:
          error.message = '服务器升级中!'
          break
        case 500:
          error.message = '服务内部异常!'
          break
        default:
          error.message = '未知错误'
      }
      return Promise.reject(error)
    }
  )

  return fly
}

export default {
  server: function() {
    return create()
  }
}
