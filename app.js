// app.js
App({
  onLaunch: function () {
		
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
				// env: 'my-env-id',
				env: 'cloud1-1g8250nj0ad70fd0',
        traceUser: true,
      });
    }

	},

	globalData:{
		name:'null',
		user_name:['猫奴一号', '喵星漫游者', '喵喵乐园主', '猫咪悠悠','猫掌柜', '猫咪的微笑', '猫咪魔法师', '喵踪探险家', '猫掌舞者', '猫咪摄影家', '喵呜音乐家', '猫咪魔法使', '猫尾巴画师', '猫咪之友', '猫咪仙子', '猫咪的守护者', '爱猫小仙女', '爱猫小王子', '喵喵迷', '喵喵梦游者', '喵呜音乐家']
	}
	// onShow: function(){
	// 	wx.hideHomeButton()
	// }
});
