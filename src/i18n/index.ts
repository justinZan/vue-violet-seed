// tslint:disable
import Vue from 'vue';
import VueI18n, { LocaleMessages, DateTimeFormats } from 'vue-i18n';

const zh = require ('./zh-CN.json');
const en = require ('./en-US.json');
const es = require ('./es-EC.json');
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'; // element-ui lang
import elementEsLocale from 'element-ui/lib/locale/lang/es'; // element-ui lang
import elementEnLocale from 'element-ui/lib/locale/lang/en';
import ElementLocale from 'element-ui/lib/locale';


Vue.use(VueI18n);

const messages = {
  en: {
    ...en,
    ...elementEnLocale
  },
  zh: {
    ...zh,
    ...elementZhLocale
  },
  es: {
    ...es,
    ...elementEsLocale
  }
};

const timeFormat: VueI18n.SpecificDateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
};

const dateFormat: VueI18n.SpecificDateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
};

const dateTimeFormat: VueI18n.SpecificDateTimeFormatOptions = {
  ...timeFormat,
  ...dateFormat
};

const weekDateFormat: VueI18n.SpecificDateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric'
};

const dateFormats: DateTimeFormats = {
  'zh': {
    'time': timeFormat,
    'date': dateFormat,
    'date-time': dateTimeFormat,
    'date-week': weekDateFormat
  },
  'es': {
    'time': timeFormat,
    'date': dateFormat,
    'date-time': dateTimeFormat,
    'date-week': weekDateFormat
  }
};


const i18n = new VueI18n({
  dateTimeFormats: dateFormats,
  locale: 'es',
  messages
});
// 解决Element-ui组件内的词条
ElementLocale.i18n((key: any, value: any) => i18n.t(key, value));
export default i18n;
