module.exports = {
  extends: ['next', 'airbnb', 'plugin:import/recommended', 'plugin:import/typescript', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // 代码格式校验错误提示
    'prettier/prettier': ['error'],
    /**
     * “off” 或 0 关闭规则
     * “warn” 或 1 开启规则，使用warn级别提示，不会导致程序退出
     * "error" 或 2 开启规则，使用error错误，程序会退出
     */
    // eslint-plugin-import es module导入eslint规则配置，旨在规避拼写错误问题
    'import/no-unresolved': 0,
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        json: 'always',
      },
    ],
    // 使用导出的名称作为默认属性（主要用作导出模块内部有 default， 和直接导出两种并存情况下，会出现default.proptry 这种问题从在的情况）
    'import/no-named-as-default-member': 0,
    'import/order': ['error', { 'newlines-between': 'always' }],
    // 导入确保是否在首位
    'import/first': 0,
    // 如果文件只有一个导出，是否开启强制默认导出
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [],
        optionalDependencies: false,
      },
    ],
    // class组件编写顺序定义
    /**
     * eslint-plugin-react
     * 参考文档： https://www.npmjs.com/package/eslint-plugin-react，里面有规则说明，同时可以链接到git上面具体的参考实例里面
     */
    'react/sort-comp': [
      'error',
      {
        order: ['static-methods', 'lifecycle', 'everything-else', 'render'],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'state',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
        },
      },
    ],
    // 在jsx、tsx预发中，如果创建组件后，默认引入的react是已使用状态
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 0,
    'react/prop-types': 0,
    // 限制jsx语法文件类型
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    // 是否限定class组件state默认在构造函数中
    'react/state-in-constructor': [2, 'never'],
    // 对于额外的props传递是否做出提示，例如非正常html属性
    'react/jsx-props-no-spreading': 0,
    'react/static-property-placement': [2, 'static public field'],
    // 默认情况下始终进行结构赋值
    'react/destructuring-assignment': 0,
    'react/button-has-type': 'off',
    /**
     * 关于typescript语法校验
     * 参考文档： https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
     */
    '@typescript-eslint/no-extra-semi': 0,
    // 是否禁止使用any类型
    '@typescript-eslint/no-explicit-any': 0,
    // 是否对于null情况做非空断言
    '@typescript-eslint/no-non-null-assertion': 0,
    // 是否对返回值类型进行定义校验
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
    // 结合eslint 'no-use-before-define': 'off'，不然会有报错，需要关闭eslint这个校验，主要是增加了对于type\interface\enum
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': ['error', { overrides: { constructors: 'no-public' } }],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
    ],
    /**
     * 参考地址：https://www.npmjs.com/package/eslint-plugin-react-hooks
     */
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'linebreak-style': 0,
    'no-param-reassign': 0,
    'react/require-default-props': [
      0,
      {
        functions: 'defaultArguments',
      },
    ],
  },
}
