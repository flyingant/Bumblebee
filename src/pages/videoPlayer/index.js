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
});
