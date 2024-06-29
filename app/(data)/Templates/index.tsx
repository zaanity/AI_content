export default [
	{
		id: 1,
		name: "Blog Title",
		desc: "An AI tool that generates blog titles based on your blog information",
		category: "Blog",
		icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
		aiPrompt:
			"Create a catchy blog title based on the following information",
		slug: "generate-blog-title",
		form: [
			{
				label: "Enter your blog niche",
				field: "input",
				name: "niche",
				required: true,
			},
			{
				label: "Enter blog outline",
				field: "textarea",
				name: "outline",
				required: true,
			},
		],
	},
	{
		id: 2,
		name: "Blog Content",
		desc: "An AI tool that generates blog content based on your information",
		category: "Blog",
		icon: "https://cdn-icons-png.flaticon.com/128/4581/4581788.png",
		aiPrompt: "Write a blog post based on the following information",
		slug: "generate-blog-content",
		form: [
			{
				label: "Enter your blog niche",
				field: "input",
				name: "niche",
				required: true,
			},
			{
				label: "Enter blog outline",
				field: "textarea",
				name: "outline",
				required: true,
			},
		],
	},
	{
		id: 3,
		name: "Blog Topic Ideas",
		desc: "An AI tool that generates creative blog topic ideas based on your niche",
		category: "Blog",
		icon: "https://cdn-icons-png.flaticon.com/128/4290/4290854.png",
		aiPrompt:
			"Generate creative blog topic ideas based on the following niche",
		slug: "generate-blog-topic-ideas",
		form: [
			{
				label: "Enter your blog niche",
				field: "input",
				name: "niche",
				required: true,
			},
		],
	},
	{
		id: 4,
		name: "YouTube SEO Title",
		desc: "An AI tool that creates SEO-optimized YouTube titles",
		category: "YouTube",
		icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
		aiPrompt: "Create an SEO-optimized YouTube title for a video about",
		slug: "generate-youtube-seo-title",
		form: [
			{
				label: "Enter video topic",
				field: "input",
				name: "topic",
				required: true,
			},
		],
	},
	{
		id: 5,
		name: "YouTube Description",
		desc: "An AI tool that writes compelling YouTube descriptions",
		category: "YouTube",
		icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
		aiPrompt: "Write a compelling YouTube description for a video about",
		slug: "generate-youtube-description",
		form: [
			{
				label: "Enter video topic",
				field: "input",
				name: "topic",
				required: true,
			},
		],
	},
	{
		id: 6,
		name: "YouTube Tags",
		desc: "An AI tool that generates effective YouTube tags",
		category: "YouTube",
		icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
		aiPrompt: "Generate a list of effective YouTube tags for a video about",
		slug: "generate-youtube-tags",
		form: [
			{
				label: "Enter video topic",
				field: "input",
				name: "topic",
				required: true,
			},
		],
	},
	{
		id: 7,
		name: "Rewrite Article (Plagiarism Free)",
		desc: "An AI tool that rewrites articles to be plagiarism-free",
		category: "Writing",
		icon: "https://cdn-icons-png.flaticon.com/128/1157/1157075.png",
		aiPrompt:
			"Rewrite the following article to be plagiarism-free while maintaining the original meaning",
		slug: "rewrite-article",
		form: [
			{
				label: "Enter article text",
				field: "textarea",
				name: "article",
				required: true,
			},
		],
	},
	{
		id: 8,
		name: "Text Improver",
		desc: "An AI tool that improves the clarity and engagement of text",
		category: "Writing",
		icon: "https://cdn-icons-png.flaticon.com/128/1828/1828843.png",
		aiPrompt: "Improve the clarity and engagement of the following text",
		slug: "text-improver",
		form: [
			{
				label: "Enter text",
				field: "textarea",
				name: "text",
				required: true,
			},
		],
	},
	{
		id: 9,
		name: "Add Emoji",
		desc: "An AI tool that adds relevant emojis to enhance text",
		category: "Writing",
		icon: "https://cdn-icons-png.flaticon.com/128/5948/5948608.png",
		aiPrompt: "Add relevant emojis to enhance the following text",
		slug: "add-emoji",
		form: [
			{
				label: "Enter text",
				field: "textarea",
				name: "text",
				required: true,
			},
		],
	},
];
