import { defineStore } from 'pinia'
import Pimg from '@/model/Pimg'

export const useImgStore = defineStore('imageStore', {
    state: () => {
        return {
            imgs: [],
            user: null
        }
    },
    getters: {},
    actions: {
        collectImg(pimg: Pimg)  {
            (this.imgs as any).push(pimg)
        },
        cancelCollect(pimg: Pimg) {
            this.imgs.forEach((img: Pimg, index: number) => {
                if (img.id === pimg.id) {
                    this.imgs.splice(index, 1)
                }
            })
        },
        setUser(userData: any) {
            this.user = userData
        }
    }
})
