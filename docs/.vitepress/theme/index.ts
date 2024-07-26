// https://vitepress.dev/guide/custom-theme
import "./styles/tailwind.css";
import "./styles/style.css";
import "./styles/vpdoc.css";
import "./styles/vpdoc-home.css";

// .vitepress/theme/index.ts
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import ComponentView from "./components/ComponentView.vue";
import CodeBlock from "./components/CodeBlock.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import Tooltip from "primevue/tooltip";
import { Icon } from "@iconify/vue";
import { definePreset } from "@primevue/themes";

const newPreset = definePreset(Aura, {
	semantic: {
		primary: {
			50: "{neutral.50}",
			100: "{neutral.100}",
			200: "{neutral.200}",
			300: "{neutral.300}",
			400: "{neutral.400}",
			500: "{neutral.500}",
			600: "{neutral.600}",
			700: "{neutral.700}",
			800: "{neutral.800}",
			900: "{neutral.900}",
			950: "{neutral.950}",
		},
		colorScheme: {
			light: {
				surface: {
					0: "#ffffff",
					50: "{zinc.50}",
					100: "{zinc.100}",
					200: "{zinc.200}",
					300: "{zinc.300}",
					400: "{zinc.400}",
					500: "{zinc.500}",
					600: "{zinc.600}",
					700: "{zinc.700}",
					800: "{zinc.800}",
					900: "{zinc.900}",
					950: "{zinc.950}",
				},
			},
			dark: {
				surface: {
					0: "#ffffff",
					50: "{neutral.100}",
					100: "{neutral.100}",
					200: "{neutral.200}",
					300: "{neutral.300}",
					400: "{neutral.400}",
					500: "{neutral.500}",
					600: "{neutral.600}",
					700: "{neutral.700}",
					800: "#1b1b1f",
					900: "#161618",
					950: "#202127",
				},
			},
		},
	},
});

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
        app.directive("tooltip", Tooltip);
		app.component("ComponentView", ComponentView);
        app.component("CodeBlock", CodeBlock);
		app.component("Icon", Icon);
		app.use(PrimeVue, {
			theme: {
				preset: newPreset,
				options: {
					darkModeSelector: ".dark",
				},
			},
		});
	},
} satisfies Theme;
