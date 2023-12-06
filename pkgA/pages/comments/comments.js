// pkgA/pages/comments/comments.js
const db = wx.cloud.database()

Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
		const app = getApp()
		this.data.name = app.globalData.name
		console.log(this.data.name)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },
  getGlobalData: function () {
    return new Promise((resolve) => {
      const app = getApp();
      resolve(app.globalData.name);
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

	},

	// remark: function (options) {
	// 	console.log('1')
	// 	//获取输入框输入的内容
	// 	this.setData({
  //     comments: options.detail.value
	// 	});
	// 	console.log(this.data.comments)
  //   // let value = options.detail.value;
	// 	// console.log("输入框输入的内容是 " + value)
	// },
	remark: function (options) {
		
    //获取输入框输入的内容
		let value = options.detail.value;
		let that = this
		that.setData({
			    comments: value
				});
		// console.log(that.data.comments)
    // console.log("输入框输入的内容是 " + value)
  },
	
	data: {
		comments: '',
		imgs: [],
		count: 1,
		name: 'azhu',
		src_img: ''
	},

	bindUpload: function (e) {
		// switch (this.data.imgs.length) {
		// 	case 0:
		// 		this.data.count = 3
		// 		break
		// 	case 1:
		// 		this.data.count = 2
		// 		break
		// 	case 2:
		// 		this.data.count = 1
		// 		break
		// }

		let that = this;
		// console.log(that.data.count)
		// console.log(that.data.name)
    var version = 1
		// 获取数据库中的值
		
		db.collection('img_nums').doc('b751f280656c012801f9fccc70c8c6f6').get({
			success: function(res) {
				console.log(res.data[that.data.name]);
				// 在成功回调中设置 version 并执行相关逻辑
				that.setData({
					version: res.data[that.data.name]
				});

				// 在这里可以继续执行其他逻辑，确保 version 已经被设置
				that.setData({
					src_img : 'images/二头/comments/test'+ that.data.version + '.jpg'
				})
				// var src_img = 'images/二头/comments/test';
				// src_img = src_img + that.data.version + '.jpg';
				console.log( that.data.src_img);
			},
			fail: function(err) {
				console.error("获取数据库值失败", err);
			}
		});

		
		// var that = this
		// var src_img = 'images/二头/comments/test'
		// // var version = Math.floor(Math.random()*1000);
		// src_img = src_img + version + '.jpg'
		// console.log(src_img)
		wx.chooseMedia({
			count: that.data.count, // 默认3
			mediaType: ['image'],
			// sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
			sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
			camera: 'back',
			success(res) {
				// 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
				var tempFilePaths = res.tempFiles.tempFilePath
					wx.cloud.uploadFile({
						cloudPath: that.data.src_img,
						filePath: res.tempFiles[0].tempFilePath,
						name: "file",
						header: {
							"content-type": "multipart/form-data"
						},
						success: res => {
							if (res.statusCode == 204) {
								wx.showToast({
									title: "上传成功",
									icon: "none",
									duration: 1500
								})
								
								console.log(res.fileID)
								that.setData({
								  imgs: res.fileID
								})
							}
						},
						fail: function (err) {
							wx.showToast({
								title: "上传失败",
								icon: "none",
								duration: 2000
							})
						},
						complete: res=> {
							// console.log(res.tempFiles.tempFilePath)
							// console.log(that.data.imgs)
							console.log(res)
						}
					})
				
			}
		})
	},
	// 删除图片
	deleteImg: function (e) {
		var that = this
		wx.showModal({
			title: "提示",
			content: "是否删除",
			success: function (res) {
				if (res.confirm) {
					// for (var i = 0; i < that.data.imgs.length; i++) {
					// 	if (i == e.currentTarget.dataset.index) that.data.imgs.splice(i, 1)
					// }
					that.setData({
						imgs: []
					})
				} else if (res.cancel) {
					console.log("用户点击取消")
				}
			}
		})
	},

	bindPublish : function () {
		let that = this
		var date =  new Date().toISOString().substring(0, 10);
		var number = Math.floor(Math.random()*19+1)
		var avatar = '云服务器地址/images/avatar/cat' + number + '.jpg'
		const app = getApp();
		var user_name = app.globalData.user_name[number]
		console.log(user_name)
		db.collection('azhu').add({
			// data 字段表示需新增的 JSON 数据
			data: {
				comments: that.data.comments,
				img: that.data.imgs,
				date: date,
				avatar: avatar,
				user_name: user_name
			},
			success: function(res) {
				// res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
				console.log(res)
				const _ = db.command
				const name_value = that.data.name
				db.collection('img_nums').doc('b751f280656c012801f9fccc70c8c6f6').update({
					// data 传入需要局部更新的数据
					data: {
						[name_value]: _.inc(1)
					},
					success: function(res) {
						console.log(res)
						wx.redirectTo({
							url: '../' + name_value + '/' + name_value,
						})
					}
				})
			}
		})		
	}
})