<template>
	<div class="teaser__wrapper" :class="modifierClasses">
		<component :is="href ? 'a' : 'div'" :href="href" :target="target" class="teaser__inner">
			<component v-if="$slots.image" :is="imagehref ? 'a' : 'div'" :href="imagehref" :target="target" class="teaser__image-wrapper">
				<slot name="image"></slot>
			</component>
			<div class="teaser__content">
				<slot></slot>
			</div>
		</component>
	</div>
</template>

<script>
	export default {
		name: 'main',
		props: {
			format: {
				type: Number,
				default: 1
			},
			href: {
				type: String,
				default: ''
			},
			imagehref: {
				type: String,
				default: ''
			},
			target: {
				type: String,
				default: ''
			},
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
