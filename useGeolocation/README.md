# @ziphooks/use-geolocation

React Hook for get geolocation about client.

## Installation

#### yarn

`yarn add @ziphooks/use-geolocation`

#### npm

`npm i @ziphooks/use-geolocation`

## Usage

```js
import React from "react";
import useGeolocation from "@ziphooks/use-geolocation";

function App() {
  const { lat, lon, reload } = useGeolocation();
  return (
    <>
      <h1>latitude: {lat}</h1>
      <h1>longitude: {lon}</h1>
      <button onClick={reload}>Reload</button>
    </>
  );
};
```

### Return

| Return value | Type | Description |
| -- | -- | -- |
| lat | Number | A number latitude of current geolocation |
| lon | Number | A number longitude of current geolocation |
| reload | Function | A function to reload geolocation |