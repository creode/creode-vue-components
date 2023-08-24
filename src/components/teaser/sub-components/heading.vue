<template>
	<h3 class="teaser__heading">
		<component :is="href ? 'a' : 'span'" :href="href" :target="target" class="teaser__heading-inner">
			<slot></slot>
		</component>
	</h3>
</template>

<script>
	export default {
		name: 'heading',
		props: {
			href: {
				type: String,
				default: ''
			},
			target: {
				type: String,
				default: ''
			},
		}
	};
</script>
