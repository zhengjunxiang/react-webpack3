module.exports = {
  'parser': 'babel-eslint',
  'extends': 'airbnb',
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true,
    'jquery': true
  },

  'parserOptions': {
    'sourceType': 'module'
  },

  'rules': {
    'strict': 'off',
    'indent': 'off',
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'constructor-super': 'error',
    'func-names': 'off',
    'id-length': 'off',
    'quotes': ['warn', 'single' ],
    'jsx-quotes': ['error', 'prefer-double'],
    'jsx-a11y/href-no-hash': 'off',
    'linebreak-style': ['warn', 'unix'],
    'new-cap': ['error', {'newIsCap': true, 'capIsNew': false}],
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-console': ['warn', {
      allow: ['info', 'warn', 'error']
    }],
    'import/no-extraneous-dependencies': 0,
    'no-empty-pattern': 'error',
    'no-dupe-class-members': 'error',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-this-before-super': 'error',
    'no-undefined': 'error',
    'no-unused-expressions': 'off',
    'no-useless-concat': 'error',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'never'],
    'object-shorthand': 'warn',
    'prefer-arrow-callback': 'error',
    'prefer-reflect': 'warn',
    'prefer-spread': 'error',
    'prefer-template': 'warn',
    'require-yield': 'error',
    'semi': ['warn', 'always'],
    'spaced-comment': 'off',
    'space-before-function-paren': ['error', "never"],
    'keyword-spacing': ['warn', {'before': true, 'after': true}],
    'space-in-parens': ['error', 'never'],
    'vars-on-top': 'off',
    'max-len': ['warn', 150],

    'key-spacing': ['warn', {
      'beforeColon': false,
      'afterColon': true
    }],

    'react/jsx-closing-bracket-location': ['warn', 'props-aligned'],
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-handler-names': ['warn', {
      'eventHandlerPrefix': 'handle|toggle'
    }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-quotes': 'off',
    'react/jsx-no-bind': ['off'],
    'react/no-direct-mutation-state': 'error',
    'react/no-multi-comp': ['error', {'ignoreStateless': true}],
    'react/prefer-es6-class': 'warn',
    'react/prop-types': 'off',
    'react/sort-comp': 'off'
  }
};
