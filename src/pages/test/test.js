// <!-- 大盒子 -->
// <view class="video-box" 
//       bindtouchstart="onTouchStart" 
//       bindtouchmove="onTouchMove"
//       bindtouchend="onTouchEnd">
//       <!-- 上滑滑动 动画盒子 -->
//       <view class="ani-box" animation="{{animationData}}">
//       		<!-- 视频列表 -->
// 	        <view tt:for="{{videoList}}" :key="{{item.id}}" 
// 	          class="item-{{item.id}} item"  >
// 	            <video
// 	                id="video-{{index}}"
// 	                src="{{item.src}}"
// 	                autoplay="{{false}}"
// 	                loop="{{true}}"
// 	                object-fit="fill"
// 	                show-fullscreen-btn="{{false}}"
// 	                vslide-gesture-in-fullscreen="{{false}}"
// 	            />
// 	        </view>
//       </view>
//     </view>
let animation = null
let viewHeight = 0

Page({
  data: {
    videoList: [
      {
        id: 1,
        src: 'xxx',
      },
      {
        id: 2,
        src: 'xxx',
      },
      {
        id: 3,
        src: 'xxxx',
      }
    ],
    oldId: -1,
    startPage: 0,
    animationData: {},
    viewIndex: 0
  },
  onLoad: function () {
    this.getViewHeight()
    this.getVideoCtx(0)
  },
  getVideoCtx(id) {
    // 有上一个
    if(this.data.oldId > -1) {
      tt.createVideoContext(`video-${this.data.oldId}`).pause()
    }
    const ctx = tt.createVideoContext(`video-${id}`)
    // console.log(ctx)
    ctx.play()
    this.setData({
      oldId: id
    })
  },
  // 触摸开始
  onTouchStart({ touches }) {
    const { pageY } = touches[0]
    this.setData({
      startPage: pageY
    })
    // console.log('按下',pageY)
  },
  // 触摸移动
  onTouchMove({ touches }) {
    // const { pageY } = touches[0]
    // console.log('移动',pageY)
  },
  // 触摸结束
  onTouchEnd({ changedTouches }) {
    const { pageY } = changedTouches[0]
    const diff = pageY - this.data.startPage
  
    if(Math.abs(diff) <= 30) {
      console.log('不触发')
      return
    }
  
    if(diff > 0) {
      this.setAni(1)
    }else if( diff == 0) {
      this.setAni(0)
    }else{
      this.setAni(-1)
    }
  },
  // 滑动动画 0 不移动 -1 上拉 1 下拉
  async setAni(status) {
    if(status == 0) return false
    
    if(!animation) {
      animation = tt.createAnimation({
        duration: 500,
        timingFunction: 'ease'
      });
    }
    if(!viewHeight) {
      await this.getViewHeight()
    }
    // 计算位移
    let moveY = 0
    let nowIndex = this.data.viewIndex
    status > 0 ? nowIndex-- : nowIndex++
    if(nowIndex < 0) {
      tt.showToast({
        title: '到顶部了'
      })
      return
    }
    if(nowIndex == this.data.videoList.length) {
      tt.showToast({
        title: '到底了哦'
      })
      return
    }
    moveY = -1 * nowIndex * viewHeight
    animation.translateY(moveY).step()
    this.getVideoCtx(nowIndex)
    this.setData({
      animationData: animation.export(),
      viewIndex: nowIndex
    })
  },
  // 获取dom高度
  getViewHeight() {
    return new Promise((resolve) => {
      const query = tt.createSelectorQuery()
      query.select(".item-1").boundingClientRect()
      query.exec(function (res) {
        if(res.length && res[0]) {
          viewHeight = res[0].height
          resolve(viewHeight)
        }
      })
    })
  },
})

