import { onLoad } from '@dcloudio/uni-app'
import { ref, getCurrentInstance, onMounted, computed } from 'vue'
export default {
  setup() {
    const instance = getCurrentInstance() // 获取组件实例
    const animation = ref<UniNamespace.Animation | null>(null)
    const viewHeight = ref(0)
    const imgList = ref<Array<any>>([])
    const oldId = ref(-1)
    const startPage = ref(0)
    const animationData = ref({})
    const viewIndex = ref(0)

    const onTouchstart = (e: any) => {
      const { touches } = e
      const { pageY } = touches[0]
      startPage.value = pageY
    }

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

    const getBackUrl = computed(() => (url: string) => {
      return `url(${url})`
    })

    onLoad(() => {
      imgList.value = [
        {
          id: 1,
          src: 'https://c-ssl.dtstatic.com/uploads/blog/202109/17/20210917215327_c46ce.thumb.1000_0.jpeg'
        },
        {
          id: 2,
          src: 'https://c-ssl.dtstatic.com/uploads/blog/202010/02/20201002033539_c24ce.thumb.1000_0.jpg'
        },
        {
          id: 3,
          src: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg'
        },
        {
          id: 4,
          src: 'http://n.sinaimg.cn/sinakd20210104ac/300/w1200h700/20210104/a0ce-kherpxx6415428.jpg'
        },
        {
          id: 5,
          src: 'https://c-ssl.dtstatic.com/uploads/blog/202103/06/20210306130036_b3b5f.thumb.1000_0.jpg'
        }
      ]

      // getImage(0)
    })

    onMounted(() => {
      getViewHeight()
    })

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
      if (nowIndex < 0) {
        uni.showToast({
          title: '到顶部了'
        })
        return
      }
      if (nowIndex == imgList.value.length) {
        uni.showToast({
          title: '到底了哦'
        })
        return
      }
      moveY = -1 * nowIndex * viewHeight.value
      animation.value.translateY(moveY).step()
      // getImage(nowIndex)
      animationData.value = animation.value.export()
      viewIndex.value = nowIndex
    }

    // 获取dom高度
    const getViewHeight = () => {
      return new Promise((resolve) => {
        const query = uni.createSelectorQuery().in(instance)
        query.select('.item-1').boundingClientRect()
        query.exec(function (res) {
          if (res.length && res[0]) {
            viewHeight.value = res[0].height
            resolve(viewHeight)
          }
        })
      })
    }

    const handleError = (e: any) => {
      console.log(e)
    }

    return {
      imgList,
      animationData,
      onTouchstart,
      onTouchEnd,
      getBackUrl,
      handleError
    }
  }
}
