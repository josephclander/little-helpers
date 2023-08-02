// const isArray = require("lodash.isarray");
const isObject = require("lodash.isobject");

const usedObject = (input) => isObject(input) && Object.keys(input).length;

/**
 * @param {string} currentName
 * @param {object} value
 * @returns {string}
 */
const lookup = (currentName, value) => {
  // is it an object?
  if (usedObject(value)) {
    // yes
    // return list of keys
    // currentName = entity
    // value = entity: {...}
    // [total_price, discount, tax, ...]
    const nextKeys = Object.keys(value);
    return nextKeys.map((key) => {
      // key = total_price
      currentName = `${currentName}.${key}`;
      // currentName = entity.total_price
      return `.${lookup(currentName, key)}`;
      // return `.en`;
    });
    // [entity.total_price, entity.discount, entity.tax, ...]
  } else {
    // if nothing, return currentName
    return `.${currentName}`;
  }
};

// write out values of an object
const fields = (obj) => {
  const firstKeys = Object.keys(obj);
  // array of field names (may have to flatmap after)
  const objNames = firstKeys.map((currentName) => {
    // firstKeys are message, entity, warnings
    // lookup if the key is an obj and return the next one
    // key is the current string
    // obj[currentName] = entity: {...}
    if (usedObject(obj[currentName])) {
      // entity{}
      return `${currentName}${lookup(currentName, obj[currentName])}`;
    } else {
      return `${currentName}`;
    }
  });

  // layer1.layer2.layer3 or an array of these?
  // currentName = 'entity', value = entity: {...}

  return objNames;
};

module.exports = fields;
