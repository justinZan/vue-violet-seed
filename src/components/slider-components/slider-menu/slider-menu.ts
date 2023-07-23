import { Vue, Component, Prop } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component({})
export default class SliderMenu extends Vue {
  @Prop(Array) routes: any;
  @Getter('isSidebar') isSidebar!: boolean;
}
