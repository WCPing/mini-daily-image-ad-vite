import Pimg from '@/model/Pimg'
import MockData from './MockData'

const { pe, wo, na, anm, anc, wa, co, fa, art, mi } = MockData

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
    obj[curItem[prop]] ? '' : (obj[curItem[prop]] = true && pre.push(curItem))
    return pre
  }, [])
}

const allTypeArr = [pe, wo, na, anm, anc, wa, co, fa, art, mi]

// 用户 喜爱类型权重
const favorWeight: any = { art: 0.6, wo: 0.2, na: 0.2 }

// 推荐的时候， 10张图片中， 根据权重推荐的占据50%， 剩下的50%系统随机选择

const pageSize = 10

const getWeightImgs = (imgNum: number) => {
  const weightImgNum = imgNum
  const weightImg: Array<Pimg> = []
  const w1Num = Math.round(favorWeight.art * weightImgNum)
  const w2Num = Math.round(favorWeight.wo * weightImgNum)
  const w3Num = Math.round(favorWeight.na * weightImgNum)

  // 生成随机数数组
  const w1Arr = getRnArr(w1Num, 0, art.length - 1)
  const w2Arr = getRnArr(w2Num, 0, wo.length - 1)
  const w3Arr = getRnArr(w3Num, 0, na.length - 1)

  w1Arr.forEach((i) => {
    art[i].recommend = true;
    weightImg.push(art[i])
  })
  w2Arr.forEach((i) => {
    wo[i].recommend = true;
    weightImg.push(wo[i])
  })
  w3Arr.forEach((i) => {
    na[i].recommend = true;
    weightImg.push(na[i])
  })

  return weightImg
}

const getRandowImgs =  (imgNum: number) => {
  const otherImgNum = imgNum
  const otherImg: Array<Pimg> = []

  while (otherImg.length <= otherImgNum) {
    let typeR = getRn(0, allTypeArr.length - 1)
    if (allTypeArr[typeR].length === 0) {
      continue
    }
    let imgIndex = getRn(0, allTypeArr[typeR].length - 1)
    if (allTypeArr[typeR][imgIndex].recommend) {
      continue
    }
    const res = allTypeArr[typeR][imgIndex]
    res.recommend = true
    otherImg.push(res)
  }

  return otherImg
}

const getImgs = () => {
  const weightImgNum = pageSize * 0.5
  const otherImgNum = pageSize * 0.5
  const weightImg: Array<Pimg> = getWeightImgs(weightImgNum)
  const otherImg: Array<Pimg> = getRandowImgs(otherImgNum)
  
  const allImgArr = [...weightImg, ...otherImg]

  // 去重
  const distinctArr = distinct(allImgArr, 'id')

  // 再次洗牌
  return shuffle(distinctArr)
}

export default {
  getImgs,
  getRandowImgs
}
