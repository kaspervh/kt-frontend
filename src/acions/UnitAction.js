export const GetUnitsAction = (faction_id) => {
  return async(dispatch) => {
    const units = await fetch(`http://localhost:3000/units?faction_id=${faction_id}`, {
      method: 'GET',
      headers: {"Content-Type": "application/json"}
    })

    dispatch({
      type: 'GetUnitsAction',
      payload: await units.json()
    })
  }
} 