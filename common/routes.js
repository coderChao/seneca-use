'use strict'
  // prefix: "/api",
module.exports = [
  {
    "pin": "role:service2,cmd:*",
    // prefix: "/service2",
    "map": {
      "sum": {
        "GET": true,
        "alias": "/service2/sum",
        // middleware: ["validate123"]
      },
      "product": {
        "GET": true,
        "alias": "service2/product/:param1",
        middleware: ["validate"],
        validateParams: {
          param1: "number"
        }
      }
    }
  }
]