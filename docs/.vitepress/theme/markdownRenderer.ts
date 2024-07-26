import markdownit from "markdown-it";

const md = markdownit({
	html: true,
});

export default {
	render(markdownString: string, baseUrl: string) {
        // find links that start with / and add the base url
        // we are in markdown here, so the link syntax is [anything](/path)
        // we want to change it to [anything](baseUrl/path)
        // make sure to also check for the [] syntax, so we don't hit ()
        markdownString = markdownString.replace(/\[([^)]+)\]\(\/([^\]]+)\)/g, `[$1](${baseUrl}$2)`);
		return md.render(markdownString);
	},
};
