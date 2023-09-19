const jsdom = require("jsdom");
const { JSDOM } = jsdom;

JSDOM.fromFile("inputData.html").then((dom) => {
  const fields = [];
  // elements that start with property-name
  const list = dom.window.document.querySelectorAll(
    "[data-test^='property-name']"
    // "[data-test='property-name-product_handle']"
  );
  // console.log(list[0].textContent); // product_handle
  // console.log(list[0].textContent); // product_handle
  for (let i = 0; i < list.length; i++) {
    const object = {};
    console.log(list[i].parentElement.parentElement.nextSibling.textContent);
    object["Values"] = [];
    object["ConnectorField"] = list[i].textContent.trim();
    object["DataType"] =
      list[i].parentElement.lastElementChild.textContent.trim();
    object["Description"] = list[i].parentElement.parentElement.nextSibling
      .firstChild
      ? list[i].parentElement.parentElement.nextSibling.firstChild.textContent
      : "";
    object["DisplayOrder"] = i + 1;
    fields.push(object);
  }

  // object["ConnectorField"] = el.innerText;
  // object["Description"] =
  //   el.parentElement.parentElement.nextSibling.firstChild.textContent;
  console.log(JSON.stringify(fields, " ", 4));
});

// finding the name
// const list = dom.window.document.querySelector(
//   // "[data-test^='property-name']"
//   "[data-test='property-name-product_handle']"
// ).textContent.trim();
// console.log(JSON.stringify(list));
