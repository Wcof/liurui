<template>
	<view class="content">
		<image class="logo" src="https://static.woshipm.com/APP_U_201808_20180805195237_5355.jpeg"></image>
		<view class="text-area">
			<H3 class="text">自身每日</h3>
			<view clase="input">
				<uni-easyinput type="number"  v-model="c"  placeholder="请输入内容" @input=""></uni-easyinput>
				<p class="text">(c)千卡：{{cv}}</p>
			</view>
			<view clase="input">
				<uni-easyinput  type="number" v-model="d"  placeholder="请输入内容" @input=""></uni-easyinput>
				<p class="text">(d)蛋白质：{{dv}}</p>
			</view>
			<view clase="input">
				<uni-easyinput type="number"  v-model="a"  placeholder="请输入内容" @input=""></uni-easyinput>
				<p class="text">(a)脂肪：{{av}}</p>
			</view>
			<view clase="input">
				<uni-easyinput type="number" v-model="b"  placeholder="请输入内容" @input=""></uni-easyinput>
				<p class="text">(b)碳水：{{bv}}</p>
			</view>
			<H3 class="text">其他</h3>
			<view clase="input">
				<uni-easyinput type="number" v-model="e"  placeholder="请输入内容" @input=""></uni-easyinput>
				<p class="text">(ce)千卡：{{ce}}</p>
				<p class="text">(de)蛋白质：{{de}}</p>
				<p class="text">(ae)脂肪：{{ae}}</p>
				<p class="text">(be)碳水：{{be}}</p>
			</view>

		<button type="primary" size="default" @click="js">计算</button>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				a: 0,
				b: 0,
				c: 0,
				d: 0,
				av: 0,
				bv: 0,
				cv: 0,
				dv: 0,
				ae: 0,
				be: 0,
				ce: 0,
				de: 0,
				e: 0,
			}
		},
		onLoad() {

		},
		methods: {
			js(){
				
				this.av = this.a /100;
				this.bv = this.b /100;
				var cc = this.c /100/4.18;
				this.cv = cc.toFixed(4)
				this.dv = this.d /100;
				this.ae = this.av*this.e;
				this.be = this.bv*this.e;
				this.ce = this.cv*this.e;
				this.de = this.dv*this.e;

				console.log("1111")
			}

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		flex-direction: column;
		height: 1334rpx;
		width: 600rpx;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.text{
		text-align: center;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}

</style>
