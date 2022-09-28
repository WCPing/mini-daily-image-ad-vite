import { ref } from 'vue'

export default {
    setup() {
        const title = ref('每天刷几张，刷出好心情')

        setTimeout(() => {
            // uni.switchTab({ url: '/pages/home/home' })
            uni.navigateTo({ url: '/pages/home/home' })
        }, 1000)

        // "plugins": {
        //     "coral-adv": {
        //         "version": "1.0.9", 
        //         "provider": "wx0e203209e27b1e66"
        //     },
        //     "uni-calendar": {
        //         "version": "1.0.0",
        //         "provider": "wxf72d316417b6767f"
        //     }
        // }
        
        return {
            title
        }
    }
}
