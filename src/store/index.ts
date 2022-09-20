import { defineStore } from 'pinia'
import Pimg from '@/model/Pimg'

export const useImgStore = defineStore('imageStore', {
    state: () => {
        return {
            imgs: []
        }
    },
    getters: {},
    actions: {
        collectImg(pimg: Pimg)  {
            (this.imgs as any).push(pimg)
        },
        cancelCollect(pimg: Pimg) {}
    }
})
