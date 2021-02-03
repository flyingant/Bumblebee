const app = getApp();

Page({
  data: {},
  onShow() {
    app.setActivePage(this, (state) => {
      const { selectedVideo } = state;
      return {
        selectedVideo,
      };
    });
  },

  onNavigateBack() {
    wx.navigateBack();
  },

  onUnload() {
    app.dispatch({
      selectedVideo: {},
    });
  },

  onShareAppMessage() {
    const { selectedVideo } = this.data;
    return {
      title: 'Bumblbee Bumblbee Bumblbee',
      path: `/pages/index/index?selectedVideoID=${selectedVideo.id}`,
      imageUrl: selectedVideo.data.thumbnail,
    };
  },
});
