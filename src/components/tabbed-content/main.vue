<template>
  <div class="tabbed_content__wrapper">
    <div class="tabbed_content__tabs">
      <slot name="tabs" :selectTab="tabToggle"></slot>
    </div>
    <div class="tabbed_content__content">
      <slot name="content" :currentIndex="openItemIndex"></slot>
    </div>
  </div>
</template>

<script>
  import { provide, ref } from 'vue';
  export default {
    name: 'tabbed-content',
    emits: ['tab-changed'],
    setup(_, { emit }) {
      const openItemIndex = ref(0);

      const tabToggle = index => {
        if (openItemIndex.value === index) {
          return;
        }

        openItemIndex.value = index; // Open the clicked tab
        emit('tab-changed', index); // Emit the tab-changed event with the new index
      };
      
      provide('tabToggle', tabToggle);
      provide('openItemIndex', openItemIndex);
      
      return {
        openItemIndex,
        tabToggle
      };
    }
  }
</script>
