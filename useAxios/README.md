# @ziphooks/use-axios

React Hook for Requesting and Refetching API. You Can Request API More Convenient.

## Installation

#### yarn

`yarn add @ziphooks/use-axios`

#### npm

`npm i @ziphooks/use-axios`

## Usage

```js
import React from "react";
import useAxios from "@ziphooks/use-axios";

function App() {
  const { loading, data, error, refetch } = useAxios({
    url: "API Url"
  });
  return (
      <div>
        <h1>{data && data.status}</h1>
        <h2>{loading ? "Loading" : "Loaded"}</h2>
        <button onClick={refetch}>Refetch</button>
      </div>
  );
};
```

### Arguments

| Argument | Type | Description | required |
| -- | -- | -- | -- |
| options | Object | An object that options for requesting API | true |
| axiosInstance | Function | A function fot requesting API | false |

### Return

| Return value | Type | Description |
| -- | -- | -- |
| loading | Boolean | A boolean that means if requesting API is over |
| data | Object | An object which contains requested API's response and status |
| error | Object | An object which contains error |
| refetch | Function | A function that refetches the API |