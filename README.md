# :fire: TypeScript-React Library

## Description
Boilerplate to create a library of [React](https://reactjs.org/) components using [TypeScript](https://www.typescriptlang.org/) and [TypeStyle](https://typestyle.github.io/#/).

It provides the follwing features:
- Hot realoading through [webpack](https://webpack.js.org/)
- _.d.ts_ files autogeneration thanks to the ts compiler
- Easy and fast export/import procedure
- Unit testing and coverage computation with [Jest](https://jestjs.io/) and [Enzyme](https://github.com/airbnb/enzyme)
- Integration testing with [Selenium](https://www.seleniumhq.org/)
- Code quality evaluation through [TSLint](https://palantir.github.io/tslint/)


## Running the demo
```
    npm i
    npm start
```

## Test & Lint
- Tests without coverage: ```npm t```
- Tests with coverage: ```npm run coverage```
- Lint: ```tslint --project .``` (from the project root)

## Export
First of all execute the following command:
```
    npm run build
```
This will run all tests and the linter. After that, if no test fails and there isn't any lint issue, the library is built inside _lib_ (note that the compiler will generate all _.d.ts_ files). Finally, _src/assets/*_ and _src/styles.css_ are copied in lib.

Now, in order to update the library, it suffices to push the _lib_ folder.

## Import & Usage
In the project where you want to import the library run:
```
    npm i git+<clone link> --save
```

Then you can import a given component in the following ways:
```
    import {MyComponent} from "<lib_name>";

    import MyComponent from "<lib_name>/lib/my_component"; 
```

The first syntax will, as a side effect, import the whole library. While using the second one, only the component is imported.

See the [demo](https://github.com/lromerio/TypescriptReactLibrary/tree/master/example/demo) for some basical example.

## Extending
Each component comes with its own folder. Make sure to add an _index.ts_ file (where you insert all export declarations) inside this folder. Also, remember to add the export declarations of your new component in the _index.ts_ file at the root of _src_.

Export declarations enable you to import your components as described above.

## License
MIT licensed, details in [LICENSE.md](/LICENSE.md).


## Author
Lucio Romerio - [lromerio](https://github.com/lromerio)
