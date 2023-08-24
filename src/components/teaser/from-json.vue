<template>
	<teaser :href="data.href" :imagehref="data.imagehref" :target="data.target" :format="data.format">
		<template v-slot:image>
			<span v-html="data.image"></span>
		</template>
		<component
			v-for="contentItem in data.content"
			:is="'teaser' + contentItem.type"
			:href="contentItem.attributes.href"
			:target="contentItem.attributes.target"
		>
			{{ contentItem.content }}
		</component>
	</teaser>
</template>

<script>
	import ComponentFromJson from '../../classes/component-from-json.js';
	export default new ComponentFromJson;
</script>
