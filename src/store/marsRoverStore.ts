import { Module, VuexModule, Mutation, Action  } from 'vuex-module-decorators';
@Module({
  name: 'marsRoverStore',
  namespaced: true,
})


export default class MarsRoverStore extends VuexModule {
   private currentImageMarsRover = 0;

   @Mutation
   public NEXT_CURRENT_IMG_MARS(): void {
     this.currentImageMarsRover +=1;
   }

   @Mutation
   public PREVIOUS_CURRENT_IMG_MARS(): void {
     this.currentImageMarsRover -= 1;
   }

   @Mutation
   public RESET_CURRENT_IMG_MARS(): void {
     this.currentImageMarsRover = 0;
   }

   @Mutation
   public TO_END(tab: string[]): void {
     this.currentImageMarsRover = tab.length;
   }

   @Action({ commit: 'TO_END' })
  public ToEndImg(tab: string[]): number {
    return tab.length;
  }

   @Action({ commit: 'NEXT_CURRENT_IMG_MARS' })
  public nextCurrentImgMars(): number {
    return this.currentImageMarsRover;
  }

  @Action({ commit: 'PREVIOUS_CURRENT_IMG_MARS' })
  public previousCurrentImgMars(): number {
    return this.currentImageMarsRover;
  }

    @Action({ commit: 'RESET_CURRENT_IMG_MARS' })
    public resetCurrentImage(): number {
      return this.currentImageMarsRover;
    }


  public get CurrentImgMars(): number {
    return this.currentImageMarsRover;
  }
}
