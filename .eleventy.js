var { graphql, buildSchema } = require("graphql");
module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("filesize", function (path) {
    return "0KBB";
  });

  // this could also be `async function`
  // if you want to `await` for other things here, use `async function`
  var schema = buildSchema(`type Query {
    hello: String
  }`);

  var root = {
    hello: () => "Hello world async!",
  };

  return graphql(schema, "{ hello }", root);
};
