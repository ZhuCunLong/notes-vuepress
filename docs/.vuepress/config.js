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
					'/JS/dom事件',
					'/JS/关于new关键字',
					'/JS/JS创建对象与继承'
				]
			},
			{
				title: 'CSS',
				collapsable: false,
				children: [
					'/CSS/flex',
					'/CSS/元素水平居中',
					'/CSS/position'
				]
			},
			{
				title: 'es6',
				collapsable: false,
				children: [
					'/es6/async-await',
					'/es6/class',
					'/es6/Generator',
					'/es6/Iterator',
					'/es6/let const var',
					'/es6/Promise',
					'/es6/require和import的区别',
				]
			},
			{
				title: 'vue',
				collapsable: false,
				children: [
					'/vue/Vue生命周期',
					'/vue/vue组件化实战',
					'/vue/vue自定义指令'
				]
			}
		],
		repo: 'zhucunlong/notes-vuepress'
	}
}
