<template>
  <a :href="$props.url" :style="styles" class="btn" @click="onClick">
    {{ $props.title }}
  </a>
</template>

<script>
import '../../assets/button.scss';

export default {
    name: 'Button',
    props: [ 'url', 'title' ],
    emits: ['click']
};
</script>
