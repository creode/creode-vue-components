import ComponentBundle from '../../classes/component-bundle.js'
import main from './main.vue';

import content from './sub-components/content.vue';
import tab from './sub-components/tab.vue';

var bundle = new ComponentBundle('tabbed-content');

bundle.addMainComponent(main);
bundle.addSubComponent('tabbed-content-content', content);
bundle.addSubComponent('tabbed-content-tab', tab);

export default bundle;
