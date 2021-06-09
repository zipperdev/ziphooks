# @ziphooks/use-input

React Hook for validate a value and change value. This is useful on manage special input value.

## Installation

#### yarn

`yarn add @ziphooks/use-input`

#### npm

`npm i @ziphooks/use-input`

## Usage

```js
import React from "react";
import useInput from "@ziphooks/use-input";

function App() {
  const onlyPureText = useInput("asdf", (value) => !value.trim().match(/[!@#$%^&*()\-_=+[\]{}\\|;:'"<>,./?`~]/g));
  return (
    <div ref={element}>
      <h1>Please write only pure text</h1>
      <input {...onlyPureText} />
    </div>
  );
};
```

### Arguments

| Argument | Type     | Description | Required |
| -- | -- | -- | -- |
| initialValue | Not A Function | A data for initial value | true |
| validator | Function | A function to validate a enter value | false |

### Return

| Return value | Type | Description |
| -- | -- | -- |
| value | Any | A data that is current a value |
| onChange | Function | A function to set a value |