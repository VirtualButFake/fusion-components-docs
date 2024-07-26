<script setup>
	import { useData } from "vitepress";
	import { ref, toRef, watch } from "vue";
	import shikiHighlighter from "../shikiHighlighter";

	const { site, page } = useData();

	const props = defineProps({
		content: {
			type: String,
		},
		lang: {
			type: String,
			required: false,
			default: "luau",
		},
	});

	const codeOutput = ref(
		"<p>Code block has not loaded. An error may have occurred.</p>"
	);

	async function updateHtml() {
		if (!props.content) return;

		// try to find all links in thew content (in markdown format, so [text](url))
		// and replace them with linkTo_0, save the link in a map
		// then, in the html, replace linkTo_0 with the actual link
		const links = new Map();
		let linkIndex = 0;

		const content = props.content.replace(
			/\[([^\]]+)\]\(([^)]+)\)/g,
			(_, text, url) => {
				const linkTo = `linkTo_${linkIndex++}`;
				links.set(linkTo, { text, url });
				return linkTo;
			}
		);

		let out = await shikiHighlighter.codeToHtml(content, props.lang);

		for (let [linkTo, { text, url }] of links) {
            if (url.startsWith("#")) {
                url = `/${page.value.relativePath.split(".md")[0]}${url}`
            }

			out = out.replace(
				linkTo,
				`<a href="${site.value.base.slice(0, -1)}${url}">${text}</a>`
			);
		}

		codeOutput.value = out;
	}

	const contentRef = toRef(props, "content");
	watch(contentRef, () => {
		updateHtml();
	});

	updateHtml();
</script>

<style>
	pre.shiki {
		background-color: transparent !important;
	}

	html.dark .shiki,
	html.dark .shiki span {
		color: var(--shiki-dark) !important;
		/* Optional, if you also want font styles */
		font-style: var(--shiki-dark-font-style) !important;
		font-weight: var(--shiki-dark-font-weight) !important;
		text-decoration: var(--shiki-dark-text-decoration) !important;
	}
</style>

<template>
	<div class="language-luau vp-adaptive-theme">
		<button class="copy" title="Copy Code" />
		<span class="lang">{{ props.lang }}</span>
		<div v-html="codeOutput" />
	</div>
</template>
