const { app_id, app_key } = require("../config");
const axios = require("axios");

module.exports = {
  recipeSearch: (data) => {
    console.log("searching");
    return axios.get(
      `https://api.edamam.com/search?app_id=${app_id}&app_key=${app_key}&q=${data}&from=0&to=9`
    );
  },
};

// module.exports.recipeSearch = recipeSearch;
