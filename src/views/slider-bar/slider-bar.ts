import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { constantRouterMap } from '@/router';
// Component
import SliderMenu from '@/components/slider-components/slider-menu/slider-menu';
@Component({
  components: {
    SliderMenu
  }
})
export default class SliderBar extends Vue {
  @Getter('isSidebar') isSidebar!: boolean;
  private permission_routers: any = constantRouterMap;
}
