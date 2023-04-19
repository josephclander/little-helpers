/**
 * Edit array of objects to have correct numerical display order
 * crucial to only add objects from one array
 * @param {[]objects} input
 * @return {json}
 */
function displayOrder(input) {
  const output = input.map((item, index) => {
    return { ...item, DisplayOrder: index + 1 };
  });
  return JSON.stringify(output);
}

module.exports = displayOrder;
