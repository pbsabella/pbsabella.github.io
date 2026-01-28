/** @type {import("stylelint").Config} */
export default {
  "extends": ["stylelint-config-standard"],
  "rules": {
    "selector-class-pattern": [
      "^[a-z][a-zA-Z0-9]*$",
      {
        "message": "Class name must be camelCase as per CSS Modules standard"
      }
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": ["global"]
      }
    ],
    "property-no-unknown": [
      true,
      {
        "ignoreProperties": ["composes"]
      }
    ]
  },
  "overrides": [
    {
      "files": ["src/styles/*.css"],
      "rules": {
        "selector-class-pattern": null
      }
    }
  ]
};
