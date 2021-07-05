import { relaunchToVideoListPage } from '../../utils/navigator';

Page({
  data: {},

  onShow() {},

  onTapHeart() {
    relaunchToVideoListPage({ source: 'Landing Page' });
  },
});
