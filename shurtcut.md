# Using ESLint and Prettier in a TypeScript Project

```BASH
yarn add -D eslint @typescript-eslint/parser@latest @typescript-eslint/eslint-plugin@latest eslint-plugin-react@^7.20.0 eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0 eslint-config-airbnb@latest eslint-plugin-import@^2.21.2 eslint-plugin-jsx-a11y@^6.3.0 eslint-import-resolver-typescript prettier eslint-config-prettier eslint-plugin-prettier husky && touch .prettierrc .eslintrc.json
```

Add to `.prettierrc` file:

```JSON
{
  "arrowParens": "avoid",
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "printWidth": 80,
  "semi": false
}
```

Add to `.eslintrc.json` file:

```JSON
{
  "env": { "es2020": true },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "airbnb",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": { "jsx": true },
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint", "prettier"],
  "rules": {
    "prettier/prettier": "error",
    "react/style-prop-object": "off",
    "react/jsx-filename-extension": ["off", { "extensions": [".js", ".jsx"] }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      { "js": "never", "jsx": "never", "ts": "never", "tsx": "never" }
    ]
  },
  "settings": {
    "react": { "version": "detect" },
    "import/resolver": { "typescript": {} }
  }
}

```

Add to the scripts in `package.json` file:

```JSON
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint './**/*.{js,ts,tsx}' --quiet",
  }
}
```

Add the following to the `package.json`:

```JSON
{
  "husky": {
    "hooks": {
      "pre-commit": "yarn lint --fix"
    }
  },
}
```
