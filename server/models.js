//connect to db?
const edamam = require("./edamamHelper");

module.exports = {
  apiQuery: (data) => edamam.recipeSearch(data),
};
