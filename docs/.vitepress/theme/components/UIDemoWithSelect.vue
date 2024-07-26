<script setup>
	import Card from "primevue/card";
	import Select from "primevue/select";
	import AwaitImage from "./AwaitImage.vue";
	import CodeBlock from "./CodeBlock.vue";
	import { useData } from "vitepress";
	import { ref, watch } from "vue";
	import { computedAsync } from "@vueuse/core";

	const props = defineProps({
		frontmatter: {
			type: Object,
			required: true,
		},
	});

	const selectedColor = ref(props.frontmatter.colors[0].name);
	const selectedVariant = ref(props.frontmatter.colors[0].variants[0]);
	const fileExtension = ref("png");
	const { isDark } = useData();

	function getIdentifierForColor(colorName) {
		return props.frontmatter.colors.find((color) => color.name === colorName)
			.identifier;
	}

	const code = ref("");

	function updateCode([newColor, newVariant]) {
        fileExtension.value = "png";

		code.value = props.frontmatter.componentCode
			.replace("<color>", `"${getIdentifierForColor(newColor)}"`)
			.replace("<variant>", `"${newVariant}\"`);
	}

	watch([selectedColor, selectedVariant], updateCode);
	updateCode([selectedColor.value, selectedVariant.value]);

	const availableVariants = ref();

	function updateAvailableVariants(newColor, oldColor) {
		const newVariants = props.frontmatter.colors.find(
			(color) => color.name === newColor
		).variants;

		if (oldColor === undefined) {
			selectedVariant.value = newVariants[0];
			availableVariants.value = newVariants;
			return;
		}

		// if the currently selected variant is not available for the new color, select the first available variant
		if (!newVariants.includes(selectedVariant.value)) {
			selectedVariant.value = newVariants[0];
		}

		availableVariants.value = newVariants;
	}

	updateAvailableVariants(selectedColor.value);

	watch(selectedColor, updateAvailableVariants);
</script>

<style scoped>
	#card {
		--p-card-body-padding: 0 !important;
		--p-card-body-gap: 0 !important;

		.p-select {
			--p-select-background: var(--vp-c-bg) !important;
		}
	}
</style>

<template>
	<Card
		style="width: 100%; overflow: hidden"
		class="rounded-md border-[#e2e2e3] dark:border-[#2e2e32] border"
		id="card"
	>
		<template #header>
			<div
				class="p-1 bg-zinc-100 dark:bg-zinc-900 border-[#e2e2e3] dark:border-[#2e2e32] border-b rounded-t-md flex gap-2"
			>
				<Select
					v-model="selectedColor"
					:options="props.frontmatter.colors.map((color) => color.name)"
					placeholder="Select a Color"
					checkmark
					:highlightOnSelect="false"
					class="w-full md:w-56 border-[#e2e2e3] dark:border-[#2e2e32]"
				/><Select
					v-model="selectedVariant"
					:options="availableVariants"
					placeholder="Select a Variant"
					checkmark
					:highlightOnSelect="false"
					class="w-full md:w-56 border-[#e2e2e3] dark:border-[#2e2e32]"
				/>
			</div>
		</template>
		<template #content>
			<div class="border-b border-[#e2e2e3] dark:border-[#2e2e32] p-2">
				<ClientOnly>
					<AwaitImage
						:src="`/${props.frontmatter.name.toLowerCase()}-${getIdentifierForColor(
							selectedColor
						)}-${selectedVariant}-${
							isDark ? 'dark' : 'light'
						}.${fileExtension}`"
						:onError="
							() => {
								fileExtension = 'gif';
							}
						"
					/>
				</ClientOnly>
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
