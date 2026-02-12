/** @type {import("stylelint").Config} */
const PRIMITIVE_USAGE_WHITELIST = [
  'spacing',
  'size',
  'border-width',
  'radius',
  'leading',
  'tracking',
  'duration',
  'easing',
  'weight',
  'text',
];

const disallowDirectPrimitiveUsageRegex = new RegExp(
  `var\\(--pr-(?!(?:${PRIMITIVE_USAGE_WHITELIST.join('|')})-)[^)]+\\)`
);

export default {
  extends: ['stylelint-config-standard'],
  rules: {
    'color-no-hex': true,
    'selector-class-pattern': [
      '^[a-z][a-zA-Z0-9]*$',
      {
        message: 'Class name must be camelCase as per CSS Modules standard',
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes'],
      },
    ],
    // Prefer semantic/component tokens in regular CSS.
    // This blocks direct primitive usage except approved primitive categories.
    'declaration-property-value-disallowed-list': {
      '/.+/': [disallowDirectPrimitiveUsageRegex],
    },
  },
  overrides: [
    {
      files: ['src/styles/tokens.css'],
      rules: {
        'color-no-hex': null,
        'declaration-property-value-disallowed-list': null,
      },
    },
  ],
};
