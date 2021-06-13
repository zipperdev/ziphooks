# Ziphooks

Zipped Useful React Hooks Ready To Install With NPM.

| Hook | Description | Documentation | NPM |
| -- | -- | -- | -- |
| useAxios | React Hook for Requesting and Refetching API | [Documentation](https://github.com/zipperdev/Ziphooks/tree/master/useAxios) | [NPM Page](https://www.npmjs.com/package/@ziphooks/use-axios) |
| useBeforeTop | React Hook for detecting if mouse is located at browser's top bar | [Documentation](https://github.com/zipperdev/Ziphooks/tree/master/useBeforeTop) | [NPM Page](https://www.npmjs.com/package/@ziphooks/use-before-top) |
| useClick | React Hook for detecting clicked a component and react it | [Documentation](https://github.com/zipperdev/Ziphooks/tree/master/useClick) | [NPM Page](https://www.npmjs.com/package/@ziphooks/use-click) |
| useFadeIn | React Hook for fade in a selected element | [Documentation](https://github.com/zipperdev/Ziphooks/tree/master/useFadeIn) | [NPM Page](https://www.npmjs.com/package/@ziphooks/use-fade-in) |
| useFullscreen | React Hook for change a component to fullscreen mode and normal mode | [Documentation](https://github.com/zipperdev/Ziphooks/tree/master/useFullscreen) | [NPM Page](https://www.npmjs.com/package/@ziphooks/use-fullscreen) |
| useGeolocation | React Hook for get geolocation about client | [Documentation](https://github.com/zipperdev/Ziphooks/tree/master/useGeolocation) | [NPM Page](https://www.npmjs.com/package/@ziphooks/use-geolocation) |
| useInput | React Hook for validate a value and change value | [Documentation](https://github.com/zipperdev/Ziphooks/tree/master/useInput) | [NPM Page](https://www.npmjs.com/package/@ziphooks/use-input) |
| useNetwork | React Hook for get if network is connected | [Documentation](https://github.com/zipperdev/Ziphooks/tree/master/useNetwork) | [NPM Page](https://www.npmjs.com/package/@ziphooks/use-network) |
| useNotification | React Hook for notify on browser | [Documentation](https://github.com/zipperdev/Ziphooks/tree/master/useNotification) | [NPM Page](https://www.npmjs.com/package/@ziphooks/use-notification) |
| useScroll | React Hook for get current scroll position | [Documentation](https://github.com/zipperdev/Ziphooks/tree/master/useScroll) | [NPM Page](https://www.npmjs.com/package/@ziphooks/use-scroll) |
| useTabs | React Hook for get value in array more convenient | [Documentation](https://github.com/zipperdev/Ziphooks/tree/master/useTabs) | [NPM Page](https://www.npmjs.com/package/@ziphooks/use-tabs) |
| useTitle | React Hook for changing a title from HTML | [Documentation](https://github.com/zipperdev/Ziphooks/tree/master/useTitle) | [NPM Page](https://www.npmjs.com/package/@ziphooks/use-title) |
<br />

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
<br />

# @ziphooks/use-before-top

React Hook for detecting if mouse is located at browser's top bar. You can use this React Hook for prevent exiting without saving.

## Installation

#### yarn

`yarn add @ziphooks/use-before-top`

#### npm

`npm i @ziphooks/use-before-top`

## Usage

```js
import React from "react";
import useBeforeTop from "@ziphooks/use-before-top";

function App() {
  useBeforeTop(() => alert("Are you saved some stuffs?"));
  return <h1>Some Stuffs</h1>;
};
```

### Arguments

| Argument | Type | Description | required |
| -- | -- | -- | -- |
| onBefore | Boolean | A boolean that means if requesting API is over | true |
<br />

# @ziphooks/use-click

React Hook for detecting clicked a component and react it.

## Installation

#### yarn

`yarn add @ziphooks/use-click`

#### npm

`npm i @ziphooks/use-click`

## Usage

```js
import React from "react";
import useClick from "@ziphooks/use-click";

function App() {
  const title = useClick(() => alert("Clicked!"));
  return (
      <h1 ref={title}>Click me</h1>
  );
};
```

### Arguments

| Argument | Type | Description | required |
| -- | -- | -- | -- |
| onClick | Function | A function that is executed when a selected element is clicked | true |

### Return

| Return value | Type | Description |
| -- | -- | -- |
| element | HTML Tag | A HTML tag selected in arguments |
<br />

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
<br />

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
<br />

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
<br />

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
<br />

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
<br />

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
<br />

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
<br />

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
<br />

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