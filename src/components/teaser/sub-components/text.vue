<template>
	<p class="teaser__text">
		<component :is="href ? 'a' : 'span'" :href="href" :target="target" class="teaser__text-inner">
			<slot></slot>
		</component>
	</p>
</template>

<script>
	export default {
		name: 'text',
		props: {
			href: {
				type: String,
				default: ''
			},
			target: {
				type: String,
				default: ''
			}
		}
	};
</script>
