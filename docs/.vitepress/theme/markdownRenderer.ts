import markdownit from "markdown-it";

const md = markdownit({
	html: true,
});

export default {
	render(markdownString: string) {
		return md.render(markdownString);
	},
};
