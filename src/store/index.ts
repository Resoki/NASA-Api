import { createStore } from 'vuex';
import { getModule } from 'vuex-module-decorators';

import MarsRoverStore from './marsRoverStore';


const store = createStore({
  state: {
    currentImage:0
  },
  mutations: {},
  actions: {},
  modules: {marsRoverStore: MarsRoverStore},
});

export default store;

export const marsRoverStore = (): MarsRoverStore =>
  getModule(MarsRoverStore, store);

