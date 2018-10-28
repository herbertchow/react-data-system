// 我们使用 Bluebird(https://github.com/petkaantonov/bluebird) 作为 promise 库，但其实你可以用任何你喜欢的。
import Promise from 'bluebird'

// 我们的 action 创建函数在一段延迟后获取当前时间，用于演示 promise 中间件的用法。

// promise 中间件接收2种情况的 action:
// 1) 一个如下格式的 action:
//    {
//      types: [REQUEST, SUCCESS, FAILURE], // action 的 types 需要按该顺序给出
//      promise: function() {
//        // 返回一个 promise
//      }
//    }
// 2) 其他任何可以传递给下一个中间件或 Redux 的 action， (准确的说，在这个 promise 中间件的实现中，这里的"其他任何 action" 传递到下一个中间件或 Redux 时，必须不包含 promise 属性)

// 当该 promise 中间件接收到 action 之后，它会生成2个 action:
// 一个 action 用于 action 创建函数的 REQUEST 情况，
// 后一个 action 用于 action 创建函数的 SUCCESS 或 FAILURE 情况

// 再者，这个 promise 中间件的代码并不复杂，值得去看一看 (./promise-middleware.js)

// 下面的 action 使用 "delay" 作为一个参数传递，用来延迟该 action 创建函数。
// 尝试改变延迟的值，验证它是否正确影响了我们 UI。
export function getTime(delay) {
	return {
		types: ['GET_TIME_REQUEST', 'GET_TIME_SUCCESS', 'GET_TIME_FAILURE'],
		promise: () => {
			return new Promise((resolve, reject) => {
				// 通过 setTimeout 来模拟一个异步服务器请求
				setTimeout(() => {
					const d = new Date()
					const ms = ('000' + d.getMilliseconds()).slice(-3)
					resolve({
						time: `${d.toString().match(/\d{2}:\d{2}:\d{2}/)[0]}.${ms}`
					})
				}, delay)
			})
		}
	}
}

export function fetchTableData() {
	return {
		types: ['FETCH_TBDATA_REQUEST', 'FETCH_TBDATA_SUCCESS', 'FETCH_TBDATA_FAILURE'],
		promise: () => {
			return new Promise((resolve, reject) => {
				// 通过 setTimeout 来模拟一个异步服务器请求
				setTimeout(() => {
					resolve({
						data: [
							{ sex: '男', admin: '小明', id: 1, dpm: '研发中心', add_time: '2018-10-27' },
							{ sex: '女', admin: '小花', id: 2, dpm: '研发中心', add_time: '2018-10-27' },
							{ sex: '女', admin: '小西', id: 3, dpm: '运营中心', add_time: '2018-10-27' },
							{ sex: '男', admin: '小强', id: 4, dpm: '研发中心', add_time: '2018-10-27' },
							{ sex: '男', admin: '小东', id: 5, dpm: '财务部', add_time: '2018-10-27' }
						],
						code: 200,
						total: 100,
					})
				}, 500)
			})
		}
	}
}

export function fetchChartData() {
	return {
		types: ['FETCH_CHARTDATA_REQUEST', 'FETCH_CHARTDATA_SUCCESS', 'FETCH_CHARTDATA_FAILURE'],
		promise: () => {
			return new Promise((resolve, reject) => {
				// 通过 setTimeout 来模拟一个异步服务器请求
				setTimeout(() => {
					resolve({
						datas: [
							{
								name:'邮件营销',
								type:'line',
								data:[120, 132, 101, 134, 90, 230, 210]
							},
							{
								name:'联盟广告',
								type:'line',
								data:[220, 182, 191, 234, 290, 330, 310]
							},
							{
								name:'视频广告',
								type:'line',
								data:[150, 232, 201, 154, 190, 330, 410]
							},
							{
								name:'直接访问',
								type:'line',
								data:[320, 332, 301, 334, 390, 330, 320]
							},
							{
								name:'搜索引擎',
								type:'line',
								data:[820, 932, 901, 934, 1290, 1330, 1320]
							}
						],
						title: '折线图事例',
						categories: ['周一','周二','周三','周四','周五','周六','周日'],
						code:200,
					})
				}, 500)
			})
		}
	}
}