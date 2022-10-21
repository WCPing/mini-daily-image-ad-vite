import { useImgStore } from '@/store'
import config from '@/config'
import log from '@/components/log/log.js'

export default {
  setup() {
    const imgStore = useImgStore()
    const version = config.VERSION

    const doJumpToCollect = () => {
      const { imgs } = imgStore
      console.log(imgs)
    }

    const onAdLoad = () => {
      console.log('onload')
      log.info('[mine page: banner ad onload]')
    }

    const onAdClose = (e: any) => {
      console.log('onclose: ' + e.detail)
      log.info('[mine page: banner ad onclose:] ' + e.detail)
    }

    const onAdError = (e: any) => {
      console.log('onerror: ' + e.detail.errCode + ' message:: ' + e.detail.errMsg)
      log.info('[mine page: banner ad onerror]: ' + e.detail.errCode + ' ,message: ' + e.detail.errMsg)
    }

    return {
      doJumpToCollect,
      onAdLoad,
      onAdClose,
      onAdError,
      version
    }
  }
}
