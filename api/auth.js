module.exports = () => {
  return require("./base")(
    "api/token",
    {},
    {
      auth_method: "application_credential",
      credential_id: process.env.APPLICATION_ID,
      credential_secret: process.env.APPLICATION_SECRET,
    },
  );
};


