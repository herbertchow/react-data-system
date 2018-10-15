import { createStore, applyMiddleware, combineReducers } from 'redux'
// 你可以去看一看这个中间件，它不是很复杂，而且能帮你锻炼出对中间件更敏锐的理解。
import promiseMiddleware from './promise-middleware'

// 在本应用中我们仅有一个 reducer,
// 但是下面用 ES6 写的 import，有趣且一气呵成的导入并生成了多个 reducer。
// 去 ./reducers.js 看看我们的 reducer 究竟是怎么做的(这里没有魔法)。
import * as reducers from './reducers'

// 这里看到的 data 参数是用于初始化 Redux store。
// 为简单起见我们不讨论它，但要感谢它让你在有真实数据的情况下来初始化 reducer。
// 例如在一个同构/通用应用中，你能从服务器端拉取数据，然后序列化并传递到客户端,
// 你的 Redux store 就能用这些数据来初始化。
// 这里我们没传任何数据，但最好要知道这个 createStore 是做什么的
export default function(data) {
  var reducer = combineReducers(reducers)
  var finalCreateStore = applyMiddleware(promiseMiddleware)(createStore)
  var store = finalCreateStore(reducer, data)

  return store
}