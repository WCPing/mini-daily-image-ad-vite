<template>
    <view class="images-box" @touchstart="onTouchstart" @touchmove="onTouchMove" @touchend="onTouchEnd">
        <view class="ani-box" :animation="animationData">
            <view v-for="item in imgList" :key="item.id" :class="'item item-' + item.id">
                <view class="bgImage" :style="{ 'background-image': `url(${item.url})` }"></view>
                <!-- <image :src="item.url" mode="widthFix" @error="handleError"></image> -->
                <m-image :src="item.url"></m-image>
                <view class="icon-zone icon-collect" @click="doCollectImg(item)">
                    <image class="icon" :src="ifCollect(item.collected)"></image>
                </view>
                <view class="icon-zone icon-download" @click="doDownloadImg(item.url)">
                    <image class="icon" src="/static/icons/ic_download.png"></image>
                </view>
                <view class="icon-zone icon-mine" @click="doJumoToMine">
                    <image class="icon" src="/static/icons/ic_mine_selected.png"></image>
                </view>
            </view>
        </view>
        <!-- <ad-rewarded-video ref="adRewardedVideo" adpid="1719130763" :loadnext="true" :disabled="true" v-slot:default="{loading, error}"
            @load="onAdLoad" @close="onAdClose" @error="onAdError">
            <view class="ad-error" v-if="error">{{error}}</view>
        </ad-rewarded-video> -->
        <!-- <ad-rewarded-video adpid="1719130763" :loadnext="true" v-slot:default="{loading, error}" @load="onAdLoad" @close="onAdClose"
            @error="onAdError">
            <button :disabled="loading" :loading="loading">显示广告</button>
            <view v-if="error">{{error}}</view>
        </ad-rewarded-video> -->
    </view>
</template>
<script lang="ts" src="./home.ts"></script>

<style lang="scss">
.images-box {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    background: linear-gradient(135deg, #ee9ca7, #ffdde1, #6dd5fa);
    background-size: 100% 100%;
    .ad-error {
        color: orangered;
        margin-top: 5px;
    }

    .ani-box {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transform: translateY(0px);

        image {
            will-change: transform;
        }

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
                right: 20rpx;
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
                bottom: 280rpx;
            }

            .icon-download {
                bottom: 180rpx;
            }

            .icon-mine {
                bottom: 80rpx;
            }
        }
    }
}
</style>