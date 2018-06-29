'use strict'

const Seneca = require("seneca");
const SenecaWeb = require("seneca-web");
const Koa = require("koa");
const Router = require("koa-router");
const Routes = require("./common/routes");
const Validate = require("./validate");
const senecaAdapter = require("seneca-web-adapter-koa2");
const app = new Koa();
const seneca = Seneca();

seneca.use(SenecaWeb, {
  context: Router(),
  adapter: senecaAdapter,
  routes: Routes,
  options: {
    middleware: {
      validate: Validate
    }
  }
}).client({
  type: 'tcp',
  port: 9999,
  pin: 'role:service2'
});

seneca.ready(() => {
  var routes = seneca.export("web/context")().routes();
  app.use(routes);
  app.listen({port: 80}, () => {
    console.log("server listen in 80");
  });
});
seneca.listen({port: 8082, type: "tcp"});

