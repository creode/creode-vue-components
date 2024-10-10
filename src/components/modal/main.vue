<template>
  <div class="modal">
    <div class="modal__trigger--wrapper">
      <a class="modal__trigger-link" :href="'#' + modalId" @click.prevent="triggerModal" title="Open Modal" v-if="!disabled">
        <slot name="trigger-content"></slot>
      </a>
      <span class="modal__trigger-link modal__trigger-link--disabled" v-else>
        <slot name="trigger-content"></slot>
      </span>
    </div>
    <Teleport v-if="teleport" :to="teleport">
      <Transition name="model-overlay">
        <div class="modal__overlay" v-show="modalOpen" @click="dismissOverlayClick">
          <div role="dialog" :id="modalId" :class="modalClass" :aria-labelledby="modalId + '_label'" aria-model="true" class="modal__content" v-if="modalOpen">
            <div class="modal__close-wrapper">
              <button class="modal__close" title="Close Modal" @click.prevent="modalOpen = false"><slot name="close-icon">X</slot></button>
            </div>
            <slot></slot>
          </div>
        </div>
      </Transition>
    </Teleport>
    <div v-else>
      <Transition name="model-overlay">
        <div class="modal__overlay" v-show="modalOpen" @click="dismissOverlayClick">
          <div role="dialog" :id="modalId" :class="modalClass" :aria-labelledby="modalId + '_label'" aria-model="true" class="modal__content" v-if="modalOpen">
            <div class="modal__close-wrapper">
              <button class="modal__close" title="Close Modal" @click.prevent="modalOpen = false"><slot name="close-icon">X</slot></button>
            </div>
            <slot></slot>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    modalId: {
      type: String,
      required: true
    },
    modalClass: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    teleport: {
      type: String,
      default: null
    },
  },
  data() {
    return {
      modalOpen: false
    }
  },
  methods: {
    triggerModal() {
      this.modalOpen = !this.modalOpen;
      this.$emit('update:modalOpen', this.modalOpen);
    },
    dismissOverlayClick(e) {
      if ( ! e.target.classList.contains('modal__overlay')) {
        return;
      }
      this.closeModal();
    },
    closeModal() {
        this.modalOpen = false;
        this.$emit('update:modalOpen', this.modalOpen);
    }
  },
}
</script>