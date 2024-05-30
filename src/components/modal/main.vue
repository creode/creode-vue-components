<template>
  <div class="modal">
    <div class="modal__trigger">
      <a href="#" @click.prevent="triggerModal">
        <slot name="trigger-content"></slot>
      </a>
    </div>

    <Transition name="model-overlay">
      <div class="modal__overlay" v-show="modalOpen" @click="dismissOverlay">
        <div role="dialog" :id="modalId" aria-labelledby="{{ modalId }}_label" aria-model="true" class="modal__content" v-if="modalOpen">
          <div class="modal__close-wrapper">
            <button ref="modal_close_button" class="modal__close" @click.prevent="modalOpen = false"><slot name="close-icon">X</slot></button>
          </div>
          <h2 id="{{ modalId }}_label" class="modal__label">{{  modalLabel }}</h2>
          <slot></slot>
        </div>
      </div>
    </Transition>
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
    modalLabel: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      modalOpen: false
    }
  },
  methods: {
    triggerModal() {
      this.modalOpen = !this.modalOpen;
    },
    dismissOverlay(e) {
      if ( ! e.target.classList.contains('modal__overlay')) {
        return;
      }

      this.modalOpen = false;
    }
  },
}
</script>