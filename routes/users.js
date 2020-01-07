const usersController = require("../Controllers/users")
const router = require("express").Router();

module.exports = (request, response) => {
  router.get('/', function (request, response) {
      usersController(request, response)
      .then((data) => {
          console.log(data)
          response.json(data);
        });
  })
  return router;
};