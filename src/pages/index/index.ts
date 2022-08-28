import { ref } from 'vue'

export default {
    setup() {
        const title = ref('每天刷几张，刷出好心情')

        setTimeout(() => {
            uni.switchTab({ url: '/pages/home/home' })
        }, 1000)
        
        return {
            title
        }
    }
}
