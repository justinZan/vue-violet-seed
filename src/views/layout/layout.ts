import { Vue, Component, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
// Component
import Header from '@/views/header/header';
import SliderBar from '@/views/slider-bar/slider-bar';

@Component({
  components: {
    Header,
    SliderBar
  }
})
export default class Layout extends Vue {
  @Getter('isSidebar') isSidebar!: boolean;
  @Action('screenChange') screenChange!: (width: number) => void;
  @Action('ToggleSideBar') toggleSideBar!: (show: boolean) => void;
  private transitionState = '';

  /**
   * 监听路由
   *
   * @param {*} to
   * @param {*} from
   * @memberof Layout
   */
  @Watch('$route')
  routerChange(to: any, from: any) {
    const toIndex = to.meta.index;
    const fromIndex = from.meta.index;
    if (toIndex > fromIndex) {
      this.transitionState = 'right';
    } else if (toIndex < fromIndex) {
      this.transitionState = 'left';
    } else {
      this.transitionState = '';
    }
  }

  /**
   * created生命周期
   *
   * @memberof Layout
   */
  created() {
    const screenW = document.body.clientWidth;
    this.screenChange(screenW);
    if (screenW < 1440) {
      this.toggleSideBar(true);
    } else {
      this.toggleSideBar(false);
    }
    window.onresize = () => {
      const windowWinth = document.body.clientWidth;
      this.screenChange(windowWinth);
    };
  }
}
