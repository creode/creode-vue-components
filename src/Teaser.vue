<template>
    <h1>{{ $props.title }}</h1>
    <p>{{ $props.copy }}</p>
    <Button v-for="action in $props.actions" :title="action.title" :type="action.type" />
</template>

<script>
import Button from './Button.vue';

export default {
    name: 'Teaser',
    components: {
        Button
    },
    props: [
        'title',
        'copy',
        'actions',
    ],
}
</script>