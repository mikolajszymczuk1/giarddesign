import type { App } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default (app: App) => {
  app.component('FontAwesomeIcon', FontAwesomeIcon);
};
