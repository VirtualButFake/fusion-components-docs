<script setup>
	import Skeleton from "primevue/skeleton";
	import { watch, ref, toRef } from "vue";

	const props = defineProps({
		src: {
			type: String,
			required: true,
		},
        onError: {
            type: Function,
            default: () => {},
        },
	});

	const show = ref(true);
	const src = toRef(props, "src");

	const imageWidth = ref("10px");
	const imageHeight = ref("10px");

	function refreshImage() {
		show.value = false;

		const img = new Image();
		img.src = props.src;
		img.onload = () => {
			show.value = true;
			imageWidth.value = `${img.width}px`;
			imageHeight.value = `${img.height}px`;
		};

        img.onerror = (event) => {
            props.onError(event);
        }
	}

	watch(props, refreshImage);
	refreshImage();
</script>
<template>
	<div>
		<img :src="src" :hidden="!show" />
		<Skeleton
			:width="imageWidth"
			:height="imageHeight"
			borderRadius="4px"
			:hidden="show"
		/>
	</div>
</template>
