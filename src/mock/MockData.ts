import Pimg from '@/model/Pimg'

// 人物明星 pe
// 家/文字 wo
// 自然 na
// 萌宠 anm
// 古风 anc
// 壁纸 wa
// 动漫 co
// 电影 fa
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
    topic: ''
  },
  {
    id: '10002',
    type: 'star',
    tag: ['白鹿', '美女', '娱乐圈'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202010/02/20201002033539_c24ce.thumb.1000_0.jpg',
    title: '白鹿也太好看了吧',
    topic: ''
  },
  {
    id: '10003',
    type: 'star',
    url: 'https://c-ssl.dtstatic.com/uploads/item/202004/02/20200402111417_c8XtZ.thumb.1000_0.jpeg'
  },
  {
    id: '10004',
    type: 'star',
    tag: ['王一博'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202208/25/20220825173358_bbd3a.thumb.400_0.jpg'
  },
  {
    id: '10005',
    type: 'star',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202108/10/20210810141656_72686.thumb.400_0.jpeg'
  },
  {
    id: '10006',
    type: 'star',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202109/24/20210924081215_63853.thumb.400_0.jpeg'
  },
  {
    id: '10007',
    type: 'star',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202109/20/20210920032949_90c66.thumb.400_0.jpeg'
  },
  {
    id: '10008',
    type: 'star',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202105/16/20210516111352_5d0e4.thumb.400_0.jpeg'
  },
  {
    id: '10009',
    type: 'star',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202111/17/20211117143843_18f02.thumb.400_0.jpeg'
  },
  {
    id: '10010',
    type: 'star',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202111/17/20211117143843_18f02.thumb.400_0.jpeg'
  },
  {
    id: '10011',
    type: 'star',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202203/20/20220320230753_1fb4a.thumb.400_0.jpg'
  },
  {
    id: '10012',
    type: 'star',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202206/22/20220622014606_3358d.thumb.400_0.jpg'
  },
  {
    id: '10013',
    type: 'star',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202206/22/20220622014606_b8353.thumb.400_0.jpg',
    tag: ['白鹿']
  },
  {
    id: '10014',
    type: 'star',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202202/28/20220228170225_bc8dc.thumb.400_0.jpg',
    tag: ['杨洋']
  },
  {
    id: '10015',
    type: 'star',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202205/12/20220512102656_9fb5c.thumb.400_0.jpg',
    tag: ['白鹿']
  },
  {
    id: '10016',
    type: 'star',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202204/10/20220410163320_c7905.thumb.400_0.jpg'
  },
  {
    id: '10017',
    type: 'star',
    tag: ['王一博'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202201/07/20220107130210_f3fa4.thumb.400_0.jpeg'
  },
  {
    id: '10018',
    type: 'star',
    tag: ['王一博'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202107/19/20210719234747_f2b07.thumb.400_0.jpeg'
  },
  {
    id: '10019',
    type: 'star',
    tag: ['王一博'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202201/07/20220107130217_5f146.thumb.400_0.jpeg'
  },
  {
    id: '10020',
    type: 'star',
    tag: ['王一博'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202106/26/20210626113442_e081b.thumb.400_0.jpg'
  },
  {
    id: '10021',
    type: 'star',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202111/18/20211118233202_eec9d.thumb.400_0.jpeg'
  },
  {
    id: '10022',
    type: 'star',
    tag: ['美女'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202109/20/20210920032951_9a606.thumb.400_0.jpeg'
  },
  {
    id: '10023',
    type: 'star',
    tag: ['美女'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202109/20/20210920032953_59ac8.thumb.400_0.jpeg'
  },
  {
    id: '10023',
    type: 'star',
    tag: ['美女'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202103/26/20210326151630_93931.thumb.400_0.jpeg'
  },
  {
    id: '10024',
    type: 'star',
    tag: ['美女'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202109/20/20210920032948_a349f.thumb.400_0.jpeg'
  },
  {
    id: '10025',
    type: 'star',
    tag: ['美女'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202105/16/20210516111616_f10aa.thumb.400_0.jpeg'
  },
  {
    id: '10026',
    type: 'star',
    tag: ['美女'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202107/26/20210726082847_d4d06.thumb.400_0.jpeg'
  },
  {
    id: '10027',
    type: 'star',
    tag: ['美女'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202111/09/20211109232911_7df00.thumb.400_0.jpeg'
  },
  {
    id: '10028',
    type: 'star',
    tag: ['美女'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202108/22/20210822220143_d55bf.thumb.400_0.jpeg'
  },
  {
    id: '10029',
    type: 'star',
    tag: ['美女'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202107/28/20210728092802_8e8c3.thumb.400_0.jpeg'
  },
  {
    id: '10030',
    type: 'star',
    tag: ['美女'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202201/01/20220101210144_108a2.thumb.400_0.jpg'
  },
  {
    id: '10031',
    type: 'star',
    tag: ['美女'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202108/24/20210824123904_a72a6.thumb.400_0.jpeg'
  },
  {
    id: '10032',
    type: 'star',
    tag: ['美女'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202103/26/20210326151701_2d118.thumb.400_0.jpeg'
  },
  {
    id: '10033',
    type: 'star',
    tag: ['美女'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202104/24/20210424144932_9c8f2.thumb.400_0.jpg'
  },
  {
    id: '10034',
    type: 'star',
    tag: ['美女'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202103/26/20210326151626_bcac9.thumb.400_0.jpeg'
  },
  {
    id: '10035',
    type: 'star',
    tag: ['美女'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202107/24/20210724132753_37445.thumb.400_0.jpeg'
  },
  {
    id: '10036',
    type: 'star',
    tag: ['动漫美女'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202204/11/20220411004915_a1b80.thumb.400_0.jpg'
  },
  {
    id: '10037',
    type: 'star',
    tag: ['美女'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202107/28/20210728092528_a5b89.thumb.400_0.jpeg'
  },
  {
    id: '10038',
    type: 'star',
    tag: ['美女'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202108/22/20210822220055_2b07d.thumb.400_0.jpeg'
  },
  {
    id: '10039',
    type: 'star',
    tag: ['美女'],
    url: '	https://c-ssl.dtstatic.com/uploads/blog/202109/13/20210913220139_89605.thumb.400_0.jpeg'
  },
  {
    id: '10040',
    type: 'star',
    tag: ['美女'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202106/22/20210622133526_814fa.thumb.400_0.jpeg'
  },
  {
    id: '10041',
    type: 'star',
    tag: ['美女'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202105/20/20210520213750_0136e.thumb.400_0.jpeg'
  }
]

// 萌宠 anm
const anm: Array<Pimg> = [
  {
    id: '20001',
    type: 'animal',
    tag: ['猫咪'],
    url: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
    title: '温馨的猫咪',
    topic: ''
  },
  {
    id: '20002',
    type: 'animal',
    tag: ['猫咪'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202107/25/20210725195448_9a666.thumb.400_0.jpg'
  }
]

// 军事 mi
const mi: Array<Pimg> = [
  {
    id: '30001',
    type: 'military',
    tag: ['su57'],
    url: 'http://n.sinaimg.cn/sinakd20210104ac/300/w1200h700/20210104/a0ce-kherpxx6415428.jpg',
    title: 'su57',
    topic: ''
  },
  {
    id: '30002',
    type: 'military',
    tag: ['军事'],
    url: 'https://c-ssl.dtstatic.com/uploads/item/201806/04/20180604134514_V38c2.thumb.1000_0.jpeg',
    title: '军事',
    topic: ''
  },
  {
    id: '30003',
    type: 'military',
    url: 'https://pic1.zhimg.com/v2-48030f8bb8870cae235ccb05787b4ef4_b.jpg'
  }
]

// 文艺 art
const art: Array<Pimg> = [
  {
    id: '40001',
    type: 'art',
    tag: ['清新'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202103/06/20210306130036_b3b5f.thumb.1000_0.jpg',
    title: '小清新',
    topic: ''
  },
  {
    id: '40002',
    type: 'art',
    tag: ['清新'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202205/21/20220521214014_4576d.thumb.400_0.jpg',
    title: '小清新',
    topic: ''
  },
  {
    id: '40003',
    type: 'art',
    tag: ['清新'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202108/03/20210803075429_b6f48.thumb.400_0.jpg',
    title: '小清新',
    topic: ''
  },
  {
    id: '40004',
    type: 'art',
    tag: ['清新'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202108/18/20210818150552_0d57d.thumb.400_0.jpeg',
    title: '小清新',
    topic: ''
  },
  {
    id: '40005',
    type: 'art',
    tag: ['清新'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202106/29/20210629121411_edcca.thumb.400_0.jpeg',
    title: '小清新',
    topic: ''
  },
  {
    id: '40006',
    type: 'art',
    tag: ['清新'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202107/31/20210731174310_87fcb.thumb.400_0.jpg',
    title: '小清新',
    topic: ''
  },
  {
    id: '40007',
    type: 'art',
    tag: ['清新'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202106/02/20210602214832_a6f91.thumb.400_0.jpg',
    title: '小清新',
    topic: ''
  },
  {
    id: '40008',
    type: 'art',
    tag: ['清新'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202012/07/20201207150925_b3b04.thumb.400_0.jpeg',
    title: '小清新',
    topic: ''
  },
  {
    id: '40009',
    type: 'art',
    tag: ['清新'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202106/29/20210629121316_c7eec.thumb.400_0.jpeg',
    title: '小清新',
    topic: ''
  },
  {
    id: '400010',
    type: 'art',
    tag: ['清新'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202012/07/20201207150931_bfeca.thumb.400_0.jpeg',
    title: '小清新',
    topic: ''
  },
  {
    id: '400011',
    type: 'art',
    tag: ['梦幻'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202202/21/20220221004100_1a292.thumb.400_0.jpeg',
    title: '壁纸',
    topic: ''
  },
  {
    id: '400012',
    type: 'art',
    tag: ['梦幻'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202202/19/20220219234843_c5609.thumb.400_0.jpeg',
    title: '壁纸',
    topic: ''
  },
  {
    id: '400013',
    type: 'art',
    tag: ['梦幻'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202106/22/20210622225811_fcb62.thumb.400_0.jpg',
    title: '壁纸',
    topic: ''
  },
  {
    id: '400014',
    type: 'art',
    tag: ['梦幻'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202103/09/20210309021822_a7122.thumb.400_0.jpeg',
    title: '壁纸',
    topic: ''
  },
  {
    id: '400015',
    type: 'art',
    tag: ['梦幻'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202104/11/20210411201553_d500e.thumb.400_0.jpg',
    title: '壁纸',
    topic: ''
  },
  {
    id: '400016',
    type: 'art',
    tag: ['梦幻'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202107/21/20210721010257_bf79b.thumb.400_0.jpg',
    title: '壁纸',
    topic: ''
  },
  {
    id: '400017',
    type: 'art',
    tag: ['梦幻'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202102/19/20210219102503_779b7.thumb.400_0.jpeg',
    title: '壁纸',
    topic: ''
  },
  {
    id: '400018',
    type: 'art',
    tag: ['梦幻'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202104/14/20210414022345_56c84.thumb.400_0.jpg',
    title: '壁纸',
    topic: ''
  },
  {
    id: '400019',
    type: 'art',
    tag: ['梦幻'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202102/19/20210219102505_0b596.thumb.400_0.gif',
    title: '壁纸',
    topic: ''
  }
]

// 文字
const wo: Array<Pimg> = [
  {
    id: '50001',
    type: 'home',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202208/23/20220823231525_5d401.thumb.400_0.jpg'
  },
  {
    id: '50002',
    type: 'word',
    tag: ['文字'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202207/01/20220701162821_f69e6.thumb.400_0.jpeg'
  },
  {
    id: '50003',
    type: 'home',
    tag: ['文字'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202201/19/20220119001518_46f5c.thumb.400_0.jpg'
  },
  {
    id: '50004',
    type: 'home',
    tag: ['文字'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202201/19/20220119001521_32670.thumb.400_0.jpg'
  },
  {
    id: '50005',
    type: 'home',
    tag: ['情头'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202111/15/20211115111214_e912a.thumb.400_0.jpeg'
  },
  {
    id: '50006',
    type: 'home',
    tag: ['情头'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202111/15/20211115111214_de9ca.thumb.400_0.jpeg'
  }
]

// 自然
const na: Array<Pimg> = [
  {
    id: '60001',
    type: 'nature',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202111/23/20211123211856_00569.thumb.400_0.jpeg'
  },
  {
    id: '60002',
    type: 'nature',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202203/16/20220316161133_8457c.thumb.400_0.jpeg'
  },
  {
    id: '60003',
    type: 'nature',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202201/02/20220102005427_13b2d.thumb.400_0.jpeg'
  },
  {
    id: '60004',
    type: 'nature',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202203/16/20220316161136_71983.thumb.400_0.jpeg'
  },
  {
    id: '60005',
    type: 'nature',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202204/14/20220414142740_ed26a.thumb.400_0.jpeg'
  },
  {
    id: '60006',
    type: 'nature',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202008/27/20200827142728_d65f4.thumb.400_0.jpeg'
  },
  {
    id: '60007',
    type: 'nature',
    url: 'https://c-ssl.dtstatic.com/uploads/item/202007/12/20200712001836_yjalb.thumb.400_0.jpg'
  },
  {
    id: '60008',
    type: 'nature',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202008/27/20200827142924_cb9ca.thumb.400_0.jpeg'
  }
]

// 动漫
const co: Array<Pimg> = [
  {
    id: '70001',
    type: 'comic',
    tag: ['鬼灭之刃'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202201/11/20220111231644_ea8ba.thumb.400_0.jpg'
  },
  {
    id: '70002',
    type: 'comic',
    tag: ['鬼灭之刃'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202201/15/20220115122952_28745.thumb.400_0.jpg'
  },
  {
    id: '70003',
    type: 'comic',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202204/07/20220407023703_5d351.thumb.400_0.jpg'
  }
]

const anc: Array<Pimg> = [
  {
    id: '80001',
    type: 'anc',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202202/13/20220213175416_17be8.thumb.400_0.jpg'
  },
  {
    id: '80002',
    type: 'anc',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202201/28/20220128113033_a702f.thumb.400_0.jpg'
  },
  {
    id: '80003',
    type: 'anc',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202206/13/20220613164354_1b160.thumb.400_0.jpg'
  },
  {
    id: '80004',
    type: 'anc',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202206/13/20220613164354_72667.thumb.400_0.jpg'
  },
  {
    id: '80005',
    type: 'anc',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202201/28/20220128113032_7c1ef.thumb.400_0.jpg'
  }
]
const wa: Array<Pimg> = [
  {
    id: '90001',
    type: 'wa',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202205/16/20220516162408_00c29.thumb.400_0.jpg'
  },
  {
    id: '90002',
    type: 'wa',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202205/15/20220515195808_f1360.thumb.400_0.jpeg'
  },
  {
    id: '90003',
    type: 'wa',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202205/15/20220515195808_2491f.thumb.400_0.jpeg'
  },
  {
    id: '90004',
    type: 'wa',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202203/23/20220323193123_efa8e.thumb.400_0.jpeg'
  },
  {
    id: '90005',
    type: 'wa',
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202205/16/20220516164359_90acc.thumb.400_0.jpg'
  }
]
const fa: Array<Pimg> = [
  {
    id: '1010001',
    type: 'film',
    tag: [''],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202103/17/20210317114231_4ef44.thumb.400_0.jpeg'
  },
  {
    id: '1010002',
    type: 'film',
    tag: [''],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202105/18/20210518174952_698af.thumb.400_0.jpeg'
  },
  {
    id: '1010003',
    type: 'film',
    tag: ['小王子'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202104/29/20210429170937_881a0.thumb.400_0.jpg'
  },
  {
    id: '1010004',
    type: 'film',
    tag: [''],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202106/21/20210621220901_81d31.thumb.400_0.jpeg'
  },
  {
    id: '1010005',
    type: 'film',
    tag: [''],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202105/18/20210518174721_cad91.thumb.400_0.jpeg'
  },
  {
    id: '1010006',
    type: 'film',
    tag: ['楚门的世界'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202107/24/20210724203546_e7515.thumb.400_0.png'
  },
  {
    id: '1010007',
    type: 'film',
    tag: [''],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202102/28/20210228104713_2ebe7.thumb.400_0.jpg'
  },
  {
    id: '1010008',
    type: 'film',
    tag: [''],
    url: 'https://c-ssl.dtstatic.com/uploads/item/202003/21/20200321151448_ccydp.thumb.400_0.jpg'
  },
  {
    id: '1010009',
    type: 'film',
    tag: [''],
    url: 'https://c-ssl.dtstatic.com/uploads/item/201903/14/20190314093716_wgcno.thumb.400_0.jpg'
  },
  {
    id: '10100010',
    type: 'film',
    tag: ['环太平洋'],
    url: 'https://c-ssl.dtstatic.com/uploads/blog/202102/24/20210224103949_09516.thumb.400_0.jpeg'
  }
]

export default {
  pe,
  wo,
  na,
  anm,
  anc,
  wa,
  co,
  fa,
  art,
  mi
}
