// pages/1a/1a.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		comments: []
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		const app = getApp()
		app.globalData.name = 'ertou'
		console.log(app.globalData.name)
		// const db = wx.cloud.database()

		// db.collection('azhu').get({
    //   success: res => {
    //     this.setData({
    //       comments: res.data
		// 		})
		// 		console.log(res.data)
		// 		console.log(this.data.comments)
    //   },
    //   fail: err => {
    //     console.error(err)
    //   }
		// })
		
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	},

	comments(){
		// wx.navigateTo({
		// 	url: '../comments/comments',
		// })
		wx.showToast({
			title: '客官请稍安勿躁\r\n评论区正在建设中...\r\n欢迎移步阿猪评论区',
			icon: 'none',
			duration: 4000//持续的时间
		})
	}
})