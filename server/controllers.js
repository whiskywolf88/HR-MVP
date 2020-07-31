const models = require("./models");

const getRecipes = (req, res) => {
  const recipeParams = req.query.query;
  const exclusions = req.query.exclude.split(" ");
  console.log(exclusions);

  models
    .apiQuery(recipeParams, exclusions)
    .then(({ data }) => {
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
