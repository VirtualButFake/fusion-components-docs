import { createHighlighterCore } from "shiki/core";
import githubDark from "shiki/themes/github-dark.mjs";
import githubLight from "shiki/themes/github-light.mjs";

const highlighter = createHighlighterCore({
	themes: [githubDark, githubLight],
	langs: [import("shiki/langs/luau.mjs"), import("shiki/langs/toml.mjs")],
	loadWasm: import("shiki/wasm"),
});

export default {
    async codeToHtml(code: string, lang: string) {
        const actualHighlighter = await highlighter;
        
        return actualHighlighter.codeToHtml(code, {
            lang: lang,
            themes: {
                light: "github-light",
                dark: "github-dark",
            },
        });
    },
};
