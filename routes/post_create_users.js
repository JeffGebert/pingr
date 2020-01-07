const requestsController = require("../Controllers/post_create_users.js")
const router = require("express").Router();

module.exports = (request, response) => {
  router.post('/', function (request, response) {
      requestsController(request, response)
      .then((data) => {
          console.log(data)
          response.json(data);
        });
  })
  return router;
};