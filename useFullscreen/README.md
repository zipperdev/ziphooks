# @ziphooks/use-fullscreen

React Hook for change a component to fullscreen mode and normal mode.

## Installation

#### yarn

`yarn add @ziphooks/use-fullscreen`

#### npm

`npm i @ziphooks/use-fullscreen`

## Usage

```js
import React from "react";
import useFullscreen from "@ziphooks/use-fullscreen";

function App() {
  const { element, triggerFull, exitFull } = useFullscreen(isFull => alert(isFull ? "I am FULL" : "I am not FULL")));
  return (
    <div ref={element}>
      <h1>Hello</h1>
      <button onClick={triggerFull}>Enter Fullscreen</button>
      <button onClick={exitFull}>Exit Fullscreen</button>
    </div>
  );
};
```

### Arguments

| Argument | Type     | Description | Required |
| -- | -- | -- | -- |
| onChange | Function | A function to be called when the screen goes Fullscreen or exits is | false |

### Return

| Return value | Type | Description |
| -- | -- | -- |
| element      | React Ref | A ref to add to the element that you want to make fullscreen |
| triggerFull  | Function  | A function to make the element enter fullscreen |
| exitFull     | Function  | A function to make the document exit fullscreen |