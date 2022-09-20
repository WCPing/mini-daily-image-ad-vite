<template>
    <image :src="imageSrc"
        :mode="mode"
        :lazy-load="true"
        @error="handleError"
        @click="doImgClick">
    </image>
</template>
<script lang="ts">
    import { ref, computed, watch, defineComponent } from 'vue'
    export default defineComponent ({
        name: 'MImage',
        props: {
            src: {
                type: String,
            },
            mode: {
                type: String,
                default: 'widthFix'
            }
        },
        emits: ['imgClick'],
        setup(props: any, context: any) {
            const defaultUrl = ref('/static/imgs/logo_vague.jpg') // 默认图片
            const imgSrc = ref('')

            watch(() => props.src, (newVal: string) => {
                imgSrc.value = newVal
            }, { immediate: true })

            const handleError = (e: any) => {
                imgSrc.value = defaultUrl.value
            }

            const doImgClick = (e: any) => {
                context.emit('imgClick', imageSrc)
            }

            const imageSrc = computed(() => {
                const src = imgSrc.value
                return src ? src : defaultUrl.value
            })

            return {
                handleError,
                doImgClick,
                imageSrc
            }
        }
    })
</script>