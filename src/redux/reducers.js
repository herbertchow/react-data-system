// 这个文件包含我们应用仅有的一个 reducer。 它的表现对于你来说没什么新鲜的，除了将一个 action(GET_TIME) 的3个方面，写成3个专用的 action...
// 这样做允许我们做很漂亮的实时UI更新，就像这样:
// 1) 当收到 GET_TIME_REQUEST action，我们修改 state 来告诉 UI 的一部分需要被冻结(因为有一个挂起的操作)
// 2) 当收到 GET_TIME_SUCCESS (或 GET_TIME_FAILURE)之后，我们修改 state 为不冻结应用程序，然后添加收到的新数据。

var initialTimeState = {};

function getLoginStatus(){
    if(sessionStorage.loginInfo){
        const obj = JSON.parse(sessionStorage.loginInfo);
        return {user:{name:obj.user.name}, isLogin:obj.isLogin};
    }
    return {user:{name:null}, isLogin:false};
}

// 下面的 reducer 命名用"_"开头，用于从 state 中读取的时候，避免 state.time.time (出现两个 time )。
// 这只是个人偏好你可以不必这样做，它取决于你如何对各个 reducer 命名，和在 Redux 的 store 中暴露哪些属性。

export function _time(state = initialTimeState, action) {
	// console.log('_time reducer called with state ', state , ' and action ', action);

	switch (action.type) {
		case 'GET_TIME_REQUEST':
			return {
				...state,
                frozen: true,
                errText:''
			}
		case 'GET_TIME_SUCCESS':
			return {
				...state,
				time: action.result&&action.result.time,
                frozen: false,
                errText:action.result&&action.result.errText
			}
		case 'GET_TIME_FAILURE':
			// 这里我们可以添加一个错误消息，打印到我们应用程序的某个地方
			return {
				...state,
                frozen: false,
                time: action.result&&action.result.time,
                errText:action.result&&action.result.errText
			}
		default:
			return state
	}
}

//示例表格数据
export function _fetchTableData(state = { resData: { data: [] } }, action) {
	// console.log('_fetchTableData ',9999, state,9999 );

	switch (action.type) {
		case 'FETCH_TBDATA_REQUEST':
			return {
				...state,
				resData: { data: [] },
				frozen: true
			}
		case 'FETCH_TBDATA_SUCCESS':
			return {
				...state,
				resData: action.result,
				frozen: false
			}
		case 'FETCH_TBDATA_FAILURE':
			// 这里我们可以添加一个错误消息，打印到我们应用程序的某个地方
			return {
				...state,
				frozen: false
			}
		default:
			return state
	}
}

//示例图表数据
export function _fetchChartData(state = { chartData:{categories:[],datas:[],title:'' }}, action) {
	// console.log('_fetchChartData ',9999, state,9999 );

	switch (action.type) {
		case 'FETCH_CHARTDATA_REQUEST':
			return {
				...state,
				chartData: {categories:[],datas:[],title:'' },
				frozen: true
			}
		case 'FETCH_CHARTDATA_SUCCESS':
			return {
				...state,
				chartData: action.result,
				frozen: false
			}
		case 'FETCH_CHARTDATA_FAILURE':
			// 这里我们可以添加一个错误消息，打印到我们应用程序的某个地方
			return {
				...state,
				frozen: false
			}
		default:
			return state
	}
}

//登录状态
export function _loginType(state = getLoginStatus(), action) {
    switch (action.type) {
		case 'FETCH_LOGINTYPE_REQUEST':
			return {
				...state,
				frozen: true
			}
		case 'FETCH_LOGINTYPE_SUCCESS':
			return {
                ...state,
                isLogin: action.result.isLogin,
				user: action.result.user,
				frozen: false
			}
		case 'FETCH_LOGINTYPE_FAILURE':
			// 这里我们可以添加一个错误消息，打印到我们应用程序的某个地方
			return {
				...state,
				frozen: false
			}
		default:
			return state
	}
}

//首页loading
export function _entryLoading(state = {}, action) {
    switch (action.type) {
		case 'SET_ENTRYLOADING_SHOW':
			return {
				...state,
				frozen: true
			}
		case 'SET_ENTRYLOADING_HIDE':
			return {
                ...state,
				frozen: false
			}
		default:
			return state
	}
}