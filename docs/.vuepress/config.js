module.exports = {
	title: 'web-learning-notes',
	description: 'Just playing around',
	themeConfig: {
		sidebar: [
			{
				title: 'es6',
				collapsable: true,
				children: [
					'/es6/async-await',
					'/es6/class',
					'/es6/Generator',
					'/es6/Iterator',
					'/es6/let const var',
					'/es6/Promise',
					'/es6/require和import的区别',
				]
			}
		],
		repo: 'zhucunlong/notes-vuepress'
	}
}
