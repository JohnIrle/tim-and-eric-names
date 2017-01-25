# tim-and-eric-names
[![Travis](https://img.shields.io/travis/JohnIrle/tim-and-eric-names.svg)](https://travis-ci.org/JohnIrle/tim-and-eric-names)
[![Codecov](https://img.shields.io/codecov/c/github/JohnIrle/tim-and-eric-names.svg)](https://codecov.io/gh/JohnIrle/tim-and-eric-names)
[![npm](https://img.shields.io/npm/v/tim-and-eric-names.svg)](https://www.npmjs.com/package/tim-and-eric-names)
[![npm](https://img.shields.io/npm/l/tim-and-eric-names.svg)]()
[![npm](https://img.shields.io/npm/dt/tim-and-eric-names.svg)]()
---
tim-and-eric-names is a small application that will return either and array of all of the names in names.json, a random name, or an array with a specified number of random names. 

## Install
```
npm install tim-and-eric-names

```
### Browser support
```
<script src="https://unpkg.com/tim-and-eric-names@1.1.0/dist/index.umd.js"></script>
<script src="https://unpkg.com/tim-and-eric-names@1.1.0/dist/index.umd.min.js"></script>
```
---
### Use
```
import timEricNames from 'tim-and-eric-names'

timEricNames.all; // Returns an array will all of the names.

timEricNames.random(); // Returns a random name.

timEricNames.random(3) // Returns an array with the specified number of random names.
```
