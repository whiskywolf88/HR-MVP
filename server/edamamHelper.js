const api_keys = require("../config");

const recipeSearch = (data) => {
  return axios.get("https://api.edamam.com/search", {
    params: {
      q: `${data}`,
      app_id: api_keys.app_id,
      app_key: api_keys.app_key,
    },
  });
};

module.exports = recipeSearch;