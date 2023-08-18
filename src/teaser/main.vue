<template>
	<div class="teaser__wrapper" :class="modifierClasses">
		<div class="teaser__image-wrapper" v-if="$slots.image">
			<slot name="image"></slot>
		</div>
		<div class="teaser__content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'main',
		props: {
			format: {
				type: Number,
				default: 1
			}
		},
		data: function() {
			return {
				modifierClasses: this.getModifierClasses()
			};
		},
		methods: {
			getModifierClasses: function() {
				const base = 'teaser__wrapper--';

				var modifierClasses = [
					'format-' + this.format 
				];

				var returnable = {};

				for(var i=0; i<modifierClasses.length; i++) {
					returnable[base + modifierClasses[i]] = true;
				}

				return returnable;
			}
		}
	};
</script>
