import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class MessageTable extends Vue {
  @Prop({ default: {} })
  dataList!: any;

  /**
   * 状态转换
   *
   * @memberof MessageTable
   */
  statusTransform(status: any) {
    if (status) {
      return 'Enviar com sucesso';
    } else {
      return 'Falha no envio';
    }
  }

  /**
   * 发送删除事件
   *
   * @param {*} id
   * @memberof MessageTable
   */
  deleteData(id: any) {
    this.$emit('deleteData', id);
  }
}
