const getters = {
  sidebar: (state: any) => state.app.sidebar,
  token: (state: any) => state.user.auth.token,
  userInfo: (state: any) => state.user.userInfo,

  language: (state: any) => state.app.language,
  configs: (state: any) => state.app.configs,
  getterInfo: (state: any) => state.interaction.storeInfo
};
export default getters;
