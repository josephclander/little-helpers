const displayOrder = require("./DisplayOrder");

// To use add your array to the variable
// type npm run start in the terminal

const yourArray = [
  // insert array contents to edit
  // replace the example
  {
    Values: [],
    TargetType: "MergeField",
    TargetName: "Hostname",
    IsAccountConnectorProperty: true,
    Description:
      'This is your Shopify domain.',
    DisplayName: "Hostname",
    DisplayOrder: 2,
  },
  {
    Values: [],
    TargetType: "MergeField",
    TargetName: "Scopes",
    IsPartnerProperty: true,
    Description: "A list of scopes to be requested during authorization.",
    DisplayName: "Scopes",
    IsOptional: true,
    DefaultValue:
      "write_merchant_managed_fulfillment_orders",
    DisplayOrder: 1,
  },
];

// convert js to json to copy from the console
const json = displayOrder(yourArray);
console.log(json);
