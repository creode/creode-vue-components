/** @type { import('@storybook/vue3').Preview } */
import '../src/styles/entrypoint.scss';

import '../node_modules/creode-components/src/components/globals.scss';
import '../node_modules/creode-components/src/components/accordion/index.scss';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
