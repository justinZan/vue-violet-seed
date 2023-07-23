import { Vue, Component } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component({})
export default class CloseApp extends Vue {
  @Action('LogOut') logOutAction: any;

  /**
   * 登出
   *
   * @memberof CloseApp
   */
  logout() {
    this.logOutAction().then(() => {
      location.reload(); // 为了重新实例化vue-router对象 避免bug
    });
  }
}
