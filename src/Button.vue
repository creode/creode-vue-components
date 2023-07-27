<template>
    <button type="{{ $props.type }}">{{ $props.title }}</button>
</template>

<script>
export default {
    name: 'Button',
    props: [
        'type',
        'title'
    ],
}
</script>