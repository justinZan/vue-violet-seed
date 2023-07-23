import { Vue, Component } from 'vue-property-decorator';
import { SearchCondition } from '@/models/search-condition';
import { PickOptions } from '@/models/pick-options';

@Component({})
export default class SearchOperate extends Vue {
  private date: any = [];
  private searchText: any = '';
  pickOptions = new PickOptions();
  private searchD = new SearchCondition();

  /**
   *  created 生命周期
   *
   * @memberof SearchOperate
   */
  created() {
    this.pickOptions.disabledDate = (time: Date) => {
      return time.getTime() > new Date().getTime();
    };
  }

  /**
   * 发送搜索事件
   *
   * @param {*} val
   * @memberof SearchOperate
   */
  searchData(val: any) {
    this.searchD.date = this.date;
    this.searchD.number = this.searchText;
    this.$emit('searchData', this.searchD);
  }

  /**
   * 发送刷新事件
   *
   * @memberof SearchOperate
   */
  refreshData() {
    this.$emit('refreshData');
  }
}
