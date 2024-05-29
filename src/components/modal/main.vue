<template>
  <div class="modal">
    <div class="modal__trigger">
      <a href="#" @click.prevent="modalOpen = !modalOpen">
        <slot name="trigger-content"></slot>
      </a>
    </div>
    <Teleport :to="overlayLocation" v-if="isMounted">
      <Transition name="model-overlay">
        <div class="modal__overlay" v-if="modalOpen" @click="modalOpen = false">
          <div class="modal__content" v-if="modalOpen">
            <div class="modal__close-wrapper">
              <button class="modal__close" @click.prevent="modalOpen = false"><slot name="close-icon">X</slot></button>
            </div>
            <slot></slot>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: {
    modalLocation: {
      type: String,
      default: 'body'
    },
    overlayLocation: {
      type: String,
      default: 'body'
    }
  },
  data() {
    return {
      modalOpen: false,
      isMounted: false
    }
  },
  mounted(){
    this.isMounted = true;
  }
}
</script>