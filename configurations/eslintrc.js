/**
 * https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/configs/recommended.ts
 */
const regexRules = {
  'no-control-regex': 2,
  'no-empty-character-class': 0,
  'no-invalid-regexp': 'off',
  'no-misleading-character-class': 2,
  'no-regex-spaces': 2,
  'no-useless-backreference': 'off',
  'prefer-regex-literals': 2,
  'regexp/confusing-quantifier': 'warn',
  'regexp/control-character-escape': 2,
  'regexp/match-any': 2,
  'regexp/negation': 2,
  'regexp/no-dupe-characters-character-class': 2,
  'regexp/no-dupe-disjunctions': 2,
  'regexp/no-empty-alternative': 'warn',
  'regexp/no-empty-capturing-group': 2,
  'regexp/no-empty-group': 2,
  'regexp/no-empty-lookarounds-assertion': 2,
  'regexp/no-escape-backspace': 2,
  'regexp/no-invalid-regexp': 2,
  'regexp/no-invisible-character': 2,
  'regexp/no-lazy-ends': 'warn',
  'regexp/no-legacy-features': 2,
  'regexp/no-non-standard-flag': 2,
  'regexp/no-obscure-range': 2,
  'regexp/no-optional-assertion': 2,
  'regexp/no-potentially-useless-backreference': 'warn',
  'regexp/no-super-linear-backtracking': 2,
  'regexp/no-trivially-nested-assertion': 2,
  'regexp/no-trivially-nested-quantifier': 2,
  'regexp/no-unused-capturing-group': 2,
  'regexp/no-useless-assertions': 2,
  'regexp/no-useless-backreference': 2,
  'regexp/no-useless-character-class': 2,
  'regexp/no-useless-dollar-replacements': 2,
  'regexp/no-useless-escape': 2,
  'regexp/no-useless-flag': 'warn',
  'regexp/no-useless-lazy': 2,
  'regexp/no-useless-non-capturing-group': 2,
  'regexp/no-useless-quantifier': 2,
  'regexp/no-useless-range': 2,
  'regexp/no-useless-two-nums-quantifier': 2,
  'regexp/no-zero-quantifier': 2,
  'regexp/optimal-lookaround-quantifier': 'warn',
  'regexp/optimal-quantifier-concatenation': 2,
  'regexp/prefer-character-class': 2,
  'regexp/prefer-d': 2,
  'regexp/prefer-plus-quantifier': 2,
  'regexp/prefer-predefined-assertion': 2,
  'regexp/prefer-question-quantifier': 2,
  'regexp/prefer-range': 2,
  'regexp/prefer-star-quantifier': 2,
  'regexp/prefer-unicode-codepoint-escapes': 2,
  'regexp/prefer-w': 2,
  'regexp/sort-flags': 2,
  'regexp/strict': 2,
};

module.exports = {
  env: {
    es6: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 2_021,
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: [
    'canonical',
    '@babel',
    'import',
    'jsdoc',
    'unicorn',
    'eslint-comments',
    'promise',
    'regexp',
    'simple-import-sort',
  ],
  rules: {
    '@babel/new-cap': 0,
    '@babel/no-invalid-this': 2,
    '@babel/no-unused-expressions': 2,
    '@babel/object-curly-spacing': [2, 'never'],
    '@babel/semi': 2,
    'accessor-pairs': 2,
    'array-bracket-newline': [
      2,
      {
        minItems: 1,
        multiline: true,
      },
    ],
    'array-bracket-spacing': [2, 'never'],
    'array-callback-return': 2,
    'array-element-newline': [
      2,
      {
        minItems: 1,
        multiline: true,
      },
    ],
    'arrow-body-style': [2, 'always'],
    'arrow-parens': [2, 'always'],
    'arrow-spacing': [
      2,
      {
        after: true,
        before: true,
      },
    ],
    'block-scoped-var': 2,
    'block-spacing': [2, 'always'],
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: false,
      },
    ],
    camelcase: 0,
    'canonical/destructuring-property-newline': [
      2,
      {
        allowAllPropertiesOnSameLine: false,
      },
    ],
    'canonical/export-specifier-newline': 2,
    'canonical/filename-match-exported': 2,
    'canonical/filename-match-regex': [
      1,
      {
        ignoreExporting: false,
        regex: '^(?:.?[A-Z]?[a-z]+(?:[A-Z][a-z]+)*)*$',
      },
    ],
    'canonical/filename-no-index': 0,
    'canonical/id-match': [
      2,
      '(^[A-Za-z]+(?:[A-Z][a-z]*)*\\d*$)|(^[A-Z]+(_[A-Z]+)*(_\\d$)*$)|(^(_|\\$)$)',
      {
        ignoreDestructuring: true,
        ignoreNamedImports: true,
        onlyDeclarations: true,
        properties: true,
      },
    ],
    'canonical/import-specifier-newline': 2,
    'canonical/no-restricted-strings': 0,
    'canonical/no-use-extend-native': 2,
    'canonical/sort-keys': [
      2,
      'asc',
      {
        caseSensitive: false,
        natural: true,
      },
    ],
    'capitalized-comments': 0,
    'class-methods-use-this': 0,
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'comma-spacing': [
      2,
      {
        after: true,
        before: false,
      },
    ],
    'comma-style': [2, 'last'],
    complexity: [2, 20],
    'computed-property-spacing': [2, 'never'],
    'consistent-return': 2,
    'consistent-this': [2, 'self'],
    'constructor-super': 2,
    curly: 2,
    'default-case': 2,
    'default-case-last': 2,
    'default-param-last': 2,
    'dot-location': [2, 'property'],
    'dot-notation': 2,
    'eol-last': 2,
    eqeqeq: 2,
    'eslint-comments/disable-enable-pair': [
      2,
      {
        allowWholeFile: true,
      },
    ],
    'eslint-comments/no-aggregating-enable': 2,
    'eslint-comments/no-duplicate-disable': 2,
    'eslint-comments/no-restricted-disable': 0,
    'eslint-comments/no-unlimited-disable': 2,
    'eslint-comments/no-unused-disable': 0,
    'eslint-comments/no-unused-enable': 0,
    'eslint-comments/no-use': 0,
    'eslint-comments/require-description': 0,
    'for-direction': 2,
    'func-call-spacing': [2, 'never'],
    'func-name-matching': 2,
    'func-names': [2, 'never'],
    'func-style': [2, 'expression'],
    'function-call-argument-newline': [2, 'consistent'],
    'function-paren-newline': [2, 'consistent'],
    'generator-star-spacing': [
      2,
      {
        after: false,
        before: true,
      },
    ],
    'getter-return': 2,
    'grouped-accessor-pairs': [2, 'getBeforeSet'],
    'guard-for-in': 2,
    'id-denylist': 0,
    'id-length': [
      2,
      {
        exceptions: ['_', '$', 'a', 'b', 'x', 'y'],
        min: 2,
      },
    ],
    'id-match': 0,
    'implicit-arrow-linebreak': [2, 'beside'],
    'import/default': 2,
    'import/dynamic-import-chunkname': 0,
    'import/export': 2,
    'import/exports-last': 0,
    'import/extensions': [
      2,
      'never',
      {
        ignorePackages: true,
        pattern: {
          graphql: 'always',
          json: 'always',
          svg: 'always',
        },
      },
    ],
    'import/first': 2,
    'import/group-exports': 0,
    'import/max-dependencies': 0,
    'import/named': 0,
    'import/namespace': 0,
    'import/newline-after-import': 2,
    'import/no-absolute-path': 2,
    'import/no-amd': 2,
    'import/no-anonymous-default-export': 0,
    'import/no-commonjs': 0,
    'import/no-cycle': 2,
    'import/no-default-export': 0,
    'import/no-deprecated': 1,
    'import/no-duplicates': 2,
    'import/no-dynamic-require': 2,
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],
    'import/no-import-module-exports': 0,
    'import/no-internal-modules': 0,
    'import/no-mutable-exports': 2,
    'import/no-named-as-default': 2,
    'import/no-named-as-default-member': 2,
    'import/no-named-default': 2,
    'import/no-named-export': 0,
    'import/no-namespace': 0,
    'import/no-nodejs-modules': 0,
    'import/no-relative-packages': 0,
    'import/no-relative-parent-imports': 0,
    'import/no-restricted-paths': 0,
    'import/no-self-import': 2,
    'import/no-unassigned-import': 2,
    'import/no-unresolved': 0,
    'import/no-unused-modules': 0,
    'import/no-useless-path-segments': [
      2,
      {
        noUselessIndex: true,
      },
    ],
    'import/no-webpack-loader-syntax': 2,
    'import/order': 0,
    'import/prefer-default-export': 0,
    'import/unambiguous': 0,
    indent: [2, 2],
    'init-declarations': 0,
    'jsdoc/check-access': 2,
    'jsdoc/check-alignment': 2,
    'jsdoc/check-examples': 0,
    'jsdoc/check-indentation': 0,
    'jsdoc/check-line-alignment': 0,
    'jsdoc/check-param-names': 2,
    'jsdoc/check-property-names': 2,
    'jsdoc/check-syntax': 2,
    'jsdoc/check-tag-names': 2,
    'jsdoc/check-types': 2,
    'jsdoc/check-values': 2,
    'jsdoc/empty-tags': 2,
    'jsdoc/implements-on-classes': 2,
    'jsdoc/match-description': 0,
    'jsdoc/match-name': 0,
    'jsdoc/multiline-blocks': [
      2,
      {
        noMultilineBlocks: false,
        noSingleLineBlocks: true,
      },
    ],
    'jsdoc/newline-after-description': [2, 'always'],
    'jsdoc/no-bad-blocks': 2,
    'jsdoc/no-defaults': 2,
    'jsdoc/no-missing-syntax': 0,
    'jsdoc/no-multi-asterisks': 2,
    'jsdoc/no-restricted-syntax': 0,
    'jsdoc/no-types': 0,
    'jsdoc/no-undefined-types': 2,
    'jsdoc/require-asterisk-prefix': 2,
    'jsdoc/require-description': 0,
    'jsdoc/require-description-complete-sentence': 0,
    'jsdoc/require-example': 0,
    'jsdoc/require-file-overview': 0,
    'jsdoc/require-hyphen-before-param-description': 0,
    'jsdoc/require-jsdoc': 0,
    'jsdoc/require-param': 0,
    'jsdoc/require-param-description': 0,
    'jsdoc/require-param-name': 2,
    'jsdoc/require-param-type': 0,
    'jsdoc/require-property': 2,
    'jsdoc/require-property-description': 2,
    'jsdoc/require-property-name': 2,
    'jsdoc/require-property-type': 2,
    'jsdoc/require-returns': 0,
    'jsdoc/require-returns-check': 0,
    'jsdoc/require-returns-description': 0,
    'jsdoc/require-returns-type': 0,
    'jsdoc/require-throws': 0,
    'jsdoc/require-yields': 0,
    'jsdoc/require-yields-check': 0,
    'jsdoc/tag-lines': [2, 'never'],
    'jsdoc/valid-types': 2,
    'jsx-quotes': [2, 'prefer-single'],
    'key-spacing': [
      2,
      {
        afterColon: true,
        beforeColon: false,
      },
    ],
    'keyword-spacing': [
      2,
      {
        after: true,
        before: true,
      },
    ],
    'line-comment-position': [
      2,
      {
        position: 'above',
      },
    ],
    'linebreak-style': [2, 'unix'],
    'lines-around-comment': 0,
    'lines-between-class-members': [2, 'always'],
    'max-classes-per-file': 0,
    'max-depth': 0,
    'max-len': 0,
    'max-lines': 0,
    'max-lines-per-function': 0,
    'max-nested-callbacks': 0,
    'max-params': 0,
    'max-statements': 0,
    'max-statements-per-line': [
      2,
      {
        max: 1,
      },
    ],
    'multiline-comment-style': 0,
    'multiline-ternary': 0,
    'new-cap': 0,
    'new-parens': 2,
    'newline-per-chained-call': 0,
    'no-alert': 2,
    'no-array-constructor': 2,
    'no-async-promise-executor': 2,
    'no-await-in-loop': 0,
    'no-bitwise': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-class-assign': 2,
    'no-compare-neg-zero': 2,
    'no-cond-assign': 2,
    'no-confusing-arrow': 2,
    'no-console': 2,
    'no-const-assign': 2,
    'no-constant-condition': 0,
    'no-constructor-return': 2,
    'no-continue': 0,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-delete-var': 2,
    'no-div-regex': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-else-if': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-duplicate-imports': 0,
    'no-else-return': 0,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-label': 2,
    'no-extra-parens': 2,
    'no-extra-semi': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-global-assign': 2,
    'no-implicit-coercion': 2,
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-import-assign': 2,
    'no-inline-comments': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-invalid-this': 0,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-lonely-if': 2,
    'no-loop-func': 2,
    'no-loss-of-precision': 2,
    'no-magic-numbers': 0,
    'no-misleading-character-class': 2,
    'no-mixed-operators': 0,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-assign': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],
    'no-negated-condition': 2,
    'no-nested-ternary': 0,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-nonoctal-decimal-escape': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-plusplus': 0,
    'no-promise-executor-return': 2,
    'no-proto': 2,
    'no-prototype-builtins': 2,
    'no-redeclare': [
      2,
      {
        builtinGlobals: true,
      },
    ],
    'no-regex-spaces': 2,
    'no-restricted-exports': 0,
    'no-restricted-globals': 0,
    'no-restricted-imports': 0,
    'no-restricted-properties': 0,
    'no-restricted-syntax': 0,
    'no-return-assign': 2,
    'no-return-await': 0,
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-setter-return': 2,
    'no-shadow': [
      2,
      {
        builtinGlobals: false,
        hoist: 'all',
      },
    ],
    'no-shadow-restricted-names': 2,
    'no-sparse-arrays': 2,
    'no-tabs': 2,
    'no-template-curly-in-string': 2,
    'no-ternary': 0,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-undefined': 0,
    'no-underscore-dangle': 0,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': 2,
    'no-unreachable': 0,
    'no-unreachable-loop': 2,
    'no-unsafe-finally': 2,
    'no-unsafe-negation': 2,
    'no-unsafe-optional-chaining': 2,
    'no-unused-expressions': 2,
    'no-unused-labels': 2,
    'no-unused-private-class-members': 0,
    'no-unused-vars': 2,
    'no-use-before-define': [
      2,
      {
        classes: true,
        functions: false,
        variables: true,
      },
    ],
    'no-useless-backreference': 2,
    'no-useless-call': 2,
    'no-useless-catch': 2,
    'no-useless-computed-key': 2,
    'no-useless-concat': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 2,
    'no-useless-rename': [
      2,
      {
        ignoreDestructuring: false,
        ignoreExport: false,
        ignoreImport: false,
      },
    ],
    'no-useless-return': 2,
    'no-var': 2,
    'no-void': [
      2,
      {
        allowAsStatement: true,
      },
    ],
    'no-warning-comments': [
      1,
      {
        location: 'start',
        terms: ['todo', '@toto'],
      },
    ],
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'nonblock-statement-body-position': [2, 'below'],
    'object-curly-newline': [
      2,
      {
        ExportDeclaration: 'always',
        ImportDeclaration: 'always',
        ObjectExpression: {
          minProperties: 1,
          multiline: true,
        },
        ObjectPattern: {
          minProperties: 1,
          multiline: true,
        },
      },
    ],
    'object-curly-spacing': 0,
    'object-property-newline': [
      2,
      {
        allowAllPropertiesOnSameLine: false,
      },
    ],
    'object-shorthand': [2, 'always'],
    'one-var': [2, 'never'],
    'one-var-declaration-per-line': 2,
    'operator-assignment': [2, 'always'],
    'operator-linebreak': [2, 'after'],
    'padded-blocks': [2, 'never'],
    'padding-line-between-statements': [
      2,
      {
        blankLine: 'always',
        next: '*',
        prev: 'multiline-block-like',
      },
    ],
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-destructuring': 0,
    'prefer-exponentiation-operator': 2,
    'prefer-named-capture-group': 0,
    'prefer-numeric-literals': 2,
    'prefer-object-spread': 2,
    'prefer-promise-reject-errors': 2,
    'prefer-regex-literals': [
      2,
      {
        disallowRedundantWrapping: true,
      },
    ],
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 0,
    'promise/param-names': 2,
    'promise/prefer-await-to-callbacks': 0,
    'promise/prefer-await-to-then': 2,
    'promise/valid-params': 2,
    'quote-props': [
      2,
      'as-needed',
      {
        numbers: true,
      },
    ],
    quotes: [2, 'single'],
    radix: 2,
    'require-atomic-updates': 2,
    'require-await': 0,
    'require-unicode-regexp': 2,
    'require-yield': 2,
    'rest-spread-spacing': [2, 'never'],
    semi: [2, 'always'],
    'semi-spacing': [
      2,
      {
        after: true,
        before: false,
      },
    ],
    'semi-style': [2, 'last'],
    'simple-import-sort/exports': 2,
    'simple-import-sort/imports': [2, { groups: [] }],
    'sort-imports': 0,
    'sort-keys': 0,
    'sort-vars': 2,
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'always'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [
      2,
      {
        nonwords: false,
        words: true,
      },
    ],
    'spaced-comment': [2, 'always'],
    strict: [2, 'never'],
    'switch-colon-spacing': [
      2,
      {
        after: true,
        before: false,
      },
    ],
    'symbol-description': 2,
    'template-curly-spacing': [2, 'never'],
    'template-tag-spacing': [2, 'never'],
    'unicode-bom': [2, 'never'],
    'unicorn/better-regex': 2,
    'unicorn/catch-error-name': [
      'error',
      {
        name: 'error',
      },
    ],
    'unicorn/consistent-destructuring': 0,
    'unicorn/consistent-function-scoping': 2,
    'unicorn/custom-error-definition': 0,
    'unicorn/empty-brace-spaces': 2,
    'unicorn/error-message': 2,
    'unicorn/escape-case': 2,
    'unicorn/expiring-todo-comments': [
      2,
      {
        allowWarningComments: true,
        ignoreDatesOnPullRequests: true,
        terms: ['todo'],
      },
    ],
    'unicorn/explicit-length-check': 0,
    'unicorn/filename-case': 0,
    'unicorn/import-index': 2,
    'unicorn/import-style': 0,
    'unicorn/new-for-builtins': 2,
    'unicorn/no-abusive-eslint-disable': 2,
    'unicorn/no-array-callback-reference': 0,
    'unicorn/no-array-for-each': 2,
    'unicorn/no-array-method-this-argument': 2,
    'unicorn/no-array-push-push': 0,
    'unicorn/no-array-reduce': [
      'error',
      {
        allowSimpleOperations: true,
      },
    ],
    'unicorn/no-await-expression-member': 0,
    'unicorn/no-console-spaces': 0,
    'unicorn/no-document-cookie': 2,
    'unicorn/no-empty-file': 2,
    'unicorn/no-for-loop': 2,
    'unicorn/no-hex-escape': 2,
    'unicorn/no-instanceof-array': 2,
    'unicorn/no-invalid-remove-event-listener': 2,
    'unicorn/no-keyword-prefix': 0,
    'unicorn/no-lonely-if': 2,
    'unicorn/no-nested-ternary': 2,
    'unicorn/no-new-array': 2,
    'unicorn/no-new-buffer': 2,
    'unicorn/no-null': 0,
    'unicorn/no-object-as-default-parameter': 2,
    'unicorn/no-process-exit': 0,
    'unicorn/no-static-only-class': 2,
    'unicorn/no-thenable': 2,
    'unicorn/no-this-assignment': 2,
    'unicorn/no-unreadable-array-destructuring': 0,
    'unicorn/no-unreadable-iife': 2,
    'unicorn/no-unsafe-regex': 2,
    'unicorn/no-unused-properties': 2,
    'unicorn/no-useless-fallback-in-spread': 2,
    'unicorn/no-useless-length-check': 2,
    'unicorn/no-useless-promise-resolve-reject': 2,
    'unicorn/no-useless-spread': 2,
    'unicorn/no-useless-switch-case': 0,
    'unicorn/no-useless-undefined': 0,
    'unicorn/no-zero-fractions': 2,
    'unicorn/number-literal-case': 2,
    'unicorn/numeric-separators-style': [
      2,
      {
        number: {
          groupLength: 3,
          minimumDigits: 0,
        },
      },
    ],
    'unicorn/prefer-add-event-listener': 0,
    'unicorn/prefer-array-find': 2,
    'unicorn/prefer-array-flat': 2,
    'unicorn/prefer-array-flat-map': 2,
    'unicorn/prefer-array-index-of': 2,
    'unicorn/prefer-array-some': 2,
    'unicorn/prefer-at': 0,
    'unicorn/prefer-code-point': 2,
    'unicorn/prefer-date-now': 2,
    'unicorn/prefer-default-parameters': 2,
    'unicorn/prefer-export-from': 2,
    'unicorn/prefer-includes': 2,
    'unicorn/prefer-json-parse-buffer': 2,
    'unicorn/prefer-math-trunc': 2,
    'unicorn/prefer-modern-math-apis': 2,
    'unicorn/prefer-native-coercion-functions': 2,
    'unicorn/prefer-negative-index': 0,
    'unicorn/prefer-number-properties': 2,
    'unicorn/prefer-object-from-entries': 2,
    'unicorn/prefer-object-has-own': 0,
    'unicorn/prefer-optional-catch-binding': 2,
    'unicorn/prefer-prototype-methods': 0,
    'unicorn/prefer-query-selector': 2,
    'unicorn/prefer-reflect-apply': 2,
    'unicorn/prefer-regexp-test': 2,
    'unicorn/prefer-set-has': 0,
    'unicorn/prefer-spread': 0,
    'unicorn/prefer-string-replace-all': 2,
    'unicorn/prefer-string-slice': 2,
    'unicorn/prefer-string-starts-ends-with': 2,
    'unicorn/prefer-string-trim-start-end': 2,
    'unicorn/prefer-switch': 0,
    'unicorn/prefer-ternary': 0,
    'unicorn/prefer-top-level-await': 0,
    'unicorn/prefer-type-error': 2,
    'unicorn/prevent-abbreviations': [
      2,
      {
        checkProperties: false,
        replacements: {
          args: false,
          pkg: false,
          props: false,
          ref: false,
          rel: false,
        },
      },
    ],
    'unicorn/relative-url-style': [2, 'never'],
    'unicorn/require-array-join-separator': 2,
    'unicorn/require-number-to-fixed-digits-argument': 2,
    'unicorn/require-post-message-target-origin': 2,
    'unicorn/string-content': 0,
    'unicorn/template-indent': 2,
    'unicorn/text-encoding-identifier-case': 2,
    'unicorn/throw-new-error': 2,
    'use-isnan': 2,
    'valid-typeof': [
      2,
      {
        requireStringLiterals: true,
      },
    ],
    'vars-on-top': 2,
    'wrap-iife': [2, 'inside'],
    'wrap-regex': 0,
    'yield-star-spacing': [
      2,
      {
        after: true,
        before: false,
      },
    ],
    yoda: [2, 'never'],
    ...regexRules,
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.mjs', '.ts', '.tsx'],
  },
};
