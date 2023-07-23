// 实际研发使用justin-http包进行http调用
// import * as httpClient from 'justin-http';

import { getUuid } from 'justin-package-gutils/dist/util-helper';

const userInfo = {
  email: 'justinZan.com',
  password: '123456'
};

export default {
  reData(ret: any): Promise<{}> {
    return new Promise((resolve, reject) => {
      if (ret) {
        resolve(ret);
      } else {
        reject({ error: 'has error' });
      }
    });
  },

  postLogin(email: any, password: any) {
    let ret = {};
    if (email === userInfo.email && password === userInfo.password) {
      ret = {
        data: {
          id: 1,
          success: true,
          message: '登录成功',
          token: getUuid()
        }
      };
    } else {
      ret = {
        data: {
          success: false,
          message: '请输入正确的用户名和密码'
        }
      };
    }
    return this.reData(ret).catch((ex) => {
      throw ex;
    });
  },

  postLogout() {
    return this.reData({
      data: {
        success: false,
        message: '登出成功'
      }
    }).catch(
      (ex) => {
        throw ex;
      });
  },
  getUserInfo() {
    return this.reData({
      data: {
        name: 'Seed Pro',
        avatar: './images/logo.png',
        roles: ['admin']
      }
    }).catch((ex) => {
      throw ex;
    });
  }
};
