const { Client } = require("pg");
async function getCats() {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    database: "true4u",
  });

  var cats = [];
  try {
    client.connect();
    const qpromise = client.query("SELECT * from public.category");

    const response = await qpromise;
    cats = response.rows;
  } catch (e) {
    console.log(e);
  }
  return cats[0].slug;
}

module.exports = getCats;
