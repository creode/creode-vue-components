<template>
  <transition>
    <div :class="{'hide-content': ! isVisible}">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import { inject, computed } from 'vue';

export default {
  name: 'tab-content-item',
  props: {
    index: {
      type: Number,
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
