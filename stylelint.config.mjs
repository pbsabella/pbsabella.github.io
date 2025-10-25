/** @type {import("stylelint").Config} */
export default {
  "extends": ["stylelint-config-standard"],
  "rules": {
    "selector-class-pattern": [
      "^[a-z0-9]+(?:-[a-z0-9]+)*(?:__(?:[a-z0-9]+(?:-[a-z0-9]+)*))?(?:--(?:[a-z0-9]+(?:-[a-z0-9]+)*))?$",
      {
        "message": "Class name must follow BEM (block__element--modifier) convention"
      }
    ],
  }
};
