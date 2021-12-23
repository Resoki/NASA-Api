// eslint-disable-next-line max-classes-per-file
import { Options, Vue } from 'vue-class-component';

/** Components */

/** Models */

import axios from 'axios';
import { marsRoverStore } from '@/store';

@Options({
  name: 'MarsRover',
  template: require('./MarsRover.html'),
  components: {},
})

export class MarsRover extends Vue {
  protected allImages = [];

  protected get CurrentImgMars(): number {
    return marsRoverStore().CurrentImgMars;
  }
  public created(): void {
    this.fetchData();
  }

  protected currentImageNumber = 0;
  protected fetchData(): void {
  axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
  .then((res: any) =>{
      if(res.status !== 200){
        return;
      }
      const data = res.data;
      data.photos.forEach((element: { img_src: never; id: never}) => {
        console.log(element.img_src);
        this.allImages.push(element.img_src);
      });

    }).catch((error)=> console.error(error));

 }

 protected currentImage(number: number): void {
  return this.allImages[number];

}
  protected onNext(): void {
    marsRoverStore().nextCurrentImgMars();
}
  protected onPrevious(): void {
    marsRoverStore().previousCurrentImgMars();
  }

  protected toStart(): void {
    marsRoverStore().resetCurrentImage();
  }
  protected toEnd(): void {
    marsRoverStore().ToEndImg(this.allImages);
  }
}
