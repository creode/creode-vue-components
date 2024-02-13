import ComponentBundle from '../../classes/component-bundle.js'

import main from './main.vue';

import item from './sub-components/item.vue';

var bundle = new ComponentBundle('accordion');

bundle.addMainComponent(main);
bundle.addSubComponent('item', item);

export default bundle;