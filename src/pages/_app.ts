import type { App } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { register } from 'swiper/element/bundle';

register();

export default (app: App) => {
  app.component('FontAwesomeIcon', FontAwesomeIcon);
};
