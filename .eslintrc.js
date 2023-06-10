module.exports = {
  'root'   : true,
  'env'    : {'node': true},
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  'rules': {
    'vue/multi-word-component-names'  : 'off',
    // 闭合标签换行
    'vue/html-closing-bracket-newline': [
      'error', {
        'singleline': 'never',
        'multiline' : 'never'
      }
    ],
    // 闭合标签的空格数(>和属性之间的空格)
    'vue/html-closing-bracket-spacing': [
      'error', {
        'startTag'      : 'never',
        'endTag'        : 'never',
        'selfClosingTag': 'always'
      }
    ],
    // 闭合标签配置
    'vue/html-self-closing': [
      'error', {
        'html': {
          'void'     : 'always',
          'normal'   : 'always',
          'component': 'always'
        },
        'svg' : 'always',
        'math': 'always'
      }
    ],
    // 标签里面的内容独占一行
    'vue/multiline-html-element-content-newline': 'error',
    // 属性换行配置
    'vue/max-attributes-per-line'               : [
      'error', {
        'singleline': 1,
        'multiline' : 1
      }
    ],
    // 格式对齐配置
    'vue/html-indent': [
      'error', 2, {
        'attribute'                : 1,
        'baseIndent'               : 1,
        'closeBracket'             : 0,
        'alignAttributesVertically': true,
        'ignores'                  : []
      }
    ],
    // 双花括号和内容之间需要有空格
    'vue/mustache-interpolation-spacing': 'error',
    // 空格不允许有多个
    'vue/no-multi-spaces'               : 'error',
    // 必须要有分号
    'semi'                              : [
      'error',
      'always'
    ],
    // 必须用===
    'eqeqeq': [
      'error',
      'always'
    ],
    // 不允许未使用的变量
    'no-var': 2,
    // 只允许单引号
    'quotes': [
      'error',
      'single',
      {'allowTemplateLiterals': true}
    ],
    // 逗号前面没有空格，后面有空格
    'comma-spacing': [
      'error', {
        'before': false,
        'after' : true
      }
    ],
    // 不能有多余的空格
    'no-multi-spaces': 2,
    // 分号前不能有多余的空格
    'semi-spacing'   : [
      'error', {
        'before': false,
        'after' : true
      }
    ],
    // 冒号对齐
    'key-spacing': [
      'error', {
        'singleLine': {
          'beforeColon': false,
          'afterColon' : true
        },
        'multiLine': {
          'beforeColon': false,
          'afterColon' : true,
          'align'      : 'colon'
        }
      }
    ],
    // 属性要有引号
    'quote-props': [
      'error',
      'always'
    ],
    // 数组换行
    'array-bracket-newline': [
      'error', {
        'multiline': true,
        'minItems' : 2
      }
    ],
    'array-element-newline': [
      'error',
      'consistent'
    ],
    // 缩进
    'indent': [
      'error',
      2
    ],
    // 大括号换行
    'object-property-newline': 'error',
    'object-curly-newline'   : [
      'error', {
        'multiline'    : true,
        'minProperties': 2
      }
    ],
    // 没有尾逗号
    'comma-dangle': [
      'error',
      'never'
    ],
    // 箭头函数
    'arrow-spacing': 'error',
    'brace-style'  : [
      'error', '1tbs', { 'allowSingleLine': true }
    ],
    // 禁止多余的空格
    'no-trailing-spaces'     : 'error',
    'no-multiple-empty-lines': [
      'error', {
        'max'   : 2,
        'maxEOF': 0
      }
    ]
  }
};
