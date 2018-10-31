export default function promiseMiddleware() {
	return (next) => (action) => {
        // console.log(next,typeof next,action,typeof action,222) //function , object
		const { promise, types, ...rest } = action

		if (!promise) {
			return next(action)
		}

		const [REQUEST, SUCCESS, FAILURE] = types

		next({ ...rest, type: REQUEST })

		return promise().then(
			(result) => {
				next({ ...rest, result, type: SUCCESS })
			},
			(error) => {
				next({ ...rest, error, type: FAILURE })
			}
		)
	}
}