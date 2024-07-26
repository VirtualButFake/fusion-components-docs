<script setup>
	import { computed } from "vue";
	import markdownRenderer from "../markdownRenderer";

	const props = defineProps({
		content: {
			type: String,
			required: true,
		},
	});

	const html = computed(() => markdownRenderer.render(props.content));
</script>

<template>
	<div id="markdown-string" v-html="html" />
</template>
