const { Client } = require("pg");
const XMLDom = require("xmldom");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("upperDetails", function (details) {
    const DOMParser = XMLDom.DOMParser;
    const doc = new DOMParser().parseFromString(details, "text/html");

    const paragraphs = getAllParagraphs(details);
    var htmlUpperDetails = '<div id="upperDetails"></div>';
    if (paragraphs.length > 2) {
      const deepClone = true;
      const firstParentChild = doc.firstChild.cloneNode(deepClone);
      const upperParentNode = firstParentChild.cloneNode(!deepClone);
      upperParentNode.appendChild(paragraphs[0]);
      upperParentNode.appendChild(paragraphs[1]);

      var xmlSerializer = new XMLDom.XMLSerializer();
      htmlUpperDetails = xmlSerializer.serializeToString(upperParentNode);
    } else {
      htmlUpperDetails = details;
    }
    return htmlUpperDetails;
  });

  function getAllParagraphs(details) {
    const DOMParser = XMLDom.DOMParser;
    const doc = new DOMParser().parseFromString(details, "text/html");
    const docElement = doc.documentElement;

    const paragraphs = docElement.getElementsByTagName("p");
    return paragraphs;
  }

  eleventyConfig.addFilter("lowerDetails", function (details) {
    const DOMParser = XMLDom.DOMParser;
    var doc = new DOMParser().parseFromString(details, "text/html");

    const paragraphs = getAllParagraphs(details);
    var htmlUpperDetails = '<div id="upperDetails"></div>';
    var htmlLowerDetails = '<div id="lowerDetails"></div>';
    if (paragraphs.length > 2) {
      var deepClone = true;
      var firstParentChild = doc.firstChild.cloneNode(deepClone);
      var upperParentNode = firstParentChild.cloneNode(!deepClone);
      upperParentNode.appendChild(paragraphs[0]);
      upperParentNode.appendChild(paragraphs[1]);

      var lowerParentNode = firstParentChild.cloneNode(!deepClone);
      while (paragraphs.length > 0) {
        lowerParentNode.appendChild(paragraphs[0]);
      }

      var xmlSerializer = new XMLDom.XMLSerializer();
      htmlUpperDetails = xmlSerializer.serializeToString(upperParentNode);
      htmlLowerDetails = xmlSerializer.serializeToString(lowerParentNode);
    }
    return htmlLowerDetails;
  });
};
