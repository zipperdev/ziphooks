# @ziphooks/use-before-top

React Hook for detecting if mouse is located at browser's top bar. You can use this React Hook for prevent exiting without saving.

## Installation

#### yarn

`yarn add @ziphooks/use-before-top`

#### npm

`npm i @ziphooks/use-before-top`

## Usage

```js
import React from "react";
import useBeforeTop from "@ziphooks/use-before-top";

function App() {
  useBeforeTop(() => alert("Are you saved some stuffs?"));
  return <h1>Some Stuffs</h1>;
};
```

### Arguments

| Argument | Type | Description | required |
| -- | -- | -- | -- |
| onBefore | Boolean | A boolean that means if requesting API is over | true |