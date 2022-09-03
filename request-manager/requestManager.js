import openNotificationWithIcon from "../ReactComponents/Dialogues/Notification";
import { BACK_END_BASE_URL } from "./urls";
import {FRONT_END_BASE_URL} from '../request-manager/urls'
import { NO_INTERNET_CONNECTION } from "./requestUrls";
const sendResquestToCentralAPI = (requestType, requestRoute, requestData,authToken=null) => {
  const useData = JSON.parse(localStorage.getItem("loggedInUser"));
  let jwtToken=null
  if(useData){
  jwtToken = useData.responsePayload.jwtToken;
  }
  return new Promise(async function (resolve, reject) {
   

    
    if (requestType == "GET") {
      // when request is of GET type
      try{
      fetch(`${BACK_END_BASE_URL}${requestRoute}`,{
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {  
          'Content-Type': 'application/json',
          Accept: 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': '*',
          'Authorization': `Bearer ${jwtToken}`,
        },
      }) 
        .then((res) => resolve(res)).catch((error)=>{
          window.location = NO_INTERNET_CONNECTION;     
        })
    }catch(e){
      window.location = NO_INTERNET_CONNECTION;
    }
    } else if (requestType == "POST") {
      
      // When request is of type post
      // fetch(`${BACK_END_BASE_URL}${requestRoute}`, {
         
        try{
          const response = await fetch(`${BACK_END_BASE_URL}${requestRoute}`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {  
              'Content-Type': 'application/json',
              Accept: 'application/json',
              // 'Content-Type': 'application/x-www-form-urlencoded',
              'User-Agent': '*',
              'Authorization': `Bearer ${jwtToken}`,
            },
            body: JSON.stringify(requestData) // body data type must match "Content-Type" header
          });
          // const resp = await response.json()
          resolve(response)
        } catch (error) {
          console.log("errro gahthh")
          window.location = NO_INTERNET_CONNECTION
          // openNotificationWithIcon("error","Request status ","Looks like internet connection error","bottom");
        }
    } 
    
    

  }).catch((error)=>{
    reject(error);
  });
};

export { sendResquestToCentralAPI };
