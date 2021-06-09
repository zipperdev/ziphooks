# @ziphooks/use-title

React Hook for changing a title from HTML.

## Installation

#### yarn

`yarn add @ziphooks/use-title`

#### npm

`npm i @ziphooks/use-title`

## Usage

```js
import React from "react";
import useTitle from "@ziphooks/use-title";

function App() {
  const changeTitle = useTitle("Home");
  setTimeout(() => {
      changeTitle("Hi");
  }, 3000);
  return <h1>The title is going to change to 'Home' and change to 'Hi' in 3 seconds</h1>;
};
```

### Arguments

| Argument | Type     | Description | Required |
| -- | -- | -- | -- |
| initialTitle | String | A string for initial a title from HTML | true |

### Return

| Return value | Type | Description |
| -- | -- | -- |
| setTitle | Function | A function to change a title from HTML |