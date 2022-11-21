export const signupUser = (params) => {
    return async(dispatch) => {
        const user = await fetch(`http://localhost:3000/signup`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(params)
        })

        dispatch({
            type: 'signupUser',
            payload: user
        })
    }
}