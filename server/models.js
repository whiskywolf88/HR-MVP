//connect to db?
const edamam = require("./edamamHelper");

module.exports = {
  apiQuery: (params, exclusions) => edamam.recipeSearch(params, exclusions),
};
