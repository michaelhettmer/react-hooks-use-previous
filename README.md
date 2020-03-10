<div align="center">
<h1>react-hooks-use-previous</h1>

<img src="./logo_wide_slim.png" alt="React Hooks Use Previous Logo" />

<p>Strongly typed and well tested React Hooks to store and retrieve previous values from any component property.</p>
</div>

---

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![Version][version-badge]][package]
[![Downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]
[![Semantic Release][release-badge]][release]
[![Conventional Commits][commits-badge]][commits]
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg)](#contributors-)
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]
[![Discord][discord-badge]][discord]
[![Twitter][twitter-badge]][twitter]

## About

React Hooks Use Previous is a collection of strongly typed and well tested hooks to store and retrieve retrieve previous values from any component property. The most common default values are already set so just close that bracket and save yourself those extra characters.

This library works out of the box with React / React Native projects using JavaScript or Typescript and has all necessary type declarations included.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [⚙️ Installation](#️-installation)
- [⚡️ Getting Started](#️-getting-started)
- [🎯 Features](#-features)
- [Other Solutions](#other-solutions)
- [Issues](#issues)
  - [🐛 Bugs](#-bugs)
  - [💡 Feature Requests](#-feature-requests)
- [Contributors ✨](#contributors-)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## ⚙️ Installation

### Latest stable release

```sh
npm install --save react-hooks-use-previous
```

or

```sh
yarn add react-hooks-use-previous
```

### Latest Release Candidate

```sh
npm install --save react-hooks-use-previous@next
```

or

```sh
yarn add react-hooks-use-previous@next
```

## ⚡️ Getting Started

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
            <span>{`The previous value was: ${prevValue}`}</span>
            <span>{`The current value is: ${value}`}</span>
        </div>
    );
};

export default MyReactComponent;
```

## 🎯 Features

* Stores and provides value of a state before it was updated
* Includes helper functions to simplify usage

## Other Solutions

I'm not aware of any, if you are please [make a pull request][prs] and add it here!

## Issues

_Looking to contribute? Look for the [Good First Issue][good-first-issue]
label._

### 🐛 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

[**See Bugs**][bugs]

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding
a 👍. This helps maintainers prioritize what to work on.

[**See Feature Requests**][requests]

## Contributors ✨

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://michael-hettmer.de"><img src="https://avatars0.githubusercontent.com/u/13876624?v=4" width="100px;" alt=""/><br /><sub><b>Michael Hettmer</b></sub></a><br /><a href="https://github.com/MichaelHettmer/react-hooks-use-previous/commits?author=MichaelHettmer" title="Code">💻</a> <a href="https://github.com/MichaelHettmer/react-hooks-use-previous/commits?author=MichaelHettmer" title="Documentation">📖</a> <a href="#infra-MichaelHettmer" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/MichaelHettmer/react-hooks-use-previous/commits?author=MichaelHettmer" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/chrismilson"><img src="https://avatars2.githubusercontent.com/u/13655076?v=4" width="100px;" alt=""/><br /><sub><b>Chris Milson</b></sub></a><br /><a href="https://github.com/MichaelHettmer/react-hooks-use-previous/commits?author=chrismilson" title="Code">💻</a> <a href="https://github.com/MichaelHettmer/react-hooks-use-previous/issues?q=author%3Achrismilson" title="Bug reports">🐛</a> <a href="https://github.com/MichaelHettmer/react-hooks-use-previous/commits?author=chrismilson" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[build-badge]: https://circleci.com/gh/react-hooks-use-previous/react-hooks-use-previous/tree/master.svg?style=shield
[build]: https://circleci.com/gh/react-hooks-use-previous/react-hooks-use-previous
[coverage-badge]: https://codecov.io/gh/react-hooks-use-previous/react-hooks-use-previous/branch/master/graph/badge.svg
[coverage]: https://codecov.io/gh/react-hooks-use-previous/react-hooks-use-previous
[version-badge]: https://img.shields.io/npm/v/react-hooks-use-previous.svg
[package]: https://www.npmjs.com/package/react-hooks-use-previous
[downloads-badge]: https://img.shields.io/npm/dm/react-hooks-use-previous.svg
[npmtrends]: http://www.npmtrends.com/react-hooks-use-previous
[license-badge]: https://img.shields.io/npm/l/react-hooks-use-previous.svg
[license]: https://github.com/react-hooks-use-previous/react-hooks-use-previous/blob/master/LICENSE
[release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[release]: https://github.com/semantic-release/semantic-release
[commits-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
[commits]: https://conventionalcommits.org
[twitter-badge]: https://img.shields.io/twitter/follow/react-hooks-use-previous.svg?label=Follow%20@react-hooks-use-previous
[twitter]: https://twitter.com/intent/follow?screen_name=react-hooks-use-previous
[discord-badge]: https://img.shields.io/discord/620938362379042837
[discord]: https://discord.gg/MEpKcF3
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[prs]: http://makeapullrequest.com
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg
[coc]: https://github.com/react-hooks-use-previous/react-hooks-use-previous/blob/master/CODE_OF_CONDUCT.md
[emojis]: https://github.com/all-contributors/all-contributors#emoji-key
[all-contributors]: https://github.com/all-contributors/all-contributors
[bugs]: https://github.com/react-hooks-use-previous/react-hooks-use-previous/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Acreated-desc+label%3Abug
[requests]: https://github.com/react-hooks-use-previous/react-hooks-use-previous/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement
[good-first-issue]: https://github.com/react-hooks-use-previous/react-hooks-use-previous/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement+label%3A%22good+first+issue%22
<!-- prettier-ignore-end -->