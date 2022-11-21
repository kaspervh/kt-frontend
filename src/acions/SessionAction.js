export const loginAction = (params) => {
    return async(dispatch) => {
        const session = await fetch(`http://localhost:3000/login`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(params)
        })

        dispatch({
            type: 'loginAction',
            payload: await session.json()
        })
    }
}