<script setup>
	import AwaitImage from "./AwaitImage.vue";
	import { useData } from "vitepress";
	const { isDark } = useData();

	const props = defineProps({
		src: {
			type: String,
			required: true,
		},
		srcDark: {
			type: String,
			required: true,
		},
	});
</script>

<template>
	<ClientOnly>
		<AwaitImage v-show="isDark" :src="props.srcDark" />
		<AwaitImage v-show="!isDark" :src="props.src" />
	</ClientOnly>
</template>
