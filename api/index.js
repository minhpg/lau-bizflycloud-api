const Auth = require("./auth");
const Endpoint = require("./base");
require("dotenv").config();



class Server {
  constructor(
    name,
    flavor = "1c_1g",
    os = {
      id: "c9d2a3aa-7df5-4e82-a39d-939e41de00b9",
      type: "image",
    },
    rootdisk = {
      size: 20,
      type: "HDD",
    },
    sshkey = process.env.SSH_KEY,
    password = true,
    type = "basic",
    zone = "HN1"
  ) {
    (this.flavor = flavor),
      (this.name = name),
      (this.os = os),
      (this.rootdisk = rootdisk),
      (this.sshkey = sshkey),
      (this.password = password),
      (this.type = type),
      (this.availability_zone = zone);
  }
}

const GetInstancesFlavors = () => {
  return Auth().then((headers) => {
    return Endpoint("iaas-cloud/api/flavors", headers);
  });
};

const GetOSImages = () => {
  return Auth().then(headers => {
    return Endpoint("iaas-cloud/api/os-images", headers);
  });
};

const GetServers = () => {
  return Auth().then((headers) => {
    return Endpoint("iaas-cloud/api/servers", headers);
  });
};

const CreateServer = (name) => {
  return Auth().then((headers) => {
    const body = new Server(name);
    return Endpoint("iaas-cloud/api/servers", headers, [body]);
  });
};

const RetrieveServer = (id) => {
  return Auth().then((headers) => {
    return Endpoint(`iaas-cloud/api/servers/${id}`, headers);
  });
};

const DestroyServer = (id) => {
  return Auth().then((headers) => {
    return Endpoint(`iaas-cloud/api/servers/${id}`, headers, null, "DELETE");
  });
};

module.exports = {
  GetInstancesFlavors,
  GetOSImages,
  GetServers,
  CreateServer,
  RetrieveServer,
  DestroyServer,
};