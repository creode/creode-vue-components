import ComponentBundle from '../../classes/component-bundle.js'
import main from './main.vue';
import heading from './sub-components/heading.vue';
import text from './sub-components/text.vue';

var bundle = new ComponentBundle('teaser');

bundle.addMainComponent(main);
bundle.addSubComponent('heading', heading);
bundle.addSubComponent('text', text);

export default bundle;
