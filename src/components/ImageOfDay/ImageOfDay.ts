// eslint-disable-next-line max-classes-per-file
import { Options, Vue } from 'vue-class-component';
/** Models */

import axios from 'axios';


@Options({
  name: 'ImageOfDay',
  template: require('./ImageOfDay.html'),
  components: {},
})
export class ImageOfDay extends Vue {
  protected imageLink = '';
  protected copyright = '';
  protected title = '';
  protected explanation = '';
  protected isFetch = false;
  public created(): void {
    this.fetchData();
  }

  protected fetchData(): void {
   axios.get('https://api.nasa.gov/planetary/apod?api_key=xFrAhgJcGiktMrTdiSnQehAM785vOxVgIEneN63e').then((res: any) =>{
      if(res.status !== 200){
        return;
      }
      const data = res.data;
      this.isFetch = true;

      this.imageLink = data.hdurl;
      this.copyright = data.copyright;
      this.title = data.title;
      this.explanation = data.explanation;
    }).catch((error)=> {
      console.error(error);
    });
}

}
