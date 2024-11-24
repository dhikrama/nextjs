import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCouch,
  faClock,
  faHammer,
  faWrench,
  faScrewdriverWrench,
  faPaintRoller,
  faClipboardList,
  faRulerCombined,
  faHouseChimney,
  faToolbox,
  faPhone, faEnvelope, faMapMarkerAlt,
  faThumbsUp,
  faBolt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Tambahkan ikon ke pustaka
library.add(
  faClipboardList,
  faCouch,
  faThumbsUp,
  faClock,
  faPhone, faEnvelope, faMapMarkerAlt,
  faHammer,
  faWrench,
  faScrewdriverWrench,
  faPaintRoller,
  faRulerCombined,
  faHouseChimney,
  faToolbox,
  faBolt
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
