const got = require("got");

module.exports = async (route, headers, data = null, method="GET") => {
    if (data) {
      var response = await got(route, {
        prefixUrl: process.env.API_SERVER,
        headers: headers,
        method: 'POST',
        json: data,
        responseType: "json",
        throwHttpErrors: false
      }); }
    else if (method == "GET") {
      var response = await got(route, {
        prefixUrl: process.env.API_SERVER,
        headers: headers,
        method: 'GET',
        responseType: "json",
        throwHttpErrors: false
      });  
    }
    else if (method == "DELETE") {
      var response = await got(route, {
        prefixUrl: process.env.API_SERVER,
        headers: headers,
        method: 'DELETE',
        responseType: "json",
        json: [],
        throwHttpErrors: false
      });
    }
    console.log(`route: ${route} - status_code: ${response.statusCode}`)
    return response;
};
