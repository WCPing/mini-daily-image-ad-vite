import { useImgStore } from '@/store'
import config from '@/config'

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
    }

    const onAdClose = (e: any) => {
      console.log('onclose: ' + e.detail)
    }

    const onAdError = (e: any) => {
      console.log('onerror: ' + e.detail.errCode + ' message:: ' + e.detail.errMsg)
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
