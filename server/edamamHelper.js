const { app_id, app_key } = require("../config");
const axios = require("axios");

module.exports = {
  recipeSearch: (params, exclusions) => {
    let exclude;
    exclusions ? exclude = `&excluded=${exclusions}` : exclude = '';

    return axios.get(
      `https://api.edamam.com/search?app_id=${app_id}&app_key=${app_key}&q=${params}&from=0&to=9${exclude}`
    );
  },
};

// module.exports.recipeSearch = recipeSearch;
