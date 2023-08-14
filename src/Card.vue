<template>
    <div class="card" :class="classes">
    <div class="card-image">
        <!-- <slot name="image"> -->
            <!-- <img :src="$props.imageSrc" :alt="$props.imageAlt" /> -->
            <img src="https://placehold.co/600x400" alt="placeholder image" />

        <!-- </slot> -->
    </div>
    <!-- <slot name="copy"> -->
        <!-- <div>{{ $props.bodyCopy }}</div> -->
        <div class="content">
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p>
                Duis sagittis ante id libero volutpat, id consectetur neque tincidunt. 
                Integer in dolor dolor. Nam pretium at est nec egestas. 
                Donec commodo volutpat odio placerat rhoncus. 
            </p>
            <div v-if="$props.featured">
                 <div class="ctas">
                    <Button url="/" title="Find out more"></Button>
                </div>
            </div>
        </div>
    <!-- </slot> -->
    <!-- <slot name="call-to-action"> -->
        <!-- <div v-for="cta in $props.ctas" :key="cta.id">
            <a :href="cta.url">{{ cta.title }}</a>
        </div> -->
        <div v-if="!$props.featured" class="ctas">
            <Button url="/" title="Find out more"></Button>
        </div>
    <!-- </slot> -->
    </div>
</template>

<script>
    import '../assets/css/card.css';
    import { reactive, computed } from 'vue';
    import Button from './Button.vue';

    export default {
        name: 'Card',
        props: [
            'primary',
            'secondary',
            'featured',
            'imageScr', 
            'imageAlt', 
            'bodyCopy'
        ],

        components: { Button },

        setup(props) {
            props = reactive(props);
            return {
            classes: computed(() => ({
                'card-teaser--primary': props.primary,
                'card-teaser--secondary': props.secondary,
                'card-teaser--featured': props.featured
            }))
            };
        },
    }
</script>