import React, { useEffect, useState } from 'react';
import { Card, Form, Table, Row, Col, Button } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import parse from "html-react-parser";

import {useDispatch, useSelector} from 'react-redux'
import { GetFactionsAction } from '../acions/FactionsAction';
import { GetUnitsAction } from '../acions/UnitAction';
import { 
  resetPickedUnitAction, 
  addPickedUnitAction, 
  pickUnitAction, 
  selectUnitWeaponAction, 
  addUnitWeaponAction, 
  selectUnitWargearAction,
  addUnitWargearAction
 } from '../acions/PickedUnitsAction';
 import { calculatePointsAction } from '../acions/PointsAction'


function HomeComponent() {
  const dispatch = useDispatch();
  const factions = useSelector(state => state.FactionsReducer);
  const units = useSelector(state => state.UnitsReducer);
  const selectedUnits = useSelector(state => state.PickedUnitsReducer)
  const points = useSelector(state => state.PointsReducer)

  const [faction, setFaction] = useState(0);

  useEffect(() => {
    dispatch(GetFactionsAction())
  },[dispatch])
  
  useEffect(() => {
    dispatch(calculatePointsAction(selectedUnits))
  }, [selectedUnits])

  const handleFaction = (faction_id) =>{
    setFaction(faction_id);
    if(faction.length  !== 0){
      dispatch(GetUnitsAction(faction_id));
      dispatch(resetPickedUnitAction(selectedUnits))
    }
  }

  const weapons = (unitName) => units.find(u => u.name === unitName).weapon_options;

  const addWeapon = (index) => dispatch(addUnitWeaponAction(index, selectedUnits))

  const warGear = (unitName) => units.find(u => u.name === unitName).armourys;

  const selectWargear = (wargearName, unitName, unitId, index) => dispatch(selectUnitWargearAction(wargearName, unitName, unitId, index, units, selectedUnits))
  
  const addWargear= (index) => dispatch(addUnitWargearAction(index, selectedUnits))


  return (
    <div>
      <br/>
      <Card>
        <Card.Body>
          <h2>Create killteam</h2>
            {`${points} points`}            
          <br />
          <h4>Select Faction</h4>
          <Form.Select onChange={e => handleFaction(e.target.value)}>
            <option value="">Select faction</option>
            {factions.map((faction, index) => <option key={index} value={faction.id}>{faction.name}</option>)}
          </Form.Select>
          <br />
          {selectedUnits.map((unit, index) => {
            return(
              <Card key={index}>
                <Card.Body>
                  <h5>Unit name</h5>
                  <Form.Select onChange={e => dispatch(pickUnitAction(index, e.target.value, units, selectedUnits))}>
                    <option value="">Select Unit</option>
                    {units.length !== 0 && units.map((unit, index) => <option key={index} value={unit.name}>{`${unit.name} (${unit.price} points)`}</option>)}
                  </Form.Select>
                  <br />
                  {Object.keys(unit).length !== 0 && 
                    <div>
                      <Table>
                        <thead>
                          <tr>
                            <th></th>
                            <th>WS</th>
                            <th>BS</th>
                            <th>S</th>
                            <th>T</th>
                            <th>W</th>
                            <th>I</th>
                            <th>A</th>
                            <th>LD</th>
                            <th>SV</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td></td>
                            <td>{unit.weapon_skill}</td>
                            <td>{unit.balistics_skill}</td>
                            <td>{unit.strength}</td>
                            <td>{unit.toughness}</td>
                            <td>{unit.wounds}</td>
                            <td>{unit.initiative}</td>
                            <td>{unit.attacks}</td>
                            <td>{unit.leadership}</td>
                            <td>{unit.armor_save}</td>
                          </tr>
                        </tbody>
                      </Table>
                      
                      <Row>
                        <Col>
                          <h5>Special rules</h5>
                          <ul>
                            {unit.special_rules && unit.special_rules.map((rule, index) =>{ 
                              return (
                                <li key={index}>
                                  {rule.name}
                                  <OverlayTrigger key={index + 'right'} placement={'right'} overlay={
                                      <Tooltip id={`tooltip-right`}>
                                        {`${rule.description}  `}
                                      </Tooltip>
                                    }
                                  >
                                    <Button variant="link" size="sm">?</Button>
                                  </OverlayTrigger>
                                  
                                </li>
                              )
                            })}
                          </ul>
                        </Col>
                        <Col>
                          <h5>Unit Options</h5>
                          {unit.options && parse(unit.options)}
                        </Col>
                        
                      </Row>
                      <Row>
                        <Col>
                            <h5>Weapon options</h5>
                            {unit.weapon_options.map((weapon_option, index) => {
                              return (
                                <div key={index}>
                                  <Form.Select onChange={e => dispatch(selectUnitWeaponAction(e.target.value, unit.name, unit.id, index, units, selectedUnits))}>
                                    <option value="">Select Weapon</option>
                                    {weapons(unit.name).map((weapon, index) => <option key={index} value={weapon.name}>{`${weapon.name} (${weapon.price} Points)`}</option>)}
                                  </Form.Select>
                                  {Object.keys(weapon_option).length !== 0 && 
                                    <Table>
                                      <thead>
                                        <tr>
                                          <th></th>
                                          <th>Range</th>
                                          <th>Strength</th>
                                          <th>AP</th>                      
                                          <th>Type</th>
                                        </tr>                      
                                      </thead>
                                      <tbody>
                                        <tr>                                        
                                          <td></td>
                                          <td>{weapon_option.range}</td>
                                          <td>{weapon_option.strength}</td>
                                          <td>{weapon_option.armor_penetration}</td>
                                          <td>{weapon_option.weapon_type}</td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  }
                                  
                                </div>
                              )
                              
                            })}
                            <br />
                            <Button onClick={e => dispatch(addUnitWeaponAction(index, selectedUnits))}>Add Weapon</Button>
                        </Col>
                        <Col>
                          <h5>Wargear options</h5>
                          {unit.armourys.map((wargear, index) => {
                            return (
                              <div key={index}>
                                <Form.Select onChange={e => dispatch(selectUnitWargearAction(e.target.value, unit.name, unit.id, index, units, selectedUnits))}>
                                  <option value="">Select wargear</option>
                                  {warGear(unit.name).map((wargear, index) => <option key={index} value={wargear.name}>{`${wargear.name} (${wargear.price} points)`}</option>)}
                                </Form.Select>
                                <br />
                                <p>{wargear.description}</p>
                              </div>
                            )
                          })}
                          <br />
                          <Button onClick={e => addWargear(index)}>Add wargear</Button>
                        </Col>
                      </Row>
                      
                    </div>
                    
                  }
                </Card.Body>
              </Card>
            )
          })}
          <br />
          {`${points} points`}            
          <br/>
          <Button onClick={e => dispatch(addPickedUnitAction(selectedUnits))}>Add Unit</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default HomeComponent