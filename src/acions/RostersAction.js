export const saveRosterAction = (token, name, data) => {
  return async(dispatch) => {
    const roster = await fetch("http://localhost:3000/rosters", {
      method: 'POST',
      headers: {"Content-Type": "application/json", token: token},
      body: JSON.stringify({name: name, data: JSON.stringify(data)})
    })

    dispatch({
      type: "saveRosterAction",
      payload: await roster.json()
    })
  }
}

export const getRostersAction = (token) => {
  return async(dispatch) => {
    const roster = await fetch("http://localhost:3000/rosters", {
      method: 'GET',
      headers: {"Content-Type": "application/json", token: token}
    })

    dispatch({
      type: 'getRostersAction',
      payload: await roster.json()
    })
  }
}