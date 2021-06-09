# @ziphooks/use-fade-in

React Hook for fade in a selected element. Useful on fade motion intro.

## Installation

#### yarn

`yarn add @ziphooks/use-fade-in`

#### npm

`npm i @ziphooks/use-fade-in`

## Usage

```js
import React from "react";
import useFadeIn from "@ziphooks/use-fade-in";

function App() {
  const title = useFadeIn(0.3, 0.5);
  return (
      <h1 ref={title}>Fade In</h1>
  );
};
```

### Arguments

| Argument | Type | Description | required |
| -- | -- | -- | -- |
| Duration | Number | A number that duration of fade in | false |
| Delay | Number | A number that delay of fade in | false |

### Return

| Name | Type | Description |
| -- | -- | -- |
| ref   | React Ref | A ref created to fadeIn the element |
| style | Object    | Style object containing `{ opacity: 0 }` to give to the element as a default |