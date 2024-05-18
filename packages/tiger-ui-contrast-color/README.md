<p align="center">
  <img src="https://github.com/xenobreach/tiger-ui/assets/92295550/dec971fb-64c5-4c5f-ba27-b940556b65fb" alt="Tiger UI logo" height="150" width="150">
  <h1 align="center" style="color: #26dba9">Contrast Color</h1>
</p>

**Contrast Color** gives you the best color that can be used on a background color you specify. 

## Installation
Install the package in your project directory with:
### npm:
```
npm install @tiger-ui/contrast-color
```
### yarn:
```
yarn add @tiger-ui/contrast-color
```

# Examples
## Basic Usage:
```js
import { contrastColor } from '@tiger-ui/contrast-color';

const myColor = '#226be0';

const contrast = contrastColor(myColor);

console.log('contrast color: ', contrast);
```
output:
```js
'#FFFFFF'
```

**Class Usage:**
```js
import ContrastColor from '@tiger-ui/contrast-color';

const myColor = '#226be0';

  const contrast = new ContrastColor(myColor);

  console.log('contrast color: ', contrast.get());
```
output:
```js
'#FFFFFF'
```

## Customizable Usage:
```js
import { contrastColor } from '@tiger-ui/contrast-color';

const myColor1 = '#226be0';
const myColor2 = '#ff9696';

const contrast1 = contrastColor(
  myColor1,
  {
    lightColor: '#eeeeee',
    darkColor: '#0a0202',
  },
);

const contrast2 = contrastColor(
  myColor2,
  {
    lightColor: '#eeeeee',
    darkColor: '#0a0202',
  },
);

console.log('contrast1: ', contrast1);
console.log('contrast2: ', contrast2);
```
output:
```js
'contrast1: #eeeeee'
'contrast2: #0a0202'
```

**Class Usage:**
```js
import ContrastColor from '@tiger-ui/contrast-color';

const myColor1 = '#226be0';
const myColor2 = '#ff9696';

const contrast1 = new ContrastColor(
  myColor1,
  {
    lightColor: '#eeeeee',
    darkColor: '#0a0202',
  },
);

const contrast2 = new ContrastColor(
  myColor2,
  {
    lightColor: '#eeeeee',
    darkColor: '#0a0202',
  },
);

console.log('contrast1: ', contrast1.get());
console.log('contrast2: ', contrast2.get());
```
output:
```js
'contrast1: #eeeeee'
'contrast2: #0a0202'
```

## Practical
Let's make an example on **[React](https://react.dev/)** about **Contrast Color**:
```js
import { contrastColor } from '@tiger-ui/contrast-color';

import Box from '../../components/Box';
import Paragraph from '../../components/Paragraph';

// --- COLORS --- //
const red = ['#FF0000', contrastColor('#FF0000')];
const lime = ['#00FF00', contrastColor('#00FF00')];
const blue = ['#0000FF', contrastColor('#0000FF')];
const yellow = ['#FFFF00', contrastColor('#FFFF00')];
const cyan = ['#00FFFF', contrastColor('#00FFFF')];
const magenta = ['#FF00FF', contrastColor('#FF00FF')];

export default function MyComponent() {
  return (
    <Box display="flex" justifyContent="center" my={10}>
      <Box
        width="200px"
        height="200px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgColor={red[0]}
      >
        <Paragraph color={red[1]}>red</Paragraph>
      </Box>
      <Box
        width="200px"
        height="200px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgColor={lime[0]}
      >
        <Paragraph color={lime[1]}>lime</Paragraph>
      </Box>
      <Box
        width="200px"
        height="200px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgColor={blue[0]}
      >
        <Paragraph color={blue[1]}>blue</Paragraph>
      </Box>
      <Box
        width="200px"
        height="200px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgColor={yellow[0]}
      >
        <Paragraph color={yellow[1]}>yellow</Paragraph>
      </Box>
      <Box
        width="200px"
        height="200px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgColor={cyan[0]}
      >
        <Paragraph color={cyan[1]}>cyan</Paragraph>
      </Box>
      <Box
        width="200px"
        height="200px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgColor={magenta[0]}
      >
        <Paragraph color={magenta[1]}>magenta</Paragraph>
      </Box>
    </Box>
  );
}
```

output:

![image](https://github.com/xenobreach/tiger-ui/assets/92295550/e9ce89ae-4b19-408c-8d1a-672f3548abcd)


As you can see, the text inside each box has adjusted itself to match the background color.


## Special Thanks
This library is adapted from [@busterc](https://github.com/busterc)'s [contrast-color](https://github.com/busterc/contrast-color) library and customized to our needs. We would like to thank @busterc for providing us with the library for the development of this library.
We would like to express our special thanks to the resources we have used in the development of this library, which have been of great help to us:
- https://github.com/busterc/contrast-color
- https://www.npmjs.com/package/contrast-color?activeTab=readme
