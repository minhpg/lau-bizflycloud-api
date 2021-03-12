
class Header {
  constructor(token, email) {
    (this["X-Auth-Token"] = token), (this["X-Tenant-Name"] = email);
  }
}

module.exports = () => {
  return require("./base")(
    "api/token",
    {},
    {
      auth_method: "application_credential",
      credential_id: process.env.APPLICATION_ID,
      credential_secret: process.env.APPLICATION_SECRET,
    },
  ).then(response => {return new Header(response.body.token,process.env.EMAIL)})
 }


