module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier', 'stylelint-config-recommended-vue'],
  defaultSeverity: 'warning',
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['plugin'],
      },
    ],
    'rule-empty-line-before': [
      'always',
      {
        except: ['after-single-line-comment', 'first-nested'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep'],
      },
    ],
    'selector-class-pattern': ['^(?!-)[a-zA-Z0-9_-]+$'],
  },
};
