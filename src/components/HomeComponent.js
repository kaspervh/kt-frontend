import React, { useEffect, useState } from 'react';
import { Card, Form, Table, Row, Col, Button } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import parse from "html-react-parser";

import {useDispatch, useSelector} from 'react-redux'
import { GetFactionsAction } from '../acions/FactionsAction';
import { GetUnitsAction } from '../acions/UnitAction';
import { addPickedUnitAction } from '../acions/PickedUnitsAction';


function HomeComponent() {
  const dispatch = useDispatch();
  const factions = useSelector(state => state.FactionsReducer);
  const units = useSelector(state => state.UnitsReducer);
  const selectedUnits = useSelector(state => state.PickedUnitsReducer)

  const [usedPoints, setUsedPoints] = useState(0);
  const [faction, setFaction] = useState(0);
  const [pickedUnits, setPickedUnits] = useState(selectedUnits);

  useEffect(() => {
    dispatch(GetFactionsAction())
  },[dispatch]) 

  // useEffect(() => {
  //   calculatePoints()
  // }, [pickedUnits])

  // const calculatePoints = () =>{
  //   let points = 0;
  //   for(const unit of pickedUnits){
  //     points = points + unit.price;
  //     if(!!unit.weapon_options){
  //       for(const weapon of unit.weapon_options){
  //         if(!!weapon.price){
  //           points = points + weapon.price
  //         }
  //       }
  //     }
  //     if(!!unit.armourys){
  //       for(const wargear of unit.armourys){
  //         if(!!wargear.price){
  //           points = points + wargear.price
  //         }
  //       }
  //     }
  //   }
  //   setUsedPoints(points);
  // }

  const handleFaction = (faction_id) =>{
    setFaction(faction_id);
    if(faction.length  !== 0){
      setPickedUnits([]);
      dispatch(GetUnitsAction(faction_id));
      dispatch(addPickedUnitAction(selectedUnits))
    }
  }

  const changeUnit = (index, unitName) => {
    const currentUnit = units.find(u => u.name === unitName);
    const currentUnits = [...pickedUnits];
    const currentPick = {
                         id: index, name: currentUnit.name, weapon_skill: currentUnit.weapon_skill, balistics_skill: currentUnit.balistics_skill, strength: currentUnit.strength, 
                         toughness: currentUnit.toughness, wounds: currentUnit.wounds, initiative: currentUnit.initiative, attacks: currentUnit.attacks , leadership: 
                         currentUnit.leadership, armor_save: currentUnit.armor_save, unit_type: currentUnit.unit_type, price: currentUnit.price, options: 
                         currentUnit.options, special_rules: currentUnit.special_rules, weapon_options: [{}], armourys: [{}]
                        };
    currentUnits[index] = currentPick;
    setPickedUnits(currentUnits);
  }

  const addUnit = () => dispatch(addPickedUnitAction(selectedUnits));

  const weapons = (unitName) => units.find(u => u.name === unitName).weapon_options;
  
  const selectWeapon = (weaponName, unitName, unitId, index) => {
    const weapon = units.find(u => u.name === unitName).weapon_options.find(w => w.name === weaponName);
    const currentUnits = [...pickedUnits];
    currentUnits.find(u => u.id === unitId).weapon_options[index] = {name: weapon.name, range: weapon.range, strength: weapon.strength, armor_penetration: weapon.armor_penetration, weapon_type: weapon.weapon_type, price: weapon.price};
    setPickedUnits(currentUnits);
  }

  const addWeapon = (index) => {
    const currentUnits = [...pickedUnits];
    currentUnits[index].weapon_options = [...currentUnits[index].weapon_options, {}];
    setPickedUnits(currentUnits);
  }

  const warGear = (unitName) => units.find(u => u.name === unitName).armourys;

  const selectWargear = (wargearName, unitName, unitId, index) => {
    const wargear = units.find(u => u.name === unitName).armourys.find(w => w.name === wargearName);
    const currentUnits = [...pickedUnits];
    currentUnits.find(u => u.id === unitId).armourys[index] = {name: wargear.name, description: wargear.description, price: wargear.price};
    setPickedUnits(currentUnits);
  }

  const addWargear= (index) => {
    const currentUnits = [...pickedUnits];
    currentUnits[index].armourys = [...currentUnits[index].armourys, {}];
    setPickedUnits(currentUnits);
  }


  return (
    <div>
      <br/>
      <Card>
        <Card.Body>
          <h2>Create killteam</h2>
            {`${usedPoints} points`}            
          <br />
          <h4>Select Faction</h4>
          <Form.Select onChange={e => handleFaction(e.target.value)}>
            <option value="">Select faction</option>
            {factions.map((faction, index) => <option key={index} value={faction.id}>{faction.name}</option>)}
          </Form.Select>
          <br />
          {pickedUnits.map((unit, index) => {
            return(
              <Card key={index}>
                <Card.Body>
                  <h5>Unit name</h5>
                  <Form.Select onChange={e => changeUnit(index, e.target.value)}>
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
                                  <Form.Select onChange={e => selectWeapon(e.target.value, unit.name, unit.id, index)}>
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
                            <Button onClick={e => addWeapon(index)}>Add Weapon</Button>
                        </Col>
                        <Col>
                          <h5>Wargear options</h5>
                          {unit.armourys.map((wargear, index) => {
                            return (
                              <div key={index}>
                                <Form.Select onChange={e => selectWargear(e.target.value, unit.name, unit.id, index)}>
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
          {`${usedPoints} points`}            
          <br/>
          <Button onClick={e => addUnit()}>Add Unit</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default HomeComponent