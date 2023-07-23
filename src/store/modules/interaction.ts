const Interaction = {
  state: {
    storeInfo : '123'
  },
  mutations: {
    CHANGEINFO(state: any, msg: any) {
       state.storeInfo = msg;
    }
  },
  actions: {
    changeInfo(store: any, pyload: any) {
        store.commit('CHANGEINFO', pyload.msg);
    }
  }
};

export default Interaction;
