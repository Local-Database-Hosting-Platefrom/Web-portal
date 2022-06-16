const Server_url = "http://localhost:3000";

const sendResquestToCentralAPI = (requestType, requestRoute, requestData) => {
  return new Promise(function (resolve, reject) {
    if (requestType == "GET") {
      // when request is of GET type
      fetch(`${Server_url}${requestRoute}`)
        .then((res) => res.json())
        .then((response) => {
          resolve(response);
        });
    } else if (requestType == "POST") {
      // When request is of type post
      fetch(`${Server_url}${requestRoute}`, {
        // Adding method type
        method: "POST",
        // Adding body or contents to send
        body: JSON.stringify(requestData),
        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => response.json()).then((json) =>{
          console.log(josn)
          resolve(json);
      });
    }
  });
};

export { sendResquestToCentralAPI };
