import { Vue, Component } from 'vue-property-decorator';
// Component
import CloseApp from '@/components/header-components/close-app/close-app';
import MenuButton from '@/components/header-components/menu-button/menu-button';
import UserInfo from '@/components/header-components/user-info/user-info';

@Component({
  components: {
    CloseApp,
    MenuButton,
    UserInfo
  }
})
export default class Header extends Vue {

}
