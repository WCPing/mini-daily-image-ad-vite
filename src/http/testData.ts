interface Pimg {
    id: string
    type?: string
    tag?: Array<string>
    url: string
    title?: string
    subTitle?: string
    topic?: string
    recommend?: boolean
  }
  
  // 人物明星 pe
  // 家居 ho
  // 自然 na
  // 萌宠 anm
  // 古风 anc
  // 壁纸 wa
  // 动漫 co
  // 社会 so
  // 文艺 art
  // 军事 mi
  
  // 人物明星 pe
  const pe: Array<Pimg> = [
    {
      id: '10001',
      type: 'star',
      tag: ['白鹿', '美女', '娱乐圈'],
      url: 'https://c-ssl.dtstatic.com/uploads/blog/202109/17/20210917215327_c46ce.thumb.1000_0.jpeg',
      title: '白鹿也太好看了吧',
      topic: '',
    },
    {
      id: '10002',
      type: 'star',
      tag: ['白鹿', '美女', '娱乐圈'],
      url: 'https://c-ssl.dtstatic.com/uploads/blog/202010/02/20201002033539_c24ce.thumb.1000_0.jpg',
      title: '白鹿也太好看了吧',
      topic: '',
    },
    {
      id: '10003',
      type: 'star',
      url: 'https://c-ssl.dtstatic.com/uploads/item/202004/02/20200402111417_c8XtZ.thumb.1000_0.jpeg',
    },
    {
      id: '10004',
      type: 'star',
      tag: ['王一博'],
      url: 'https://c-ssl.dtstatic.com/uploads/blog/202208/25/20220825173358_bbd3a.thumb.400_0.jpg',
    },
    {
      id: '10005',
      type: 'star',
      url: 'https://c-ssl.dtstatic.com/uploads/blog/202108/10/20210810141656_72686.thumb.400_0.jpeg',
    },
    {
      id: '10006',
      type: 'star',
      url: 'https://c-ssl.dtstatic.com/uploads/blog/202109/24/20210924081215_63853.thumb.400_0.jpeg',
    },
    {
      id: '10007',
      type: 'star',
      url: 'https://c-ssl.dtstatic.com/uploads/blog/202109/20/20210920032949_90c66.thumb.400_0.jpeg',
    },
    {
      id: '10008',
      type: 'star',
      url: 'https://c-ssl.dtstatic.com/uploads/blog/202105/16/20210516111352_5d0e4.thumb.400_0.jpeg',
    },
    {
      id: '10009',
      type: 'star',
      url: 'https://c-ssl.dtstatic.com/uploads/blog/202111/17/20211117143843_18f02.thumb.400_0.jpeg',
    },
    {
      id: '10010',
      type: 'star',
      url: 'https://c-ssl.dtstatic.com/uploads/blog/202111/17/20211117143843_18f02.thumb.400_0.jpeg',
    },
  ]
  
  // 萌宠 anm
  const anm: Array<Pimg> = [
    {
      id: '20001',
      type: 'animal',
      tag: ['猫咪'],
      url: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
      title: '温馨的猫咪',
      topic: '',
    },
    {
      id: '20002',
      type: 'animal',
      tag: ['猫咪'],
      url: 'https://c-ssl.dtstatic.com/uploads/blog/202107/25/20210725195448_9a666.thumb.400_0.jpg',
    },
  ]
  
  // 军事 mi
  const mi: Array<Pimg> = [
    {
      id: '30001',
      type: 'military',
      tag: ['su57'],
      url: 'http://n.sinaimg.cn/sinakd20210104ac/300/w1200h700/20210104/a0ce-kherpxx6415428.jpg',
      title: 'su57',
      topic: '',
    },
    {
      id: '30002',
      type: 'military',
      tag: ['军事'],
      url: 'https://c-ssl.dtstatic.com/uploads/item/201806/04/20180604134514_V38c2.thumb.1000_0.jpeg',
      title: '军事',
      topic: '',
    },
    {
      id: '30003',
      url: 'https://pic1.zhimg.com/v2-48030f8bb8870cae235ccb05787b4ef4_b.jpg',
    },
  ]
  
  // 文艺 art
  const art: Array<Pimg> = [
    {
      id: '40001',
      type: 'art',
      tag: ['su57'],
      url: 'https://c-ssl.dtstatic.com/uploads/blog/202103/06/20210306130036_b3b5f.thumb.1000_0.jpg',
      title: '小清新',
      topic: '',
    },
  ]
  
  // 家居
  const ho: Array<Pimg> = [
    {
      id: '50001',
      type: 'home',
      url: 'https://c-ssl.dtstatic.com/uploads/blog/202208/23/20220823231525_5d401.thumb.400_0.jpg',
    },
  ]
  
  // 自然
  const na: Array<Pimg> = [
    {
      id: '60001',
      type: 'nature',
      url: 'https://c-ssl.dtstatic.com/uploads/blog/202111/23/20211123211856_00569.thumb.400_0.jpeg',
    },
    {
      id: '60002',
      type: 'nature',
      url: 'https://c-ssl.dtstatic.com/uploads/blog/202203/16/20220316161133_8457c.thumb.400_0.jpeg',
    },
    {
      id: '60003',
      type: 'nature',
      url: 'https://c-ssl.dtstatic.com/uploads/blog/202201/02/20220102005427_13b2d.thumb.400_0.jpeg',
    },
    {
      id: '60004',
      type: 'nature',
      url: 'https://c-ssl.dtstatic.com/uploads/blog/202203/16/20220316161136_71983.thumb.400_0.jpeg',
    },
    {
      id: '60005',
      type: 'nature',
      url: 'https://c-ssl.dtstatic.com/uploads/blog/202204/14/20220414142740_ed26a.thumb.400_0.jpeg',
    },
  ]
  
  // 动漫
  const co: Array<Pimg> = [
    {
      id: '70001',
      type: 'comic',
      url: 'https://c-ssl.dtstatic.com/uploads/blog/202201/11/20220111231644_ea8ba.thumb.400_0.jpg',
    },
    {
      id: '70002',
      type: 'comic',
      url: 'https://c-ssl.dtstatic.com/uploads/blog/202201/15/20220115122952_28745.thumb.400_0.jpg',
    },
  ]
  
  const anc: Array<Pimg> = []
  const wa: Array<Pimg> = []
  const so: Array<Pimg> = []
  
  // 在指定数中间的随机数
  const getRn = (min: number = 0, max: number) => Math.floor(Math.random() * max) + min
  
  // 返回指定数目的随机数索引, 不能有重复值, len: 数据长度
  const getRnArr = (num: number = 1, min: number = 0, max: number) => {
    let randomResult: Array<any> = []
    while (true) {
      //定义一个变量保存是否存在
      let isExists = false
      // 获取一个随机数
      const random = getRn(min, max)
      // 判断当前随机数是否已经存在
      //通过randoms.length来确定要判断几次
      for (let i = 0; i < randomResult.length; i++) {
        if (random === randomResult[i]) {
          isExists = true
          break
        }
      }
      // 如果不存在，则添加进去
      if (!isExists) {
        randomResult.push(random)
      }
      // 如果有10位随机数了，就跳出
      if (randomResult.length === num) {
        break
      }
    }
    return randomResult
  }
  
  // 随机打乱数组(洗牌算法)
  const shuffle = (arr: Array<any>) => {
    let result = []
    let random = undefined
    while (arr.length > 0) {
      random = Math.floor(Math.random() * arr.length)
      result.push(arr[random])
      arr.splice(random, 1)
    }
    return result
  }
  
  const distinct = (arr: Array<any>, prop: string) => {
    let obj: any = {}
    return arr.reduce((pre, curItem) => {
      obj[curItem[prop]] ? '' : obj[curItem[prop]] = true && pre.push(curItem)
      return pre
    }, [])
  }
  
  const allTypeArr = [pe, ho, na, anm, anc, wa, co, so, art, mi]
  
  // 用户 喜爱类型权重
  const favorWeight: any = { pe: 0.5, na: 0.3, mi: 0.2 }
  
  // 推荐的时候， 10张图片中， 根据权重推荐的占据50%， 剩下的50%系统随机选择
  
  const pageSize = 12
  
  const getImgs = () => {
    const weightImgNum = pageSize * 0.5
    const otherImgNum = pageSize * 0.5
    const weightImg: Array<Pimg> = []
    const otherImg: Array<Pimg> = []
    const w1Num = Math.round(favorWeight.pe * weightImgNum)
    const w2Num = Math.round(favorWeight.na * weightImgNum)
    const w3Num = Math.round(favorWeight.mi * weightImgNum)
  
    const w1Arr = getRnArr(w1Num, 0, pe.length - 1)
    const w2Arr = getRnArr(w2Num, 0, na.length - 1)
    const w3Arr = getRnArr(w3Num, 0, mi.length - 1)
  
    w1Arr.forEach((i) => {
      // pe[i].recommend = true;
      weightImg.push(pe[i])
    })
    w2Arr.forEach((i) => {
      //na[i].recommend = true;
      weightImg.push(na[i])
    })
    w3Arr.forEach((i) => {
      // mi[i].recommend = true;
      weightImg.push(mi[i])
    })
  
    while (otherImg.length <= otherImgNum) {
      let typeR = getRn(0, allTypeArr.length - 1)
      if (allTypeArr[typeR].length === 0) {
        continue
      }
      let imgIndex = getRn(0, allTypeArr[typeR].length - 1)
      // if (allTypeArr[typeR][imgIndex].recommend) {
      //   continue
      // }
      const res = allTypeArr[typeR][imgIndex]
      // res.recommend = true
      otherImg.push(res)
    }
  
    const allImgArr = [...weightImg, ...otherImg]
  
    // 去重
    const distinctArr = distinct(allImgArr, 'id')
  
    // 再次洗牌
    return shuffle(distinctArr)
  }
  
  export default {
    getImgs,
  }
  