<template>
    <div class="accordion__wrapper">
        <slot></slot>
    </div>
</template>

<script>
import { ref, provide, reactive } from 'vue';

export default {
    name: 'Accordion',
    setup() {
        const openItem = ref(null);
        
        const accordionToggle = (clickedItem) => {
            if (openItem.value && openItem.value !== clickedItem) {
                openItem.value.value = false; // Close the previously open item
            }
            openItem.value = clickedItem.value ? clickedItem : null;
        };
        
        provide('accordionToggle', accordionToggle);
        
        return {
            openItem
            // You can return other reactive properties or methods if needed
        };
    }
};
</script>

<!-- Add your styles here -->