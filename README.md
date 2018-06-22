# Icons8 Flat Color icons loader
**It is not an official Icons8 library.**

## Installation
```shell
npm install flat-color-icons-loader
```

## Usage

`get(iconName)` - builds up `file://` URL to the element in the `flat-color-icons` package so that you can use it in `<img/>` tag.
### Example
```javascript
const icons8 = require("flat-color-icons-loader");

document.getElementByID("myIcon").src = icons8.get("shop");
```