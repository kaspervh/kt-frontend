import React, { useEffect, useState } from 'react';
import { Card, Form, Spinner, Table, Row, Col } from 'react-bootstrap';
import parse from "html-react-parser";

import {useDispatch, useSelector} from 'react-redux'
import { GetFactionsAction } from '../acions/FactionsAction';
import { GetUnitsAction } from '../acions/UnitAction';


function HomeComponent() {
  const dispatch = useDispatch();
  const factions = useSelector(state => state.FactionsReducer)
  const units = useSelector(state => state.UnitsReducer)

  const [loading, setLoading] = useState(false)
  const [faction, setFaction] = useState(0)
  const [pickedUnits, setPickedUnits] = useState([]);

  useEffect(() => {
    dispatch(GetFactionsAction())
  },[dispatch]) 

  useEffect(() => {
    console.log(units);
  }, [units])

  const handleFaction = (faction_id) =>{
    setLoading(true)
    setFaction(faction_id)
    if(faction.length  !== 0){
      setPickedUnits([])
      dispatch(GetUnitsAction(faction_id))
      setPickedUnits([...pickedUnits, {}])
    }
    setLoading(false)
  }

  const changeUnit = (index, unitName) => {
    const currentUnit = units.find(u => u.name === unitName)
    const currentUnits = [...pickedUnits]
    const currentPick = {
                         name: currentUnit.name, weapon_skill: currentUnit.weapon_skill, balistics_skill: currentUnit.balistics_skill, strength: currentUnit.strength, 
                         toughness: currentUnit.toughness, wounds: currentUnit.wounds, initiative: currentUnit.initiative, attacks: currentUnit.attacks , leadership: 
                         currentUnit.leadership, armor_save: currentUnit.armor_save, unit_type: currentUnit.unit_type, price: currentUnit.price, options: 
                         currentUnit.options, special_rules: currentUnit.special_rules, weapon_options: [], armourys: []
                        }
    currentUnits[index] = currentPick
    setPickedUnits(currentUnits)
  }


  return (
    <div>
      <br/>
      <Card>
        <Card.Body>
          <h2>Create killteam</h2>
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
                  <Form.Select onChange={e => changeUnit(index, e.target.value)}>
                    <option value="">Select Unit</option>
                    {units.length !== 0 && units.map((unit, index) => <option key={index} value={unit.name}>{unit.name}</option>)}
                  </Form.Select>
                  <br />
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
                        {unit.special_rules && unit.special_rules.map((rule, index) => <li key={index}>{rule.name}</li>)}
                      </ul>
                    </Col>
                    <Col>
                      {unit.options && parse(unit.options)}
                    </Col>
                    
                  </Row>
                </Card.Body>
              </Card>
            )
          })}
          <br/>
          <br/>
          {loading && <Spinner animation="border" />}
        </Card.Body>
      </Card>
    </div>
  )
}

export default HomeComponent