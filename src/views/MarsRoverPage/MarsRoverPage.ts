import { Options, Vue } from 'vue-class-component';

/** Utils */
import { NavBar } from '@/components/NavBar/NavBar';
import { MarsRover } from '@/components/MarsRover/MarsRover';

@Options({
  name: 'MarsRoverPage',
  template: require('./MarsRoverPage.html'),
  components: {NavBar, MarsRover},
})
export default class MarsRoverPage extends Vue {
  public created(): void {
    console.log('home load');
  }
}
