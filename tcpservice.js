const seneca = require("seneca");

seneca().use("/service/math").listen({port: 9999, type: "tcp", pin: 'role:service2'});