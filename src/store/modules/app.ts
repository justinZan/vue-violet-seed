import Cookies from 'js-cookie';

const app = {
  state: {
    sidebar: false,
    language: Cookies.get('language') || 'es',
    configs: {},
    screen: 0,
    messageData: {}
  },
  getters: {
    isMessageData: (state: any) => {
      return state.messageData;
    },
    isSidebar: (state: any) => {
      return state.sidebar;
    },
    isScreen: (state: any) => {
      return state.screen;
    }
  },
  mutations: {
    MESSAGE_DATA: (state: any, valid: any) => {
      state.messageData = valid;
    },
    SCREEN_CHANGE: (state: any, valid: any) => {
      state.screen = valid;
    },
    TOGGLE_SIDEBAR: (state: any, valid: any) => {
      state.sidebar = valid;
      Cookies.set('sidebarStatus', valid);
    },
    SET_LANGUAGE: (state: any, language: any) => {
      state.language = language;
      Cookies.set('language', language);
    },
    SET_CONFIGS: (state: any, configs: any) => {
      state.configs = configs;
    }
  },
  actions: {
    SetmessageData: ({ commit }: any, valid: string) => {
      commit('MESSAGE_DATA', valid);
    },
    screenChange: ({ commit }: any, valid: string) => {
      commit('SCREEN_CHANGE', valid);
    },
    ToggleSideBar: ({ commit }: any, valid: string) => {
      commit('TOGGLE_SIDEBAR', valid);
    },
    setLanguage({ commit }: any, language: any) {
      commit('SET_LANGUAGE', language);
    },
    setConfigs({ commit }: any, configs: any) {
      commit('SET_CONFIGS', configs);
    }
  }
};

export default app;
