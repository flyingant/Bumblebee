import { navigateToVideoPlayerPage } from '../../utils/navigator';

const app = getApp();

Page({
  data: {
    videos: [],
  },

  onShow() {
    app.setActivePage(this, (state) => {
      const { videos, loading } = state;
      return {
        loading,
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

  onShareAppMessage() {
    return { title: 'Bumblbee Bumblbee Bumblbee' };
  },
});
