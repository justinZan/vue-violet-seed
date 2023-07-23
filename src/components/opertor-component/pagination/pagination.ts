import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

@Component({})
export default class Pagination extends Vue {
  @Getter('isScreen') isScreen!: boolean;
  @Action('ToggleSideBar') toggleSideBar!: (show: boolean) => void;
  @Prop({ default: {} })
  dataList!: any;
  private currentPage = 1;
  private pageSize = 17;
  private layout = '';

  @Watch('isScreen')
  isScreenChange(val: any) {
    this.layoutTransform(val);
  }

  /**
   * created 生命周期
   *
   * @memberof Pagination
   */
  created() {
    this.layoutTransform(this.isScreen);
  }

  /**
   * 发送切换分页事件
   *
   * @param {*} val
   * @memberof Pagination
   */
  handleCurrentChange(val: any) {
    this.currentPage = val;
    this.$emit('currentPage', this.currentPage);
  }

  /**
   * pagination layout 属性设置
   *
   * @param {*} val
   * @memberof Pagination
   */
  layoutTransform(val: any) {
    if (val < 700) {
      this.layout = 'prev,pager,next,jumper';
    } else {
      this.layout = 'total,prev,pager,next,jumper';
    }
  }
}
