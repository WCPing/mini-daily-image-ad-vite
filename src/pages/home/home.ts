import { onLoad, onPullDownRefresh } from '@dcloudio/uni-app'
import { ref, getCurrentInstance, onMounted, computed } from 'vue'
import HomeApi from '@/http/home/HomeApi'
import { useImgStore } from '@/store'
import { storeToRefs } from 'pinia'
import Pimg from '@/model/Pimg'
import MImage from '@/components/MImage.vue'

export default {
  components: { MImage },
  setup() {
    const instance = getCurrentInstance() // 获取组件实例
    const animation = ref<UniNamespace.Animation | null>(null)
    const viewHeight = ref(0)
    const imgList = ref<Array<any>>([])
    const oldId = ref(-1)
    const startPage = ref(0)
    const animationData = ref({})
    const viewIndex = ref(0)

    const imgStore = useImgStore()
    const { imgs } = storeToRefs(imgStore)

    const getBackUrl = computed(() => (url: string) => {
      return `url(${url})`
    })

    const ifCollect = computed(() => (collected: boolean) => {
      return collected ? '/static/icons/ic_collected.png' : '/static/icons/ic_collect.png'
    })

    onLoad(() => {
      getImags()
    })

    onMounted(() => {
      getViewHeight()
    })

    // 下拉刷新
    onPullDownRefresh(() => {
      getImags()
    })

    const onTouchstart = (e: any) => {
      const { touches } = e
      const { pageY } = touches[0]
      startPage.value = pageY
    }

    // 滑动结束
    const onTouchEnd = (e: any) => {
      const { changedTouches } = e
      const { pageY } = changedTouches[0]
      const diff = pageY - startPage.value

      if (Math.abs(diff) <= 30) {
        console.log('不触发')
        return
      }

      if (diff > 0) {
        setAni(1)
      } else if (diff == 0) {
        setAni(0)
      } else {
        setAni(-1)
      }
    }

    // 获取图片
    const getImags = () => {
      HomeApi.getImg().then((res: any) => {
        const newImgs = res.data || []
        imgList.value = newImgs
      })
    }

    // 获取更多图片
    const getMoreImgs = () => {
      HomeApi.getMoreImg().then((res: any) => {
        const newImgs = res.data || []
        imgList.value.push(...newImgs)
        // 自动翻下一张
        setAni(-1)
      })
    }

    // 滑动动画 0 不移动 -1 上拉 1 下拉
    const setAni = async (status: number) => {
      if (status == 0) return false

      if (!animation.value) {
        animation.value = uni.createAnimation({
          duration: 500,
          timingFunction: 'ease'
        })
      }

      if (!viewHeight) {
        await getViewHeight()
      }

      // 计算位移
      let moveY = 0
      let nowIndex = viewIndex.value
      status > 0 ? nowIndex-- : nowIndex++

      // 到顶部了
      if (nowIndex < 0) {
        // uni.showToast({ title: '到头啦' })
        return
      }

      // 到底了
      if (nowIndex == imgList.value.length) {
        // uni.showToast({ title: '到底了哦' })
        getMoreImg()
        return
      }

      moveY = -1 * nowIndex * viewHeight.value
      animation.value.translateY(moveY).step()
      // getImage(nowIndex)
      animationData.value = animation.value.export()
      viewIndex.value = nowIndex
    }

    const getMoreImg = () => {
      uni.showLoading({ title: '刷新内容中' })
      setTimeout(() => {
        uni.hideLoading()
        getMoreImgs()
      }, 500)
    }

    // 获取dom高度
    const getViewHeight = () => {
      return new Promise((resolve) => {
        // const query = uni.createSelectorQuery().in(instance)
        // query.select('.ani-box').boundingClientRect()
        // query.exec(function (res) {
        //   if (res.length && res[0]) {
        //     viewHeight.value = res[0].height
        //     resolve(viewHeight)
        //   }
        // })
        uni.getSystemInfo({
          success: function (res) {
            viewHeight.value = res.screenHeight
            resolve(viewHeight)
          }
        })
      })
    }

    const handleError = (e: any) => {
      console.log(e)
    }

    const doDownloadImg = (url: string) => {
      // todo 下载或收藏需先判断有没有获取用户信息，以便入库
      checkPermissions(downLoadIm(url))
    }

    const downLoadIm = (imgUrl: string) => {
      if (!imgUrl) {
        console.log('图片获取失败，请稍后再试')
        return
      }
      uni.showLoading({
        title: '图片获取中...'
      })
      //图片保存到本地
      uni.downloadFile({
        url: imgUrl, //图片地址
        success(downres) {
          // 保存图片到相册
          uni.saveImageToPhotosAlbum({
            filePath: downres.tempFilePath,
            success(res) {
              uni.hideLoading()
              uni.showToast({
                icon: 'success',
                title: '已保存到相册'
              })
            },
            fail(err) {
              uni.hideLoading()
              if (
                err.errMsg === 'saveImageToPhotosAlbum:fail:auth denied' ||
                err.errMsg === 'saveImageToPhotosAlbum:fail auth deny' ||
                err.errMsg === 'saveImageToPhotosAlbum:fail authorize no response'
              ) {
                // 这边微信做过调整，必须要在按钮中触发，因此需要在弹框回调中进行调用
                uni.showModal({
                  title: '提示',
                  content: '请授权保存到相册',
                  showCancel: false,
                  success() {
                    uni.openSetting({
                      success(openres) {
                        console.log('openres', openres)
                        if (openres.authSetting['scope.writePhotosAlbum']) {
                          console.log('获取权限成功，再次点击图片即可保存')
                        } else {
                          console.log('获取权限失败，无法保存到相册哦~')
                        }
                      },
                      fail(failerr) {
                        console.log('failerr', failerr)
                      }
                    })
                  }
                })
              }
            }
          })
        },
        fail() {
          uni.hideLoading()
          uni.showToast({
            icon: 'error',
            title: '下载失败，请稍后再试'
          })
        }
      })
    }

    // 检查是否有权限
    const checkPermissions = (callback?: any) => {
      let that = this
      // 获取用户是否开启 授权保存图片到相册。
      uni.getSetting({
        success(res) {
          // console.log('已知权限',res)
          // 如果没有授权
          if (!res.authSetting['scope.writePhotosAlbum']) {
            // 则拉起授权窗口
            uni.authorize({
              scope: 'scope.writePhotosAlbum',
              success() {
                //点击允许后--就一直会进入成功授权的回调 就可以使用获取的方法了
                callback && callback()
              },
              fail(error) {
                //点击了拒绝授权后--就一直会进入失败回调函数--此时就可以在这里重新拉起授权窗口
                console.log('拒绝授权则拉起弹框', error)
                uni.showModal({
                  title: '提示',
                  content: '若点击不授权，将无法保存图片',
                  cancelText: '不授权',
                  cancelColor: '#999',
                  confirmText: '授权',
                  confirmColor: '#f94218',
                  success(res) {
                    console.log(res)
                    if (res.confirm) {
                      // 选择弹框内授权
                      uni.openSetting({
                        success(res) {
                          console.log(res.authSetting)
                        }
                      })
                    } else if (res.cancel) {
                      // 选择弹框内 不授权
                      console.log('用户点击不授权')
                    }
                  }
                })
              }
            })
          } else {
            // 有权限--直接保存
            console.log('有权限  直接调用相应方法')
          }
        },
        fail: (error) => {
          console.log('调用微信的查取权限接口失败，并不知道有无权限!只有success调用成功才只知道有无权限', error)
          uni.showToast({
            title: error.errMsg,
            icon: 'none',
            duration: 1500
          })
        }
      })
    }

    const doCollectImg = (img: Pimg) => {
      // todo 下载或收藏需先判断有没有获取用户信息，以便入库
      if (!img.collected) {
        // 未收藏， 添加收藏
        img.collectDate = new Date()
        img.collected = true
        imgStore.collectImg(img)
        uni.showToast({
          icon: 'success',
          title: '收藏成功'
        })
      } else {
        // 已收藏， 删除收藏
        img.collectDate = null
        img.collected = false
        imgStore.cancelCollect(img)
        uni.showToast({
          icon: 'success',
          title: '已取消收藏'
        })
      }
    }

    // 去我的页面
    const doJumoToMine = () => {
      // 需判断用户有没有授权信息
      // uni.navigateTo({ url: '/pages/mine/mine' })
    }

    // 图片预加载， 用默认图片占位
    // https://www.jianshu.com/p/9c01b944bebb

    return {
      imgList,
      animationData,
      onTouchstart,
      onTouchEnd,
      getBackUrl,
      ifCollect,
      handleError,
      doDownloadImg,
      doCollectImg,
      doJumoToMine
    }
  }
}
