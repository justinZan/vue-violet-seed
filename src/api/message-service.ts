import store from '@/store';
// import { logFactory } from '@/utils/logger';
import { MessagePage } from '@/models/message-page';
// const logger = logFactory.getLogger('message-service');
export default {
  /**
   * 获取所有message信息
   *
   * @returns {Promise<MessageInfo>}
   */
  async getMessageData(currentPage: number, pageSize: number): Promise<MessagePage> {
    const dataList: any = store.getters.isMessageData;
    const pageData = dataList.slice(currentPage * pageSize, currentPage * pageSize + pageSize);
    return {
      data: pageData,
      currentPage,
      total: dataList.length
    };
  },

  /**
   * 根据条件查询
   *
   * @param {number} currentPage
   * @param {number} pageSize
   * @param {*} searchData
   * @returns {Promise<MessagePage>}
   */
  async getMessageDataOfCondition(currentPage: number, pageSize: number, searchData: any): Promise<MessagePage> {
    const dataList: any = store.getters.isMessageData;
    const newData = dataList
      .filter((item: any) => {
        if (!searchData.number) {
          return true;
        }
        if (item.number.includes(searchData.number) || item.sms.includes(searchData.number)) {
          return true;
        } else {
          return false;
        }
      })
      .filter((item: any) => {
        if (!searchData.date || searchData.date.length < 2) {
          return true;
        }
        if (new Date(item.time) >= searchData.date[0] && new Date(item.time) <= searchData.date[1]) {
          return true;
        } else {
          return false;
        }
      });
    const pageData = newData.slice(currentPage * pageSize, currentPage * pageSize + pageSize);
    return {
      data: pageData,
      currentPage,
      total: newData.length
    };
  },

  /**
   * 根据ID删除数据
   *
   * @param {number} currentPage
   * @param {number} pageSize
   * @param {*} id
   * @returns
   */
  deleteMessageDataOfId(currentPage: number, pageSize: number, id: any) {
    const dataList: any = store.getters.isMessageData;
    const newData = dataList.filter((item: any) => {
      return item.id !== id;
    });
    store.dispatch('SetmessageData', newData);
    const pageData = newData.slice(currentPage * pageSize, currentPage * pageSize + pageSize);
    return {
      data: pageData,
      currentPage,
      total: newData.length
    };
  }
};
