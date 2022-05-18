export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	_: {
		mime: {".png":"image/png",".txt":"text/plain"},
		entry: {"file":"start-069e0ad0.js","js":["start-069e0ad0.js","chunks/vendor-d253b1c8.js","chunks/preload-helper-ec9aa979.js"],"css":["assets/vendor-3331f240.css"]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			}
		]
	}
};
