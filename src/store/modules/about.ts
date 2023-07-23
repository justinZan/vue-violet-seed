const About = {
    state: {
      storeInfo : 'about-info123'
    },
    mutations: {
        CHANGE_ABOUT_INFO(state: any, pyload: any ) {
            state.storeInfo = pyload;
        }
    },
    actions: {
        changeAboutInfo( {commit}: any, {msg}: any ) {
            commit('CHANGE_ABOUT_INFO', msg);
        }
    }
  };

export default About;
