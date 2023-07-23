/**
 * 配置文件初始化
 */
import axios from 'axios';

const configPath = process.env.BASE_URL + 'config.json';
const dataJson = 'data.json';

const Config = async (store: any) => {
  const configs = await axios.get(configPath);
  const data = await axios.get(dataJson);
  await store.dispatch('setConfigs', configs.data);
  await store.dispatch('SetmessageData', data.data);
};

export default Config;
