<script setup>
	import UIDemoWithSelect from "./UIDemoWithSelect.vue";
	import UIDemo from "./UIDemo.vue";
	import MarkdownString from "./MarkdownString.vue";
	import CodeBlock from "./CodeBlock.vue";
	import camelCase from "camelcase";

	const props = defineProps({
		frontmatter: {
			type: Object,
			required: true,
		},
	});

	const allowedColors = [
		"amber",
		"blue",
		"cyan",
		"emerald",
		"fuchsia",
		"green",
		"indigo",
		"lime",
		"neutral",
		"orange",
		"pink",
		"purple",
		"red",
		"rose",
		"sky",
		"slate",
		"stone",
		"teal",
		"violet",
		"yellow",
		"zinc",
	];

	const availableTags = [
		{
			name: "one-way",
			type: "tip",
			text: "One-way Value",
			description: `This component will update if this state updates, but it does not update this state internally. This must be done through exposed events.`,
		},
	];

	if (props.frontmatter.colors != undefined) {
		var availableColors = props.frontmatter.colors
			.map((color) => {
				if (color.name == "Tailwind Color") {
					return allowedColors
						.map((value) => `<code class="text-${value}-400">${value}</code>`)
						.join(", ");
				} else {
					return `<code>${color.identifier}</code>`;
				}
			})
			.join(", ");
	}

	function getDescription(descriptionString) {
		return descriptionString.replace("<availableColors>", availableColors);
	}

	function getPropertyName(propertyName) {
		return typeof propertyName === "string"
			? `<code>${propertyName}</code>`
			: propertyName.map((name) => `<code>${name}</code>`).join(", ");
	}
</script>

<style>
	#markdown-string {
		p {
			margin-top: 0;
		}
	}

	table #markdown-string p {
		margin-bottom: 0;
	}
</style>

<template>
	<div class="flex flex-row items-center gap-2">
		<h1 id="header">
			{{ props.frontmatter.name }}
		</h1>
		<div class="inline-block align-top" v-if="props.frontmatter.needsLayer">
			<Badge
				type="tip"
				class="self-center place-self-center"
				text="requires layer"
			/>
		</div>
	</div>

	<p id="description" class="m-0 text-zinc-400">
		{{ props.frontmatter.description }}
	</p>
	<div v-if="props.frontmatter.usage">
		<h2 id="usage" class="mt-4">Usage</h2>
		<MarkdownString
			v-if="props.frontmatter.usage != undefined"
			:content="props.frontmatter.usage"
		/>
	</div>
	<div v-if="props.frontmatter.properties">
		<h2 id="properties" class="mt-4 mb-0">Properties</h2>
		<div
			:class="index == 0 ? '' : 'mt-12'"
			v-for="(property, index) in props.frontmatter.properties"
			:key="property.name"
		>
			<div class="flex flex-row items-center gap-2">
				<h3 :id="`property-${property.name}`" class="mt-3">
					<MarkdownString :content="getPropertyName(property.name)" />
				</h3>
				<div v-if="property.tags">
					<div class="inline-block align-top" v-for="tag in property.tags">
						<Badge
							:type="availableTags.find((t) => t.name == tag).type"
							class="self-center place-self-center"
							:text="availableTags.find((t) => t.name == tag).text"
							v-tooltip.top="
								availableTags.find((t) => t.name == tag).description
							"
						/>
					</div>
				</div>
			</div>
			<MarkdownString
				v-if="property.description"
				:content="getDescription(property.description)"
			/>
			<div v-if="property.type">
				<h4 class="mt-0" :id="`property-${property.name}-type`">Type</h4>
				<CodeBlock
					:content="`type ${camelCase(property.name)} = ${property.type}`"
				/>
			</div>

			<div v-if="property.showUIDemo">
				<UIDemoWithSelect :frontmatter="props.frontmatter" />
			</div>
		</div>
	</div>
	<div v-if="props.frontmatter.slots != undefined">
		<h2 id="slots" class="mt-4">Slots</h2>
		<MarkdownString
			:content="`Slots allow you to customize specific aspects of the component completely, often replacing the old instances.
            Slots are passed parameters that allow the slot to interact with component data that is normally not exposed.
            Generally, an [\`useColor\`](/libs/theme-framework/#type-useColorFunction) (the function passed by [\`theme:get()\`](/libs/theme-framework/#function-get)) function is passed as first parameter to allow the new components to use the same color as the parent component.
            When using slots, make sure to wrap any code that uses reactive values in a \`Computed\` (or any other classes that isolate state), to prevent unnecessary updates. 
        `"
		/>
		<div v-for="(slot, index) in props.frontmatter.slots" :key="slot.name">
			<h3 :class="index == 0 ? '' : 'mt-16'" :id="`slot-${slot.name}`">
				<code>{{ slot.name }}</code>
			</h3>
			<MarkdownString v-if="slot.description" :content="slot.description" />
			<div v-if="slot.type">
				<h4 class="mt-0" :id="`slot-${slot.name}-type`">Function Type</h4>
				<CodeBlock
					:content="`type ${camelCase(slot.name)}Slot = ${slot.type}`"
				/>
			</div>
			<div v-if="slot.uiDemo">
				<h4 class="mt-0">Usage</h4>
				<UIDemo
					:image="slot.uiDemo.image"
					:imageDark="slot.uiDemo.imageDark"
					:code="slot.uiDemo.code"
				/>
			</div>
		</div>
	</div>
	<!-- this is for libraries -->
	<div v-if="props.frontmatter.functions">
		<h2 id="functions" class="mt-4">Functions</h2>
		<div v-for="(func, index) in props.frontmatter.functions">
			<h3 :class="index == 0 ? '' : 'mt-16'" :id="`function-${func.name}`">
				<code>{{ func.name }}</code>
			</h3>
			<CodeBlock :content="func.code" />
			<MarkdownString
				v-if="func.description != undefined"
				:content="func.description"
			/>
		</div>
	</div>
	<div v-if="props.frontmatter.theming">
		<h2 id="theming" class="mt-4">Theming</h2>
		<ClientOnly>
			<MarkdownString
				:content="`With these states and colors, you can apply custom \`AppearanceOverride\`s to your components to match your design system.
            A more comprehensive guide on Appearance Overrides can be found [here](/getting-started#appearance-overrides).
            The default colors for this component can be found [here](https://github.com/VirtualButFake/FusionComponents/tree/main/src/theme/components/${props.frontmatter.name.toLowerCase()}).
            The following states and colors are available for theming:
            `"
			/>
		</ClientOnly>
		<div>
			<h3 id="colors">States</h3>
			<table>
				<thead>
					<tr>
						<th>State</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="state in props.frontmatter.theming.states"
						:key="state.name"
					>
						<td>
							<code>
								{{ state.name }}
							</code>
						</td>
						<td>
							<MarkdownString
								v-if="state.description != undefined"
								:content="state.description"
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div>
			<h3 id="colors">Colors</h3>
			<table>
				<thead>
					<tr>
						<th>Color</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="color in props.frontmatter.theming.colors"
						:key="color.name"
					>
						<td>
							<code>
								{{ color.name }}
							</code>
						</td>
						<td>
							<MarkdownString
								v-if="color.description != undefined"
								:content="color.description"
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div v-if="props.frontmatter.types">
		<h2 id="types" class="mt-4">Types</h2>
		<MarkdownString
			:content="`Certain types are reused across different components. 
            To make these types easily accessible, they are available below:`"
		/>
		<div v-for="(type, index) in props.frontmatter.types" :key="type.name">
			<h3 :class="index == 0 ? '' : 'mt-16'" :id="`type-${type.name}`">
				<code>{{ camelCase(type.name) }}</code>
			</h3>
			<MarkdownString
				v-if="type.description != undefined"
				:content="type.description"
			/>
			<div v-if="type.type">
				<h4 class="mt-2" :id="`type-${type.name}-type`" v-if="type.description">Type</h4>
				<CodeBlock :content="`type ${camelCase(type.name)} = ${type.type}`" />
			</div>
		</div>
	</div>
</template>
