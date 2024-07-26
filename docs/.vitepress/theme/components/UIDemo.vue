<script setup>
    import { useData } from "vitepress";
	import Card from "primevue/card";
	import ThemedImage from "./ThemedImage.vue";
	import CodeBlock from "./CodeBlock.vue";

    const { site } = useData();

	const props = defineProps({
		image: {
			type: String,
			required: true,
		},
		imageDark: {
			type: String,
		},
		code: {
			type: String,
			required: true,
		},
	});
</script>

<style scoped>
	#card {
		--p-card-body-padding: 0 !important;
		--p-card-body-gap: 0 !important;
	}
</style>

<template>
	<Card
		style="width: 100%; overflow: hidden"
		class="rounded-md border-[#e2e2e3] dark:border-[#2e2e32] border mt-2"
		id="card"
	>
		<template #header>
			<div class="border-b border-[#e2e2e3] dark:border-[#2e2e32] p-2">
				<ThemedImage :src="`${site.base}${props.image}`" :srcDark="`${site.base}${props.imageDark}`" />
			</div>
		</template>
		<template #footer>
			<CodeBlock
				class="m-0 rounded-none border-none"
				:content="code"
				lang="luau"
			/>
		</template>
	</Card>
</template>
