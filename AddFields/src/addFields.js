/**
 * Edit array of objects to have correct numerical display order
 * crucial to only add objects from one array
 * @param {[]objects} input
 * @param {[]strings} fields
 * @return {json}
 */
function addFields(input, fields) {
  const output = input.map((item) => {
    fields.forEach((field) => {
      if (!item[field]) {
        item[field] = "Undefined";
      }
    });

    return item;
  });
  return JSON.stringify(output);
}

module.exports = addFields;
