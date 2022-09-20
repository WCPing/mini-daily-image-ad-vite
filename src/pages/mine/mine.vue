<template>
    <view class="mine-page">
        <!-- 头像 -->
        <!-- <view class="avatar"></view> -->

        <view class="content">
            <view class="cell" @click="doJumpToCollect">
                <view class="left-icon">
                    <image src="/static/icons/ic_collect1.png" mode="aspectFill"></image>
                </view>
                <view class="cell-title">我的收藏</view>
                <view class="right-icon">
                    <image src="/static/icons/ic_right.png" mode="aspectFill"></image>
                </view>
            </view>
        </view>

        <view class="version">版本号： 0.0.3</view>
    </view>
</template>
<script lang="ts" src="./mine"></script>
<style lang="scss" scoped>
.mine-page {
    width: 100%;
    height: 100vh;
    position: relative;

    .avatar {
        width: 160rpx;
        height: 160rpx;
        border-radius: 100%;
        overflow: hidden;
        background-color: #f1f1f1;
        margin: 0 auto;
        padding-top: 20px;
    }

    .content {
        margin-top: 100rpx;
    }

    .cell {
        position: relative;
        width: 100%;
        box-sizing: border-box;
        padding: 22rpx 24rpx;
        background: rgba(255, 255, 255, 1);
        display: flex;
        flex-direction: row;
        align-items: center;

        .left-icon {
            height: 44rpx;
            width: 52rpx;
            text-align: left;
            display: flex;
            flex-direction: column;
            justify-content: center;

            image {
                width: 36rpx;
                height: 36rpx;
            }
        }

        .cell-title {
            min-width: 200rpx;

            .cell-title-txt {
                font-size: 28rpx;
                color: #32353a;
                line-height: 44rpx;
            }
            .cell-title-txt-must {
                &:after {
                    content: '*';
                    color: red;
                }
            }
        }

        .right-icon {
            height: 44rpx;
            width: 32rpx;
            position: absolute;
            right: 10rpx;

            image {
                width: 32rpx;
                height: 32rpx;
            }
        }
    }

    .cell--line:not(:last-child)::after {
        position: absolute;
        box-sizing: border-box;
        content: ' ';
        pointer-events: none;
        right: 0;
        bottom: 0;
        left: 20rpx;
        width: calc(100% - 40rpx);
        border-bottom: 2rpx solid rgba(227, 228, 232, 1);
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }

    .version {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 50rpx;
        width: 100%;
        text-align: center;
        font-size: 26rpx;
        color: #cccccc;
    }
}
</style>
