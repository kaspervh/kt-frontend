export const SaveToLocalStorage = (payload) =>{
    try{
      const localStoragePayload = JSON.stringify(payload);
      sessionStorage.setItem('currentSession', localStoragePayload);
    }catch(error){
      console.log(error);
    }
  }
  
  export const LoadCurrentSession = () =>{
    try{
      const localStoragePayload = sessionStorage.getItem('currentSession');
      if(localStoragePayload == null){return null}
      return JSON.parse(localStoragePayload);
    }catch(error){
      console.log(error);
    }
  }
  
  export const DestroyCurrentSession = () =>{
    try {
      sessionStorage.removeItem('currentSession');
    } catch (error) {
      console.log(error);
    }
  }