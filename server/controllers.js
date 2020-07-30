const models = require("./models");

const getRecipes = (req, res) => {
  const recipeParams = req.params;

  models
    .apiQuery(recipeParams)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log("No recipes found");
      res.sendStatus(404);
    });
};

module.exports = {
  getRecipes: getRecipes,
};
