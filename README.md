# learn-ts

### Cheat Sheet

[Basic Types, Enums, Types, Interfaces, Classes, Functions, Generics](./src/index.ts)

### A Good Video

[![Link to Tutorial](https://img.youtube.com/vi/BCg4U1FzODs/0.jpg)](https://www.youtube.com/watch?v=BCg4U1FzODs)

## Setup

### Getting Typescript in your project

```bash
npm init
npm install typescript
# global install
npm install -g typescript
```

### Transpiling your first `.ts` file into `.js`

```bash
# target a specific file
npx tsc index.ts
# compile all files in the directory with .ts
npx tsc
```

### Watchmode

```
npx tsc --watch index
```

- compiler runs live while you are coding so changes reflect in the js code

### Config Files `tsconfig.json`

```
npx tsc --init
```

- `"target": "es6"`
  - telling what version of JS to transpile to.

### Folder Structure

- `"rootDir": "./src",` and `"outDir": "./dist"`
  - production code (transpiled js) goes into &rarr; `outDir`
  - source code will be the &rarr; `rootDir`
- Browsers still cannot see index.ts files
  - still need to bring `.js` version in html files for instance for script tags
    - `<script src="index.js"></script>`

### Setup

```
npx create-react-app my-app --template typescript
```
