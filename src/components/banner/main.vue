<template>
	<div class="banner__wrapper" :class="modifierClasses">
		<div class="banner__inner">
			<div class="banner__media-wrapper" v-if="$slots.media">
				<slot name="media"></slot>
			</div>
			<div class="banner__content">
				<div class="banner__content-inner">
					<slot></slot>
				</div>
			</div>
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
				const base = 'banner__wrapper--';

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
