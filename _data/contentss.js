const { Client } = require("pg");
async function getContents() {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    database: "true4u",
  });

  var contents = [];
  try {
    client.connect();
    const qpromise = client.query("SELECT * from public.content");

    const response = await qpromise;
    contents = response.rows;
  } catch (e) {
    console.log(e);
  }
  return contents[0].slug;
}

module.exports = getContents;
