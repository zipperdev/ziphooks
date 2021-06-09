# @ziphooks/use-notification

React Hook for notify on browser.

## Installation

#### yarn

`yarn add @ziphooks/use-notification`

#### npm

`npm i @ziphooks/use-notification`

## Usage

```js
import React from "react";
import useNotification from "@ziphooks/use-notification";

function App() {
  const sayHello = useNotification("Hello", { body: "From @ziphooks/use-notification" });
  return (
      <div>
        <h1>Say Hello</h1>
        <button onClick={sayHello}>Click me</button>
      </div>
  );
};
```

### Arguments

| Argument | Type     | Description | Required |
| -- | -- | -- | -- |
| title | String | A string for use in title on notification | true |
| options | Object | An object for use notification options | false |

### Return

| Return value | Type | Description |
| -- | -- | -- |
| fireNotification | Function | A function to fire notification |