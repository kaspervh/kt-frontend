export const GetFactionsAction = () =>{
	return async(dispatch) => {
		const factions = await fetch("http://localhost:3000/factions" ,{
			method: "GET",
		})

		dispatch({
			type: 'GetFactionsAction',
			payload: await factions.json()
		})
	}
}


