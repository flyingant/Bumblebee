/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import merge from 'deepmerge';
import log from './utils/logger';
import { ENABLE_DEBUGGER_MESSAGE } from './constants';
import { navigateToVideoPlayerPage } from './utils/navigator';
import { requestAPI } from './utils/request';

const INITIAL_STATE = {
  loading: false,
  videos: [],
  selectedVideo: {},
};

App({
  state: INITIAL_STATE,

  onLaunch(options) {
    console.log('App launch Queries:', options);
    const self = this;
    this.dispatch({
      loading: true,
    });
    requestAPI({
      method: 'GET',
      uri: '/list',
      header: {},
      data: {},
    }).then((response) => {
      log('Bumblebee API Response:', response);
      const videos = response.data;
      let selectedVideo = {};
      if (options.query && options.query.selectedVideoId) {
        selectedVideo = videos.find((v) => `${v.id}` === options.query.selectedVideoId);
      }
      self.dispatch({
        videos,
        selectedVideo,
        loading: false,
      });
      if (Object.keys(selectedVideo).length > 0) {
        navigateToVideoPlayerPage();
      }
    });
  },

  updateState(stateChange) {
    this.state = merge(this.state, stateChange);
    if (ENABLE_DEBUGGER_MESSAGE) {
      // eslint-disable-next-line no-console
      console.group('App State Update');
      log(stateChange);
      log(this.state);
      // eslint-disable-next-line no-console
      console.groupEnd();
    }
  },

  dispatch(stateChange) {
    this.updateState(stateChange);
    this.setPageData();
  },

  setActivePage(pageInstance, mapStateToPageData) {
    this.prevPageData = null;
    this.activePage = pageInstance;
    this.mapStateToPageData = mapStateToPageData;
    this.setPageData();
    const { onHide, onUnload } = pageInstance;
    pageInstance.onHide = () => {
      this.unsetActivePage();
      pageInstance.onHide = onHide;
      pageInstance.onHide();
    };
    pageInstance.onUnload = () => {
      this.unsetActivePage();
      pageInstance.onUnload = onUnload;
      pageInstance.onUnload();
    };
  },

  unsetActivePage() {
    this.prevPageData = null;
    this.activePage = null;
    this.mapStateToPageData = null;
  },

  setPageData() {
    if (!this.activePage) return;
    const pageData = this.mapStateToPageData(
      this.state,
      this.activePage._query,
      this.activePage.data,
    );
    const prevPageData = this.prevPageData;
    this.prevPageData = pageData;
    if (!prevPageData) {
      this.activePage.setData(pageData);
      return;
    }
    let finalPageData = null;
    for (const key in pageData) {
      if (pageData[key] !== prevPageData[key]) {
        if (!finalPageData) finalPageData = {};
        finalPageData[key] = pageData[key];
      }
    }
    if (finalPageData) this.activePage.setData(finalPageData);
  },
});
