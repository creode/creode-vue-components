<template>
  <div v-show="isVisible">
    <slot></slot>
  </div>
</template>

<script>
import { inject, computed } from 'vue';

export default {
  name: 'tab-content-item',
  props: {
    index: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const openItemIndex = inject('openItemIndex');

    const isVisible = computed(() => {
      return props.index === openItemIndex.value;
    });

    return {
      isVisible
    };
  }
};
</script>