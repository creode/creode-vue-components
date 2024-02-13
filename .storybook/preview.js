/** @type { import('@storybook/vue3').Preview } */
import '../src/styles/entrypoint.scss';

import '../src/components/globals.scss';
import '../src/components/accordion/index.scss';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
