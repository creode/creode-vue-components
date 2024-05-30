import TabbedContent from '../../components/tabbed-content/main.vue';
import Content from '../../components/tabbed-content/sub-components/content.vue';
import Tab from '../../components/tabbed-content/sub-components/tab.vue';

import '../../components/tabbed-content/scss/render.scss';

export default {
  title: 'Creode/TabbedContent',
  component: TabbedContent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The tabbed content component supports the rendering of interactive content held within tabs. This allows more content to be displayed in a smaller space. The component is made up of a tabbed content component and tabbed content item components. The tabbed content component is a wrapper for the tabbed content items. The tabbed content item component is a wrapper for the content and heading of each item. The heading is a slot and the content is a default slot. The heading is used to trigger the display of the content. The content is hidden by default and is shown when the heading is clicked.',
      },
    },
    slots: {
      tabs: {
        description: 'The tabs slot is used to define the tabs that will be displayed in the tabbed content component. The tabs are defined using the tab component. The tab component has an index prop that is used to define the order of the tabs. The content slot is used to define the content that will be displayed in the tabbed content component. The content is defined using the content component. The content component has an index prop that is used to define the order of the content.',
      },
      content: {
        description: 'The content slot is used to define the content that will be displayed in the tabbed content component. The content is defined using the content component. The content component has an index prop that is used to define the order of the content.',
      },
    },
  }
};

const Template = (args) => ({
  components: { TabbedContent, Content, Tab },
  setup() {
    return { args };
  },
  template: `
    <tabbed-content>
      <template #tabs>
        <tab :index="0">
        {{ args.heading1 }}
        </tab>
        <tab :index="1">
          {{ args.heading2 }}
        </tab>
      </template>
      <template #content>
        <content :index="0">
          <div v-html="args.content1"></div>
        </content>
        <content :index="1">
          <div v-html="args.content2"></div>
        </content>
      </template>
    </tabbed-content>
  `,
});

export const WithItems = Template.bind({}); 
WithItems.args = {
  heading1: 'Your 1st Heading Here',
  content1: `<p>I am the first element in the list of tabbed items.</p>`,
  heading2: 'Your 2nd Heading Here',
  content2: `<p>I am the second element in the list of tabbed items.</p>`,
};