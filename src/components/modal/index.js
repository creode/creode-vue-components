import ComponentBundle from '../../classes/component-bundle.js'
import main from './main.vue';

var bundle = new ComponentBundle('modal');

bundle.addMainComponent(main);

export default bundle;
