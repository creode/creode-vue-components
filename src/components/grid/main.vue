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
				var returnable = {};

				returnable['grid__wrapper--reduce-bottom-space'] = this.reducebottomspace;

				return returnable;
			}
		}
	};
</script>
