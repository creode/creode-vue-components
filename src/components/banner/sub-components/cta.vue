<template>
	<div class="banner__cta-wrapper">
		<a :href="href" :target="target" :title="title" class="banner__cta">
			<span class="banner__cta-inner">
				<slot></slot>
			</span>
		</a>
	</div>
</template>

<script>
	export default {
		name: 'cta',
		props: {
			href: {
				type: String
			},
			target: {
				type: String
			},
			title: {
				type: String
			}
		}
	};
</script>
