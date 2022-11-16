export const resetPickedUnitAction = () => {
    return ({
        type: 'resetPickedUnitAction'
    })
}

export const addPickedUnitAction = (units) => {
    return ({
        type: 'addPickedUnitAction'
    })
}

export const pickUnitAction = (index, unitName, units, pickedUnits) => {
    const currentUnit = units.find(u => u.name === unitName);
    const slectedUnits = [...pickedUnits]
    const currentPick = {
                         id: index, name: currentUnit.name, weapon_skill: currentUnit.weapon_skill, balistics_skill: currentUnit.balistics_skill, strength: currentUnit.strength, 
                         toughness: currentUnit.toughness, wounds: currentUnit.wounds, initiative: currentUnit.initiative, attacks: currentUnit.attacks , leadership: 
                         currentUnit.leadership, armor_save: currentUnit.armor_save, unit_type: currentUnit.unit_type, price: currentUnit.price, options: 
                         currentUnit.options, special_rules: currentUnit.special_rules, weapon_options: [{}], armourys: [{}]
                        };
    slectedUnits[index] = currentPick;
    
    return ({
        type: 'pickUnitAction',
        payload: slectedUnits
    })
}

export const selectUnitWeaponAction = (weaponName, unitName, unitId, index, units, pickedUnits) => {
    const weapon = units.find(u => u.name === unitName).weapon_options.find(w => w.name === weaponName);
    const selectedUnits = [...pickedUnits];
    selectedUnits.find(u => u.id === unitId).weapon_options[index] = {name: weapon.name, range: weapon.range, strength: weapon.strength, armor_penetration: weapon.armor_penetration, weapon_type: weapon.weapon_type, price: weapon.price};

    return({
        type: 'selecteUnitWeaponAction',
        payload: selectedUnits
    })
}


export const addUnitWeaponAction = (index, pickedUnits) => {
    const selectedUnits = [...pickedUnits];
    selectedUnits[index].weapon_options = [...selectedUnits[index].weapon_options, {}];

    return({
        type: 'addUnitWeaponAction',
        payload: selectedUnits
    })
}

export const selectUnitWargearAction = (wargearName, unitName, unitId, index, units, pickedUnits) => {
    const wargear = units.find(u => u.name === unitName).armourys.find(w => w.name === wargearName);
    const selectedUnits = [...pickedUnits];
    selectedUnits.find(u => u.id === unitId).armourys[index] = {name: wargear.name, description: wargear.description, price: wargear.price};

    return ({
        type: 'selectUnitWargearAction',
        payload: selectedUnits
    })
}

export const addUnitWargearAction = (index, pickedUnits) => {
    const selectedUnits = [...pickedUnits];
    selectedUnits[index].armourys = [...selectedUnits[index].armourys, {}];
    
    return ({
        type: 'addUnitWargearAction',
        payload: selectedUnits
    })
}