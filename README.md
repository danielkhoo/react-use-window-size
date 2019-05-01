# useScroll - Custom React Hook

[![](https://img.shields.io/npm/v/react-use-scroll.svg?style=flat)](https://github.com/danielkhoo/react-use-scroll)
[![](https://img.shields.io/bundlephobia/min/react-use-scroll.svg?style=flat)](https://github.com/danielkhoo/react-use-scroll)

A custom React Hook to get the vertical scroll of the window.
Useful for conditionally rendering elements at fixed scroll points like Sticky Menus or Notifications.

## Install

`$ npm install react-use-scroll`

## Usage

```js
import useScroll from 'react-use-scroll';

const scroll = useScroll();

console.log(scroll); //Stateful scroll value i.e. 0
```

Another example

```js
import useScroll from 'react-use-scroll';

const App = props => {
  const scroll = useScroll();
  return (
    <div className='App'>
      <Navbar />

      {scroll === 0 && <p>This welcome message or banner disappears once the user scrolls down.</p>}

      {/* //Rest of the page  */}
    </div>
  );
};
```

## License

MIT
