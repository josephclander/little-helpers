const jsdom = require("jsdom");
const { JSDOM } = jsdom;

JSDOM.fromFile("inputData.html").then((dom) => {
  const fields = [];
  const list = dom.window.document.querySelectorAll(
    "[data-test='property-type']"
  );
  list.forEach((el) => {
    const object = {};
    object["ConnectorField"] = el.previousSibling.innerText;
    object["DataType"] = el.textContent;
    // object["Description"] =
    //   el.parentElement.parentElement.nextSibling.firstChild.textContent;
    fields.push(object);
  });
  console.log(JSON.stringify(fields, ' ', 4));
});
