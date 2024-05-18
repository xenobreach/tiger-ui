<p align="center">
  <img src="https://github.com/xenobreach/tiger-ui/assets/92295550/dec971fb-64c5-4c5f-ba27-b940556b65fb" alt="Tiger UI logo" height="150" width="150">
  <h1 align="center" style="color: #26dba9">Color Converter</h1>
</p>

**Color Converter** helps you convert your color codes to different color codes. For example, you can convert HEX code to RGB, RGBA code to HSLA, HEX code to HSL and many other color types.

## Installation
Install the package in your project directory with:
### npm:
```
npm install @tiger-ui/color-converter
```
### yarn:
```
yarn add @tiger-ui/color-converter
```

## Examples
### HEX to RGB Codes
```js
import ColorConverter from '@tiger-ui/color-converter';

const myHEXColor = '#ffffff';
const myRGBColorCodes = ColorConverter.hexToRgbCodes(myHEXColor);

console.log(myRGBColorCodes);
```
output:
```js
{
    "r": 255,
    "g": 255,
    "b": 255
}
```

### RGB to HSL Codes
```js
import ColorConverter from '@tiger-ui/color-converter';

const red = 255;
const green = 255;
const blue = 255;
const myHSLColorCodes = ColorConverter.rgbToHslCodes(red, green, blue);

console.log(myHSLColorCodes);
```
output:
```js
{
    "h": 0,
    "s": 0,
    "l": 100
}
```

### RGBA to HSLA Codes
```js
import ColorConverter from '@tiger-ui/color-converter';

const red = 255;
const green = 255;
const blue = 255;
const alpha = 0.5;
const myHSLAColorCodes = ColorConverter.rgbaToHslaCodes(red, green, blue, alpha);

console.log(myHSLAColorCodes);
```
output:
```js
{
    "h": 0,
    "s": 0,
    "l": 100,
    "a": 0.5
}
```

### HEX to RGBA Codes
```js
import ColorConverter from '@tiger-ui/color-converter';

const myHEXColor = '#ffffff';
const alpha = 0.5;
const myRGBAColorCodes = ColorConverter.hexToRgbaCodes(myHEXColor, alpha);

console.log(myRGBAColorCodes);
```
output:
```js
{
    "r": 255,
    "g": 255,
    "b": 255,
    "a": 0.5
}
```

### HSL to RGB Codes
```js
import ColorConverter from '@tiger-ui/color-converter';

const hue = 80;
const saturation = 60; // %60
const lightness = 40; // %40
const myRGBColorCodes = ColorConverter.hslToRgbCodes(hue, saturation, lightness);

console.log(myRGBColorCodes);
```
output:
```js
{
    "r": 122,
    "g": 163,
    "b": 41
}
```

### HSLA to RGBA Codes
```js
import ColorConverter from '@tiger-ui/color-converter';

const hue = 80;
const saturation = 60; // %60
const lightness = 40; // %40
const alpha = 0.5;
const myRGBAColorCodes = ColorConverter.hslaToRgbaCodes(hue, saturation, lightness, alpha);

console.log(myRGBAColorCodes);
```
output:
```js
{
    "r": 122,
    "g": 163,
    "b": 41,
    "a": 0.5
}
```

### HEX to HSL Codes
```js
import ColorConverter from '@tiger-ui/color-converter';

const myHEXColor = '#2c58d1';
const myHSLColorCodes = ColorConverter.hexToHslCodes(myHEXColor);

console.log(myHSLColorCodes);
```
output:
```js
{
    "h": 224,
    "s": 65.2,
    "l": 49.6
}
```

### RGB to HEX (String)
```js
import ColorConverter from '@tiger-ui/color-converter';

const red = 255;
const green = 255;
const blue = 255;
const myHEXStringColor = ColorConverter.rgbToHex(red, green, blue);

console.log(myHEXStringColor);
```
output:
```js
'#ffffff'
```

### RGBA to HEXA (String)
```js
import ColorConverter from '@tiger-ui/color-converter';

const red = 44;
const green = 88;
const blue = 209;
const alpha = 0.5;
const myHEXAStringColor = ColorConverter.rgbaToHexa(red, green, blue, alpha);

console.log(myHEXAStringColor);
```
output:
```js
'#2c58d180'
```

### HEX(A) to RGBA (String)
```js
import ColorConverter from '@tiger-ui/color-converter';

const myHEXColor = '#1f4ecf';
const alpha = 0.5; // optional
const myRGBAStringColor = ColorConverter.hexToRgba(myHEXColor, alpha);

console.log(myRGBAStringColor);
```
output:
```js
'rgba(31, 78, 207, 0.5)'
```

### HEX to RGB (String)
```js
import ColorConverter from '@tiger-ui/color-converter';

const myHEXColor = '#1f4ecf';
const myRGBStringColor = ColorConverter.hexToRgb(myHEXColor);

console.log(myRGBStringColor);
```
output:
```js
'rgb(31, 78, 207)'
```

### RGB to HSL (String)
```js
import ColorConverter from '@tiger-ui/color-converter';

const red = 31;
const green = 78;
const blue = 207;
const myHSLStringColor = ColorConverter.rgbToHsl(red, green, blue);

console.log(myHSLStringColor);
```
output:
```js
'hsl(224,73.9%,46.7%)'
```

### HSL to RGB (String)
```js
import ColorConverter from '@tiger-ui/color-converter';

const hue = 80;
const saturation = 60; // %60
const lightness = 40; // %40
const myRGBStringColor = ColorConverter.hslToRgb(hue, saturation, lightness);

console.log(myRGBStringColor);
```
output:
```js
'rgb(122,163,41)'
```

### HSLA to RGBA (String)
```js
import ColorConverter from '@tiger-ui/color-converter';

const hue = 80;
const saturation = 60; // %60
const lightness = 40; // %40
const alpha = 0.5;
const myRGBAStringColor = ColorConverter.hslaToRgba(hue, saturation, lightness, alpha);

console.log(myRGBAStringColor);
```
output:
```js
'rgba(122,163,41,0.5)'
```

### HEX to HSL (String)
```js
import ColorConverter from '@tiger-ui/color-converter';

const myHEXColor = '#1f4ecf';
const myHSLStringColor = ColorConverter.hexToHsl(myHEXColor);

console.log(myHSLStringColor);
```
output:
```js
'hsl(224,73.9%,46.7%)'
```

### RGB to RGB Codes
```js
import ColorConverter from '@tiger-ui/color-converter';

const myRGBColor = 'rgb(122,163,41)';
const myRGBColorCodes = ColorConverter.rgbToRgbCodes(myRGBColor);

console.log(myRGBColorCodes);
```
output:
```js
{
    "r": 122,
    "g": 163,
    "b": 41
}
```

### RGBA to RGBA Codes
```js
import ColorConverter from '@tiger-ui/color-converter';

const myRGBAColor = 'rgb(122,163,41,0.5)';
const myRGBAColorCodes = ColorConverter.rgbaToRgbaCodes(myRGBAColor);

console.log(myRGBAColorCodes);
```
output:
```js
{
    "r": 122,
    "g": 163,
    "b": 41,
    "a": 0.5
}
```

## Special Thanks
We would like to express our special thanks to the resources we have used in the development of this library, which have been of great help to us:
- **RGB TO HSL CODES:**
  - https://www.30secondsofcode.org/js/s/rgb-to-hsl/
  - https://css-tricks.com/converting-color-spaces-in-javascript/#aa-rgb-to-hsl
- **RGBA TO HSLA CODES:**
  - https://www.30secondsofcode.org/js/s/rgb-to-hsl/
  - https://css-tricks.com/converting-color-spaces-in-javascript/#aa-rgb-to-hsl
- **HEX TO RGB/RGBA CODES:**
  - https://stackoverflow.com/a/28056903
- **HSL TO RGB CODES:**
  - https://css-tricks.com/converting-color-spaces-in-javascript/#aa-hsl-to-rgb
- **HSLA TO RGBA CODES:**
  - https://css-tricks.com/converting-color-spaces-in-javascript/#aa-hsla-to-rgba
- **RGB TO HEX:**
  - https://css-tricks.com/converting-color-spaces-in-javascript/#aa-rgb-to-hex
- **RGBA TO HEXA:**
  - https://css-tricks.com/converting-color-spaces-in-javascript/#aa-rgba-to-hex-rrggbbaa
- **HEX TO RGB/RGBA :**
  - https://stackoverflow.com/a/28056903
- **HEX TO RGB:**
  - https://stackoverflow.com/a/28056903
- **RGB TO RGB CODES:**
  - https://stackoverflow.com/a/10971090
- **RGBA TO RGBA CODES:**
  - https://stackoverflow.com/a/10971090
