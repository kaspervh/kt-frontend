import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { GetFactionsAction } from '../acions/FactionsAction';

function HomeComponent() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetFactionsAction())
  },[])

  return (
    <div>
      <h1>LOADING</h1>
    </div>
  )
}

export default HomeComponent