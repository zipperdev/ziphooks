# @ziphooks/use-scroll

React Hook for get current scroll position. It is useful when make animations.

## Installation

#### yarn

`yarn add @ziphooks/use-scroll`

#### npm

`npm i @ziphooks/use-scroll`

## Usage

```js
import React from "react";
import useScroll from "@ziphooks/use-scroll";

function App() {
  const scrollPosition = useScroll();
  return (
      <div>
        <h1>X: {scrollPosition.x}</h1>
        <h1>Y: {scrollPosition.y}</h1>
      </div>
  );
};
```

### Return

| Return value | Type | Description |
| -- | -- | -- |
| state | Object | An object that gives you scroll x position and scroll y position |