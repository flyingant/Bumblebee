import { navigateToVideoPlayerPage } from '../../utils/navigator';

const app = getApp();

Page({
  data: {
    videos: [],
  },
  onLoad() {},

  onShow() {
    app.setActivePage(this, (state) => {
      const { videos } = state;
      return {
        videos,
      };
    });
  },

  onSelectVideo(e) {
    const { videos } = this.data;
    const { videoId } = e.target.dataset;
    app.dispatch({
      selectedVideo: videos.find((v) => v.id === videoId),
    });
    navigateToVideoPlayerPage();
  },
});
