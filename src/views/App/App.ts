import { Vue, Options } from 'vue-class-component';
import {NavBar} from '@/components/NavBar/NavBar';
import { Footer } from '@/components/Footer/Footer';
// Models
@Options({
  name: 'App',
  template: require('./App.html'),
  components: {NavBar, Footer},
})
export class App extends Vue {}
