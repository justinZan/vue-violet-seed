import Cookies from 'js-cookie';
import userService from '../../api/user-service';

const user = {
  state: {
    auth: {
      token: Cookies.get('Admin-Token')
    },
    userInfo: {
      name: '',
      avatar: '',
      roles: []
    }
  },

  mutations: {
    SET_TOKEN: (state: any, token: any) => {
      state.auth.token = token;
    },
    SET_USER_INFO: (state: any, userInfo: any) => {
      state.userInfo = userInfo;
    }
  },

  actions: {
    // 登录
    async Login({ commit }: any, userInfo: any) {
      const email = userInfo.email.trim();
      const response: any = await userService.postLogin(email, userInfo.password);
      const data = response.data;
      Cookies.set('Admin-Token', data.token);
      commit('SET_TOKEN', data.token);
    },

    // 获取用户信息
    async GetInfo({ commit }: any) {
      const response: any = await userService.getUserInfo();
      const data = response.data;
      commit('SET_USER_INFO', data);
      return response;
    },

    // 登出
    async LogOut({ commit, state }: any) {
      await userService.postLogout();
      commit('SET_TOKEN', '');
      commit('SET_USER_INFO', {});
      Cookies.remove('Admin-Token');
    }
  }
};

export default user;
