import store from '@/store';
// 实际研发使用justin-http包进行http调用
// import * as httpClient from 'justin-http';

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
  getList() {
    console.log('store.getters.configs.logUrl', store.getters.configs.logUrl);
    // logger.debug('test table-service log 1');
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        date: `2018-06-${i}`,
        name: '张三',
        address: `武汉市xxx ${i} 号`
      });
    }
    return this.reData(data).catch((ex) => {
      throw ex;
    });
  }
};
