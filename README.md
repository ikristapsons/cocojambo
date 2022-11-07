### How to run
- On first run, clone project - git@github.com:ikristapsons/cocojambo.git
- Stay on main
- `yarn install` to setup dependencies
- `yarn jest` to run tests

### General Info
- All tests can be found in ../tests/rectangle.test.js, functions for tests are being exported from ../js/rectangle.js

### Dependencies
- Using babel.js
- jest
- Using jest-console for mocking console in jest https://npm.io/package/jest-console

### Tests
- Rectangle perimeter test checks if the math of perimeter function works correctly and outputs expected result.
- Rectangle area test checks if the math of area function works correctly and outputs expected result.
- Rectangle info test checks if function outputs both perimeter and area function results correctly as a console.log