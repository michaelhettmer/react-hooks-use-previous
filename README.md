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

## Hooks collection for storing and retrieving previous values

React Hooks Use Previous is a collection of strongly typed and well tested hooks to store and retrieve retrieve previous values from any component property. The most common default values are already set so just close that bracket and save yourself those extra characters.

This library works out of the box with React / React Native projects using JavaScript or Typescript and has all necessary type declarations included.

## Getting started

### Install

#### Latest stable release

```sh
npm install --save react-hooks-use-previous
```

or

```sh
yarn add react-hooks-use-previous
```

#### Latest Release Candidate

```sh
npm install --save react-hooks-use-previous@next
```

or

```sh
yarn add react-hooks-use-previous@next
```

### Usage Example

```typescript
import React, { useState } from 'react';
import usePrevious, { usePreviousNumber } from 'react-hooks-use-previous';

const MyReactComponent = () => {
    // This is the state variable from which we need
    // the previous value while rendering
    const [value, setValue] = useState<number>(0);

    // Option 1: Use the generic hook so that we can
    // assign a custom initial previous value (=13)
    // for the first component render execution
    const prevValue = usePrevious<number>(value, 13);

    // Option 2: Use one of the predefined hooks which
    // already ship with a default value (e.g. =0) and
    // profit from a much cleaner and more readable syntax
    const prevValue = usePreviousNumber(value);

    return (
        <div>
            <span>The previous value was: {prevValue}</span>
            <span>The current value is: {value}</span>
        </div>
    );
};

export default MyReactComponent;
```
