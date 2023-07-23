import Vue from 'vue';
import Router, { RawLocation } from 'vue-router';

/* Login */
import Login from '@/views/login/login.vue';
/* layout */
import Layout from '@/views/layout/layout.vue';
/* Message */
import Message from '@/views/message/message.vue';
/* WorkInventory */
import WorkInventory from '@/views/work-inventory/work-inventory.vue';

Vue.use(Router);

/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirec·t` will not redirct in the levelbar
 * noDropdown : if `noDropdown:true` will not has submenu in the sidebar
 * meta : `{ role: ['admin'] }`  will control the page role
 */
export const constantRouterMap = [
  {
    path: '/login',
    name: 'Router.Login',
    hidden: true,
    component: Login
  },
  {
    path: '/',
    hidden: true,
    redirect: '/sms/envio',
    component: Layout
  },
  {
    path: '/ficHa',
    name: 'FicHa',
    icon: 'iconfont icon-worklist',
    noDropdown: true,
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'FicHa de Trabalho',
        component: WorkInventory,
        meta: {
          index: 1
        }
      }
    ]
  },
  {
    path: '/cliente',
    name: 'Gestão de dados  do cliente',
    icon: 'iconfont icon-usergroup',
    noDropdown: true,
    component: Layout,
    children: [
      {
        path: 'index',
        meta: {
          index: 2
        },
        name: '<span >Gestão de dados <br/> do cliente</span>'
      }
    ]
  },
  {
    path: '/base',
    name: 'Gestão da base de conhecimento',
    icon: 'iconfont icon-repository',
    noDropdown: true,
    component: Layout,
    children: [
      {
        path: 'index',
        meta: {
          index: 3
        },
        name: '<span >Gestão da base de <br/> conhecimento</span>'
      }
    ]
  },
  {
    path: '/postal',
    name: 'Caixa',
    icon: 'iconfont icon-email',
    noDropdown: true,
    component: Layout,
    children: [
      {
        path: 'index',
        meta: {
          index: 4
        },
        name: 'Caixa postal'
      }
    ]
  },
  {
    path: '/sms',
    component: Layout,
    redirect: 'noredirect',
    name: 'Gestão de mensagens',
    icon: 'iconfont icon-message',
    children: [
      {
        path: 'envio',
        name: 'Envio de SMS',
        meta: {
          index: 5
        },
        component: Message
      },
      {
        path: 'consulta',
        name: 'Consulta do SMS',
        meta: {
          index: 6
        },
        component: Login
      },
      {
        path: 'config',
        name: 'Configuração do SMS',
        meta: {
          index: 7
        }
      }
    ]
  },
  {
    path: '/dados',
    name: 'Dados do',
    icon: 'iconfont icon-setting',
    noDropdown: true,
    component: Layout,
    children: [
      {
        path: 'index',
        meta: {
          index: 8
        },
        name: 'Dados do operador'
      }
    ]
  },
  {
    path: '/informa',
    name: 'Informação auypmática ao cliente',
    icon: 'iconfont icon-user-info',
    noDropdown: true,
    component: Layout,

    children: [
      {
        path: 'index',
        meta: {
          index: 9
        },
        name: '<span >Informação auypmática <br/> ao cliente</span>'
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
];

export default new Router({
  routes: constantRouterMap
});
