<template>
  <div class="accordion-item">
    <h3>
      <button
        @click="toggle" 
        :aria-expanded="isOpen"
        :aria-controls="sectionId"
        class="accordion-trigger"
        :id="buttonId">
        <slot name="heading"></slot>
      </button>
    </h3>
    <transition-expand>
      <div v-show="isOpen" :id="sectionId"
          role="region"
          :aria-labelledby="buttonId"
          class="accordion-panel"
          ref="content"
        >
        <slot></slot>
      </div>
    </transition-expand>
  </div>
</template>

<script>
import { ref, inject } from 'vue';
import TransitionExpand from '../../transition-expand/main.vue';

export default {
  name: 'AccordionItem',
  components: {
    TransitionExpand
  },
  props: {
    index: {
      type: String,
      required: true
    }
  },
  computed: {
    buttonId: function() {
      return 'accordion-' + this.index + '-button';
    },
    sectionId: function () {
      return 'accordion-' + this.index + '-section';
    }
  },
  setup(props, { emit }) {
    const isOpen = ref(false);
    const accordionToggle = inject('accordionToggle', () => {
      console.warn('accordionToggle function not provided');
    });
    
    const toggle = () => {
      isOpen.value = !isOpen.value;
      accordionToggle(isOpen);
    };
    
    return {
      isOpen,
      toggle
    };
  }
};
</script>
