# @ziphooks/use-click

React Hook for detecting clicked a component and react it.

## Installation

#### yarn

`yarn add @ziphooks/use-click`

#### npm

`npm i @ziphooks/use-click`

## Usage

```js
import React from "react";
import useClick from "@ziphooks/use-click";

function App() {
  const title = useClick(() => alert("Clicked!"));
  return (
      <h1 ref={title}>Click me</h1>
  );
};
```

### Arguments

| Argument | Type | Description | required |
| -- | -- | -- | -- |
| onClick | Function | A function that is executed when a selected element is clicked | true |

### Return

| Return value | Type | Description |
| -- | -- | -- |
| element | HTML Tag | A HTML tag selected in arguments |