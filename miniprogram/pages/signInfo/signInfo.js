// miniprogram/pages/calender/calenderdemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    days_style: [
      { month: 'current', day: 2, color: 'white', background: '#AAD4F5' },
      { month: 'current', day: 4, color: 'white', background: '#AAD4F5' },
      { month: 'current', day: 7, color: 'white', background: '#AAD4F5' },
      { month: 'current', day: new Date().getDate(), color: 'white', background: '#84e7d0' }
    ],
    showDay: new Date(),
    showDayDetails: []
  },

  //给点击的日期设置一个背景颜色
  dayClick: function (event) {
    let clickDate = event.detail.year + "-" + event.detail.month
      + "-" + event.detail.day; ;
    let clickDay = event.detail.day;
    let changeDay = `days_style[1].day`;
    let changeBg = `days_style[1].background`;
    this.data.showDayDetails = [];
    for(var i=0;i<5;i++){
      this.data.showDayDetails.push({
        content: clickDate + " 目标 " + (i + 1),
        isFinish: false
      })
    };
    this.setData({
      showDay: clickDate,
      [changeDay]: clickDay,
      [changeBg]: "#00FF00",
      showDayDetails : this.data.showDayDetails
    });
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    for (var i = 0; i < 5; i++) {
      this.data.showDayDetails.push({
        content: " 目标 " + (i + 1),
        isFinish: false
      })
    };
    this.setData({
      showDayDetails: this.data.showDayDetails
    })
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

  }
})