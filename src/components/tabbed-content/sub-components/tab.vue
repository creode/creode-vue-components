<template>
  <div class="tabbed-content__tab">
    <button
      @click="toggle"
      :aria-selected="activeItem === index"
      :aria-controls="`tabbed-content-content-${index}`"
      class="tabbed-content__tab-trigger"
      :class="{'tabbed-content__tab-trigger--active': activeItem === index}"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'Tab',
  props: {
    index: {
      type: [String, Number],
      required: true
    }
  },
  setup(props) {
    // Injecting the activeItem from the parent component
    const activeItem = inject('openItemIndex');

    // Injecting the tabToggle function from the parent component
    const tabToggle = inject('tabToggle', () => {
      console.warn('tabToggle function not provided');
    });

    const toggle = () => {
      // Call the tabToggle function with the index
      tabToggle(props.index);
    };

    return {
      toggle,
      activeItem // Return the injected activeItem to use in the template
    };
  },
};
</script>