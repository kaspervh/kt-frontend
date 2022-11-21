import React, { useEffect } from 'react';
import { Card, Button, Row, Col, ListGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getRostersAction } from '../../acions/RostersAction';

function RostersComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.SessionReducer)
  const rosters = useSelector(state => state.RostersReducer)

  useEffect(() => {
    if((user && user.token) && rosters.length === 0){
      dispatch(getRostersAction(user.token))
    }
  }, [rosters, dispatch, user])

  return (
    <div>
      <br />
      <br />
      <Card>
        <Card.Body>
          <Row>
            <Col>
              <h4>Your teams</h4>
            </Col>
            <Col>
              <Button className='float-end' onClick={e => navigate('/')}>Create team</Button>
            </Col>
          </Row>
          <br/>
          {rosters.length === 0 && <p>you have no current team, click on "Create team" to get one</p>  }
          {rosters.length !== 0  && 
            <ListGroup>
              {rosters.map((roster, index) => {
                return <ListGroup.Item key={index} action href={`/rosters/show/${index}`}>{roster.name}</ListGroup.Item>
              })}
            </ListGroup>
          }
        </Card.Body>
      </Card>
    </div>
  )
}

export default RostersComponent