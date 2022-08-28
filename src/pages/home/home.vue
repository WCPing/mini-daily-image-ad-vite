<template>
    <view class="images-box" @touchstart="onTouchstart" @touchend="onTouchEnd">
        <view class="ani-box" :animation="animationData">
            <view v-for="item in imgList" :key="item.id" :class="'item item-' + item.id">
                <view class="bgImage" :style="{ 'background-image': `url(${item.src})` }"></view>
                <image :src="item.src" mode="widthFix" :lazy-load="true" @error="handleError"></image>
                <div class="icon-zone icon-collect">
                    <image class="icon" src="/static/icons/ic_collect.png"></image>
                </div>
                <div class="icon-zone icon-download">
                    <image class="icon" src="/static/icons/ic_download.png"></image>
                </div>
            </view>
        </view>
    </view>
</template>
<script lang="ts" src="./home"></script>

<style lang="scss">
.images-box {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;

    .ani-box {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transform: translateY(0px);
        z-index: -1;

        .item {
            width: 100%;
            height: 100vh;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;

            .bgImage {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: 100% 100%;
                filter: blur(30px);
                opacity: 0.9;
                z-index: -1;
            }

            .icon-zone {
                position: absolute;
                right: 10rpx;
                width: 80rpx;
                height: 80rpx;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background-color: rgba(255, 255, 255, 0.1);
                .icon {
                    width: 50rpx;
                    height: 50rpx;
                }
            }

            .icon-collect {
                bottom: 150rpx;
            }

            .icon-download {
                bottom: 30rpx;
            }
        }
    }
}
</style>