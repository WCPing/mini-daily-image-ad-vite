import { useImgStore } from '@/store' 

export default {
    setup() {
        const imgStore = useImgStore()

        const doJumpToCollect = () => {
            const { imgs } = imgStore
            console.log(imgs)
        }

        return {
            doJumpToCollect
        }
    }
}