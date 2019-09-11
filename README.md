<img src="./logo_wide_slim.png" alt="React Hooks Use Previous Logo" />

# React Hooks Use Previous

[![license](https://img.shields.io/npm/l/react-hooks-use-previous)](https://github.com/MichaelHettmer/react-hooks-use-previous/blob/master/LICENSE.md)
[![circleci](https://circleci.com/gh/MichaelHettmer/react-hooks-use-previous.svg?style=shield)](https://circleci.com/gh/MichaelHettmer/react-hooks-use-previous)
[![codecov](https://codecov.io/gh/MichaelHettmer/react-hooks-use-previous/branch/master/graph/badge.svg)](https://codecov.io/gh/MichaelHettmer/react-hooks-use-previous)
[![greenkeeper](https://badges.greenkeeper.io/MichaelHettmer/react-hooks-use-previous.svg)](https://greenkeeper.io/)
[![npm version](https://img.shields.io/npm/v/react-hooks-use-previous)](https://www.npmjs.com/package/react-hooks-use-previous)
[![npm downloads](https://img.shields.io/npm/dw/react-hooks-use-previous)](https://www.npmjs.com/package/react-hooks-use-previous)
[![pull requests](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/MichaelHettmer/react-hooks-use-previous/compare)
[![discord](https://img.shields.io/discord/620938362379042837)](https://discord.gg/R2jNASR)
[![twitter](https://img.shields.io/twitter/follow/MichaelHettmer.svg?label=Follow%20@MichaelHettmer)](https://twitter.com/intent/follow?screen_name=MichaelHettmer)

## Configurable redux-saga execution management

React Hooks Use Previous provides an easy way to quickly run multiple sagas concurrently in a tested and widely used way.

This package is based on the root saga pattern from the [official documentation](https://redux-saga.js.org/docs/advanced/RootSaga.html) and therefore an easy way to get the described behavior without copy-pasting it into every new project.

Additionally the root saga behavior was extended by the following fully configurable and optional features (more to come):

* Strictly typed and fully Typescript compatible
* Maximum retry count for restarting child sagas
* Default error handling with a warning message including the saga name
* Custom error handling callback

## Getting started

### Install

#### Latest stable release

``` sh
npm install --save react-hooks-use-previous
```

or

``` sh
yarn add react-hooks-use-previous
```

#### Latest Release Candidate

``` sh
npm install --save react-hooks-use-previous@next
```

or

``` sh
yarn add react-hooks-use-previous@next
```

### Usage Example

``` typescript
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import createRootSaga from 'react-hooks-use-previous';

function* saga1() {
    /*...*/
}
function* saga2() {
    /*...*/
}

// Option 1: Execute all specified sagas concurrently with default options.
const rootSaga = createRootSaga([saga1, saga2]);

// Option 2: Start all sagas with (partly) customized default options.
const rootSaga = createRootSaga([saga1, saga2], {
    maxRetries: 3,
    errorHandler: (error, saga, options) => console.err(
        `Error in saga ${saga.name} with options ${options}: ${error}`);
});

// Option 3: Start all sagas with (partly) customized default options
// and use specific custom options only for saga1.
// All other options of saga1 fallback to the (customized) default ones.
const rootSaga = createRootSaga([[saga1, { maxRetries: Infinity }], saga2], {
    maxRetries: 3,
    onError: (error, saga, options) => console.error(
        `Error in saga ${saga.name} with options ${options}: ${error}`),
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
```
