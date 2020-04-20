const { Client } = require("pg");
async function getContentTags() {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    database: "true4u",
  });

  var contentTags = [];
  try {
    client.connect();
    const qpromise = client.query("SELECT * from public.content_tag");

    const response = await qpromise;
    contentTags = response.rows;
  } catch (e) {
    console.log(e);
  }
  return contentTags;
}

module.exports = getContentTags;
