const axios = require("axios");

// Recomendos colocar em uma variavel de ambiente
const apiKey = "";

async function getStatistics() {
  try {
    const res = await axios.get("https://ayuza.squareweb.app/statistics", {
      headers: {
        Authorization: apiKey,
      },
    });
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
}

getStatistics();