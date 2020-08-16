# Using ESLint and Prettier in a TypeScript Project

If you want a shortcut instead of following all this tutorial click [here](shurtcut.md)

## Setting up ESLint to work with TypeScript

```BASH
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Run the next command to initialize and start configuring .eslintrc file:

```BASH
./node_modules/.bin/eslint --init
```

When prompt answer the following:

1. _To check syntax, find problems, and enforce code style_
2. _JavaScript modules (import/export)_
3. _React_
4. _`Does your project use TypeScript?`_ -> _Yes_
5. _`Where does your code run?`_ -> Press space to unselect the "Browser" option
   and press enter
6. _Use a popular style guide_
7. _Airbnb: https://github.com/airbnb/javascript_
8. _JSON_
9. Select **No** (because we'll install with yarn)

It will generate the following `.eslintrc.json`:

```JSON
{
  "env": {
    "es2020": true
  },
  "extends": ["plugin:react/recommended", "airbnb"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {}
}
```

Run the following:

```BASH
yarn add -D eslint-plugin-react@^7.20.0 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint-plugin-import@^2.21.2 eslint-plugin-jsx-a11y@^6.3.0 eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0 @typescript-eslint/parser@latest
```

Let's add the import resolver for the typescript

```BASH
yarn add -D eslint-import-resolver-typescript
```

Let's add some more configurations:

```JSON
{
  "env": { "es2020": true },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "airbnb"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": { "jsx": true },
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
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
  },
}
```

# Adding Prettier

```BASH
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

Create the `.prettierrc` file:

```BASH
touch .prettierrc
```

Copy the following content inside the `.prettierrc` file:

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

Update the `.eslintrc.json` file:

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

The advantage of having prettier setup as an ESLint rule using
eslint-plugin-prettier is that code can automatically be fixed using ESLint's
`--fix` option.

# Run ESLint with the CLI

Add to the scripts in `package.json` file:

```JSON
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint './**/*.{js,ts,tsx}' --quiet",
  }
}
```

# Adding Husky

```BASH
yarn add -D husky
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
