console.log('666')
module.exports = {
	title: 'web-learning-notes',
	description: 'Just playing around',
	themeConfig: {
		sidebar: [
			{
				title: 'JS',
				collapsable: false,
				children: [
					'/JS/事件循环',
					'/JS/JS array',
					'/JS/post请求下载文件',
					'/JS/关于函数中this指向的问题',
					'/JS/正则表达式',
					'/JS/防抖和节流',
				]
			},
			{
				title: 'CSS3',
				collapsable: true,
				children: [
					'/CSS3/flex'
				]
			},
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
