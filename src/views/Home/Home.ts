import { Options, Vue } from 'vue-class-component';

/** Utils */
import { NavBar } from '@/components/NavBar/NavBar';
import {ImageOfDay} from '@/components/ImageOfDay/ImageOfDay';
import {MarsRover} from '@/components/MarsRover/MarsRover';

@Options({
  name: 'Home',
  template: require('./Home.html'),
  components: {NavBar, ImageOfDay, MarsRover},
})
export default class Home extends Vue {
  public created(): void {
    console.log('home load');
  }
}
