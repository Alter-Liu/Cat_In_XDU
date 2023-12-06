// pages/gerenzhongxing/gerenzhongxin.js
const app = getApp()

Page({
  data: {
    motto: '123',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  gr1() {
wx.navigateTo({
  url: '../../pkgA/pages/gr_userInformation/gr_userInformation'
})
  },
  gr2() {
    wx.navigateTo({
      url: '../../pkgA/pages/gr_message/gr_message'
    })
  },
  gr3() {
      wx.navigateTo({
      url: '../../pkgA/pages/gr_subscribe/gr_subscribe'
  })
          },
  gr4() {
   wx.navigateTo({
      url: '../../pkgA/pages/gr_record/gr_record'
   })
	},

	gr5() {
		wx.navigateTo({
			 url: '../../pkgA/pages/gr_help/gr_help'
		})
	 },
	
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})