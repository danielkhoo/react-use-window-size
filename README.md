# useScroll - Custom React Hook

[![](https://img.shields.io/npm/v/nric.svg?style=flat)](https://github.com/danielkhoo/react-use-scroll)
[![](https://img.shields.io/bundlephobia/min/nric.svg?style=flat)](https://github.com/danielkhoo/react-use-scroll)

A custom React Hook to get the vertical scroll of the window.
Useful for conditionally rendering elements at fixed scroll points like Sticky Menus or Notifications.

## Install

`$ npm install nric`

## Usage

```js
import useScroll from 'react-use-scroll';

const scroll = useScroll();

console.log(scroll); //Stateful scroll value i.e. 0
```

## License

MIT
