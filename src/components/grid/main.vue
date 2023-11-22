<template>
	<div class="grid__wrapper" :class="modifierClasses">
		<div class="grid__inner">
			<div class="grid__items">
				<slot></slot>
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
			},
			reducebottomspace: {
				type: Boolean,
				default: false
			}
		},
		data: function() {
			return {
				modifierClasses: this.getModifierClasses()
			};
		},
		methods: {
			getModifierClasses: function() {
				const base = 'grid__wrapper--';

				var modifierClasses = [
					'format-' + this.format 
				];

				var returnable = {};

				for(var i=0; i<modifierClasses.length; i++) {
					returnable[base + modifierClasses[i]] = true;
				}

				returnable[base + 'reduce-bottom-space'] = this.reducebottomspace;

				return returnable;
			}
		}
	};
</script>
