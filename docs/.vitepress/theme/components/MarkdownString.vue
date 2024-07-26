<script setup>
	import { useData } from "vitepress";
	import { computed } from "vue";
	import markdownRenderer from "../markdownRenderer";

	const { site } = useData();

	const props = defineProps({
		content: {
			type: String,
			required: true,
		},
	});

	const html = computed(() => {
		return markdownRenderer.render(props.content, site.value.base);
	});
</script>

<template>
	<div id="markdown-string" v-html="html" />
</template>
