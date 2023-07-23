import { Vue, Component, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { Skin } from '@/skin/skin';

@Component({})
export default class MenuButton extends Vue {
  @Getter('isSidebar') isSidebar!: boolean;
  @Getter('isScreen') isScreen!: boolean;
  @Action('ToggleSideBar') toggleSideBar!: (show: boolean) => void;
  private skins: any[] = ['white', 'black'];
  private skin: any = '';

  @Watch('isScreen')
  isScreenChange(val: any) {
    if (val < 1440) {
      this.toggleSideBar(true);
    } else {
      this.toggleSideBar(false);
    }
  }

  /**
   * created 生命周期
   *
   * @memberof MenuButton
   */
  created() {
    this.skin = localStorage.getItem('themeValue');
  }

  /**
   * 换肤
   *
   * @param {string} command
   * @memberof MenuButton
   */
  handleCommandSkin(command: string) {
    document.body.className = command + '-theme';
    Skin.changeTheme(command);
  }

  /**
   * 菜单隐藏
   *
   * @memberof MenuButton
   */
  menuHidden() {
    this.toggleSideBar(!this.isSidebar);
  }
}
