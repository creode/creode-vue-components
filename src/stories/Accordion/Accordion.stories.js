import Accordion from '../../components/accordion/main.vue';
import AccordionItem from '../../components/accordion/sub-components/accordion-item.vue';

export default {
  title: 'Creode/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

const Template = (args) => ({
  components: { Accordion, AccordionItem },
  setup() {
    return { args };
  },
  template: `
    <accordion>
      <accordion-item index="1">
        <template #heading>
          <h3>{{ args.heading1 }}</h3>
        </template>
        <div v-html="args.content1"></div>
      </accordion-item>
      <accordion-item index="2">
        <template #heading>
          <h3>{{ args.heading2 }}</h3>
        </template>
        <div v-html="args.content2"></div>
      </accordion-item>
      <accordion-item index="3">
        <template #heading>
          <h3>{{ args.heading3 }}</h3>
        </template>
        <div v-html="args.content3"></div>
      </accordion-item>
    </accordion>
  `,
});

export const WithItems = Template.bind({}); 
WithItems.args = {
  heading1: 'Your 1st Heading Here',
  content1: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum consectetur dolor at porttitor.</p>
    <p>Ut pretium, sapien nec pharetra interdum, ante mi dignissim urna, at mollis neque nisi at nisl.</p>
    <p>Curabitur dolor metus, euismod ac scelerisque eget, vehicula nec tortor.</p>
  `,
  heading2: 'Your 2nd Heading Here',
  content2: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum consectetur dolor at porttitor.</p>
  `,
  heading3: 'Your 3rd Heading Here',
  content3: `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum consectetur dolor at porttitor.</p>
    <p>Ut pretium, sapien nec pharetra interdum, ante mi dignissim urna, at mollis neque nisi at nisl.</p>
  `,
};