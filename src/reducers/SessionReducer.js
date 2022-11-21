import { SaveToLocalStorage, LoadCurrentSession, DestroyCurrentSession } from "../scripts/SessionHelper"

const SessionReducer = (state = LoadCurrentSession(), action) => {
  switch(action.type){
    case 'loginAction':
      SaveToLocalStorage(action.payload);
      return state = action.payload;
    default:
      return state;
  }
}

export default SessionReducer;