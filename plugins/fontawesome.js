import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faHammer, 
  faWrench, 
  faScrewdriverWrench, 
  faPaintRoller, 
  faRulerCombined, 
  faHouseChimney, 
  faToolbox 
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Tambahkan ikon ke pustaka
library.add(
  faHammer,
  faWrench,
  faScrewdriverWrench,
  faPaintRoller,
  faRulerCombined,
  faHouseChimney,
  faToolbox
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
