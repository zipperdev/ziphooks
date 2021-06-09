# @ziphooks/use-tabs

React Hook for get value in array more convenient. It can use on moving section.

## Installation

#### yarn

`yarn add @ziphooks/use-tabs`

#### npm

`npm i @ziphooks/use-tabs`

## Usage

```js
import React from "react";
import useTabs from "@ziphooks/use-tabs";

function App() {
  const sections = [
      {
          "title": "Home", 
          "body": "Welcome to Home"
      }, 
      {
          "title": "Blog", 
          "body": "Welcome to Blog"
      }, 
      {
          "title": "Contact", 
          "body": "Welcome to Contact"
      }
  ];
  const { currentItem, changeItem } = useTabs(0, sections);
  return (
      <div>
        {sections.map((section, index) => (
            <button onClick={() => changeItem(index)}>
              {section.title}
            </button>
        ))}
        <h1>{currentItem.title}</h1>
        <p>{currentItem.body}</p>
      </div>
  );
};
```

### Arguments

| Argument | Type     | Description | Required |
| -- | -- | -- | -- |
| initalTab | Number | A number for initial tab's index | true |
| allTabs | Array | An array for use in this React Hook | true |

### Return

| Return value | Type | Description |
| -- | -- | -- |
| currentItem | Any | A data that is current tab |
| changeItem | Function | A function that receives index to change current tab |