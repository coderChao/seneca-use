module.exports = function math(options) {
  this.add('role:service2,cmd:sum', function sum(msg, respond) {
      respond(null, {service: "service1", answer: "28" })
  });

  this.add('role:service2,cmd:product', function product(msg, respond) {
      respond(null, {service: "service1", answer: "18" })
  });
}