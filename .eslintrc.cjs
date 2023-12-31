module.exports = {
  env: { browser: true, es2020: true,node:true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh',"react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    'react-refresh/only-export-components': 'warn',
    "react/prop-types":"off"
  },
}
