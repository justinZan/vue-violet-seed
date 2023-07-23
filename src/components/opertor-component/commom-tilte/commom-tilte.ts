import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class CommonTitle extends Vue {
  @Prop({ default: '' })
  title: any;
}
