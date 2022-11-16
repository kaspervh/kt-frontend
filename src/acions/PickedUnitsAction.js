export const resetPickedUnitAction = () => {
    return ({
        type: 'resetPickedUnitAction'
    })
}

export const addPickedUnitAction = (units) => {
    return ({
        type: 'addPickedUnitAction',
        payload: [...units, {}]
    })
}

