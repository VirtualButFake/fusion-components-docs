import { defineConfig } from "vitepress";
import { DefaultTheme } from "vitepress/types";

// icba to type this
async function getVersioningData(): Promise<
	Array<DefaultTheme.NavItemWithLink>
> {
	try {
		// @ts-ignore - there's a shared file that has the navbar data for versioning on the server, but it's not in this repo
		return await require("../../../../../navbar.json");
	} catch {
		return [
			{
				text: "Versioning data does not load when running locally",
				link: "/",
			},
		];
	}
}

async function getCurrentVersion(): Promise<string> {
	try {
		return (await import("../../version.json")).default.version;
	} catch {
		return "ss";
	}
}

export default defineConfig({
	title: "FusionComponents",
	description: "Documentation for all components included in FusionComponents",
	cleanUrls: true,
	// this is done for the docs server- it separates src and build
	outDir: "../../build",
	themeConfig: {
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Guide", link: "/get-started" },
			{ text: "Components", link: "/components/base/button" },
			{
				text: await getCurrentVersion(),
				items: await getVersioningData(),
			},
		],

		sidebar: [
			{
				text: "Introduction",
				items: [
					{
						text: "What is FusionComponents?",
						link: "/what-is-FusionComponents",
					},
					{
						text: "Getting Started",
						link: "/getting-started",
					},
				],
			},
			{
				text: "Utility Libraries",
				items: [
					{
						text: "Theme Framework",
						link: "/libs/theme-framework",
					},
					{
						text: "Fusion Utilities",
						link: "/libs/fusion-utils",
						items: [
							{
								text: "TopLayerProvider",
								link: "/libs/top-layer-provider",
							},
							{
								text: "PropertyProvider",
								link: "/libs/property-provider",
							},
						],
					},
					{
						text: "Tailwind",
						link: "/libs/tailwind",
					},
				],
			},
			{
				text: "Components",
				collapsed: false,
				items: [
					{
						text: "Base",
						items: [
							{ text: "Button", link: "/components/base/button" },
							{ text: "Frame", link: "/components/base/frame" },
							{ text: "Icon", link: "/components/base/icon" },
							{ text: "Image Label", link: "/components/base/imageLabel" },
							{ text: "Sink Frame", link: "/components/base/sinkFrame" },
							{ text: "Text", link: "/components/base/text" },
							{ text: "Text Box", link: "/components/base/textBox" },
						],
					},
					{
						text: "Common",
						items: [
							{ text: "Alert", link: "/components/common/alert" },
							{ text: "Badge", link: "/components/common/badge" },
							{ text: "Breadcrumb", link: "/components/common/breadcrumb" },
							{ text: "Button", link: "/components/common/button" },
							{ text: "Checkbox", link: "/components/common/checkbox" },
							{ text: "Color Picker", link: "/components/common/colorPicker" },
							{ text: "Context Menu", link: "/components/common/contextMenu" },
							{ text: "Input", link: "/components/common/input" },
							{ text: "Input Menu", link: "/components/common/inputMenu" },
							{ text: "Meter", link: "/components/common/meter" },
							{ text: "Modal", link: "/components/common/modal" },
							{ text: "Popover", link: "/components/common/popover" },
							{ text: "Progress Bar", link: "/components/common/progressBar" },
							{ text: "Range", link: "/components/common/range" },
							{
								text: "Scrolling Frame",
								link: "/components/common/scrollingFrame",
							},
							{ text: "Select Menu", link: "/components/common/selectMenu" },
							{ text: "Skeleton", link: "/components/common/skeleton" },
							{ text: "Slider", link: "/components/common/slider" },
							{ text: "Tabs", link: "/components/common/tabs" },
							{ text: "Tooltip", link: "/components/common/tooltip" },
						],
					},
					{
						text: "Utility",
						items: [
							{ text: "Await", link: "/components/utility/await" },
							{ text: "Canvas Frame", link: "/components/utility/canvasFrame" },
							{
								text: "InputCollector",
								link: "/components/utility/inputCollector",
							},
							{ text: "Menu Entry", link: "/components/utility/menuEntry" },
						],
					},
				],
			},
		],
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/VirtualButFake/FusionComponents",
			},
		],
		search: {
			provider: "local",
			options: {
				_render(src, env, md) {
					const html = md.render(src, env);

					if (env.frontmatter?.name)
						return md.render(`# ${env.frontmatter.name}`) + html;

					return html;
				},
			},
		},
		editLink: {
			pattern:
				"https://github.com/virtualbutfake/FusionComponents/edit/main/docs/:path",
		},
	},
	lastUpdated: true,
	vite: {
		build: {
			chunkSizeWarningLimit: 750, // We bundle with Shiki, and Shiki wasm is already 600kb
		},
	},
});
