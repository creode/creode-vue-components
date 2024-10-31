# Creode Vue Components
This is a package which spins off the main creode-components package and uses it as a dependency to this project.

There are two main reasons for splitting the package:
1. To allow for the main package to be used in other projects without the need for the Vue dependency.
2. To allow the SCSS created for version 2 of the creode-components package to be used on a project alongside our existing Vue component offering.

Any SCSS files that are required for the components to work have now moved into the creode-components package. This package will now only contain the Vue components themselves along with the required Javascript to register them.

## Installation
To install the package, run the following command:
```bash
npm install creode-vue-components
```

## Usage
To use the components in this package, you will need to import them into your project. Here is an example of how you can import the Accordion component:

```javascript
import { accordion } from 'creode-vue-components';
```

You can then register the component in your Vue application using this code:
```javascript
accordion.attachToApp(app);
```

You can then use the component in your Vue application as normal.

## Storybook
We have a storybook set up for the components in this package. To run the storybook, run the following command:
```bash
npm run storybook
```