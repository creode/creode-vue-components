import ComponentBundle from '../../classes/component-bundle.js'

import main from './main.vue';

import accordionItem from './sub-components/accordion-item.vue';

var bundle = new ComponentBundle('accordion');

bundle.addMainComponent(main);
bundle.addSubComponent('accordion-item', accordionItem);

export default bundle;