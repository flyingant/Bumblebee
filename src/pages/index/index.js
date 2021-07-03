import { relaunchToVideoListPage } from '../../utils/navigator';

Page({
  data: {},

  onShow() {},

  onTapHeart() {
    const today = +new Date();
    if (today < +new Date('2021-07-06')) {
      return;
    }
    relaunchToVideoListPage({ source: 'Landing Page' });
  },
});
