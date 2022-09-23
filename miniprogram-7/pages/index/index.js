// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    week: 'Default',
    disDay:'Default',
    nextWeek: 'Default',
    bgColor:'Default',
    color:'Default',
    nowPo:'Default',
   // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {

  },
  onLoad() {
    var sign=((Date.now()-4*1000*60*60*24+1000*60*60*7.93)/(1000*60*60*24*7))%2;
    console.log(sign);
    var dis=(1-sign%1)*7;
    var now=sign*180-90;
    console.log(now);
    this.setData({
      disDay:dis,
      nowPo:now,
    })
    if(sign>1){
      wx.setNavigationBarColor({
        backgroundColor: '#ffffff',
        frontColor: '#000000',
      })
      this.setData({
        week:'阳周',
        nextWeek: '阴周',
        color:'#000000',
        bgColor:'#ffffff'
      })
    }else{
      wx.setNavigationBarColor({
        backgroundColor: '#000000',
        frontColor: '#ffffff',
      })
      this.setData({
        week:'阴周',
        nextWeek:'阳周',
        bgColor:'#000000',
        color:'#ffffff'
      })
    }

    }
  })
 



