# @ziphooks/use-network

React Hook for get if network is connected.

## Installation

#### yarn

`yarn add @ziphooks/use-network`

#### npm

`npm i @ziphooks/use-network`

## Usage

```js
import React from "react";
import useNetwork from "@ziphooks/use-network";

function App() {
  const isOnline = useNetwork((online) => {
      if (online) {
          alert("You are online");
      } else {
          alert("You are offline");
      };
  });
  return <h1>You are {isOnline ? "online" : "offline"}</h1>;
};
```

### Arguments

| Argument | Type     | Description | Required |
| -- | -- | -- | -- |
| onChange | Function | A function called after confirming that the network is connected | true |

### Return

| Return value | Type | Description |
| -- | -- | -- |
| status | Boolean | A boolean if it is connected online |