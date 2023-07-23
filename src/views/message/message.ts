import { Vue, Component } from 'vue-property-decorator';
// Component
import SearchOperate from '@/components/opertor-component/search-operate/search-operate';
import CommonTitle from '@/components/opertor-component/commom-tilte/commom-tilte';
import MessageTable from '@/components/message-components/message-table/message-table';
import Pagination from '@/components/opertor-component/pagination/pagination';
// 实体
import { MessagePage } from '@/models/message-page';
// 服务
import MessageService from '@/api/message-service';

@Component({
  components: {
    SearchOperate,
    CommonTitle,
    MessageTable,
    Pagination
  }
})
export default class Message extends Vue {
  private messageList: any = new MessagePage();
  private currentPage = 1;
  private pageSize = 17;
  private isSearch = false;
  private searchD = {};
  private loading = false;

  /**
   * Created 生命周期
   *
   * @memberof Message
   */
  async created() {
    this.initData();
  }

  /**
   * Page切换
   *
   * @param {*} payload
   * @memberof Message
   */
  currentPageChange(payload: any) {
    this.currentPage = payload;
    if (this.isSearch) {
      this.searchData(this.searchD);
    } else {
      this.initData();
    }
  }

  /**
   * 搜索
   *
   * @param {*} payload
   * @memberof Message
   */
  async searchData(payload: any) {
    this.loading = true;
    this.searchD = payload;
    if (payload.number.length > 0 || (payload.date && payload.date.length > 0)) {
      this.isSearch = true;
      const data = await MessageService.getMessageDataOfCondition(this.currentPage - 1, this.pageSize, payload);
      this.messageList = data;
      this.$message.success('¡Operación exitosa!');
    } else {
      this.isSearch = false;
      this.initData();
      this.$message.success('¡Operación exitosa!');
    }
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  /**
   * 刷新
   *
   * @param {*} payload
   * @memberof Message
   */
  refreshData(payload: any) {
    this.initData();
    this.$message.success('¡Operación exitosa!');
  }

  /**
   * 初始化数据
   *
   * @memberof Message
   */
  async initData() {
    this.loading = true;
    const data = await MessageService.getMessageData(this.currentPage - 1, this.pageSize);
    this.messageList = data;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  /**
   * 删除
   *
   * @param {*} payload
   * @memberof Message
   */
  async deleteData(payload: any) {
    const data = await MessageService.deleteMessageDataOfId(this.currentPage - 1, this.pageSize, payload);
    this.messageList = data;
    this.$message.success('¡Operación exitosa!');
  }
}
