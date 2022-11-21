import React, { useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Row, Col, Table, Button} from 'react-bootstrap'
import parse from "html-react-parser";

import { getRostersAction } from '../../acions/RostersAction';

function ShowRosterComponent() {
  const dispatch = useDispatch();
  const {index} = useParams();
  const user = useSelector(state => state.SessionReducer);
  const rosters = useSelector(state => state.RostersReducer)
  const [currentRoster, setCurrentRoster] = useState({})

  useEffect(() =>{
    if((user && user.token) &&  rosters.length === 0){
      dispatch(getRostersAction(user.token))
    }else{
      setCurrentRoster(rosters[index])
      const currentUnits = JSON.parse(rosters[index].data) 
      console.log(currentUnits)
    }
  }, [rosters, dispatch, user])

  return (
    <div>
      <br/>
      <br/>
      <Card>
        <Card.Body>
          <h4>{currentRoster.name}</h4>
          {Object.keys(currentRoster).length !==0  && JSON.parse(currentRoster.data).map((unit, index) => {
            return(
              <Card key={index}>
                <Card.Body>
                  <Row>
                    <Col><h5>{unit.name}</h5></Col>
                    <Col><strong className="float-end">{`${unit.price} Points`}</strong></Col>
                  </Row>
                  
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
                                  <span>
                                    <strong>{rule.name} -</strong>
                                    <p>{rule.description}</p>
                                  </span>
                                  
                                                                    
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
                      <br />
                      <Row>
                        <Col>
                            <h5>Weapon options</h5>
                            <br/>
                            {unit.weapon_options.map((weapon_option, index) => {
                              return (
                                <div key={index}>
                                  <strong>{`${weapon_option.name} (${weapon_option.price} points)`}</strong>
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
                                  
                                  
                                </div>
                              )
                              
                            })}
                            <br />
                        </Col>
                        <Col>
                          <h5>Wargear options</h5>
                          <br/>
                          {unit.armourys.map((wargear, index) => {
                            return (
                              <div key={index}>
                                <strong>{`${wargear.name} (${wargear.price} points)`}</strong>
                                <br />
                                <p>{wargear.description}</p>
                              </div>
                            )
                          })}
                          <br />
                        </Col>
                      </Row>                    
                </Card.Body>
              </Card>
            )
          })}
          <br />
          <br />
        </Card.Body>
      </Card>
      <br/>
      <br/>
    </div>
  )
}

export default ShowRosterComponent