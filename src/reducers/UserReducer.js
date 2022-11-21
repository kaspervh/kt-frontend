const UserRducer = (state = {}, action) => {
  switch(action.type){
    case 'signupUser':
      return state = action.payload
    default:
      return state 
  }
}

export default UserRducer;