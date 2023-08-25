import ComponentBundle from '../../classes/component-bundle.js'
import main from './main.vue';
import heading1 from './sub-components/heading-1.vue';
import heading2 from './sub-components/heading-2.vue';
import text from './sub-components/text.vue';
import cta from './sub-components/cta.vue';

var bundle = new ComponentBundle('banner');

bundle.addMainComponent(main);
bundle.addSubComponent('heading1', heading1);
bundle.addSubComponent('heading2', heading2);
bundle.addSubComponent('text', text);
bundle.addSubComponent('cta', cta);

export default bundle;
