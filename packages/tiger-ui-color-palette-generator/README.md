<p align="center">
  <img src="https://github.com/xenobreach/tiger-ui/assets/92295550/dec971fb-64c5-4c5f-ba27-b940556b65fb" alt="Tiger UI logo" height="150" width="150">
  <h1 align="center" style="color: #26dba9">Color Palette Generator</h1>
</p>

**Color Palette Generator** is a handy package that creates dark, light and contrasting colors for your colors. You can also change the intensity of your dark and light colors as you wish.

## Installation
Install the package in your project directory with:
### npm:
```
npm install @tiger-ui/color-palette-generator
```
### yarn:
```
yarn add @tiger-ui/color-palette-generator
```

# Examples
Let's make an example on a [React](https://react.dev/) project:
```tsx
import { Color } from '@tiger-ui/color-palette-generator';

import Box from '../../components/Box';
import Paragraph from '../../components/Paragraph';

export default function MyComponent() {
   const myColors = new Color('#1746d1');

    console.log('main color: ', myColors.main);
    console.log('dark color: ', myColors.dark);
    console.log('light color: ', myColors.light);
    console.log('contrast color: ', myColors.contrast);

    return (
      <Box display="flex" width="100%" justifyContent="center" my={10}>
        <Box
          width="200px"
          height="200px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgColor={myColors.dark}
        >
          <Paragraph color={myColors.contrast}>Darker</Paragraph>
        </Box>
        <Box
          width="200px"
          height="200px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgColor={myColors.main}
        >
          <Paragraph color={myColors.contrast}>Main</Paragraph>
        </Box>
        <Box
          width="200px"
          height="200px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgColor={myColors.light}
        >
          <Paragraph color={myColors.contrast}>Light</Paragraph>
        </Box>
      </Box>
    );
}
```
output:

![image](https://github.com/xenobreach/tiger-ui/assets/92295550/450ea184-d5bb-4218-b134-e751b14d6c41)

```
main color:  #1746d1
dark color:  #1541c3
light color:  #184adf
contrast color:  #ffffff
```

You can change the intensity of the dark and light colors. You can also customize the Contrast color:
```tsx
import { Color } from '@tiger-ui/color-palette-generator';

import Box from '../../components/Box';
import Paragraph from '../../components/Paragraph';

export default function MyComponent() {
    const myColors = new Color(
      '#1746d1',
      {
        darkColorIntensity: 10, // default: 3 (%3)
        lightColorIntensity: 10, // default: 3 (%3)
        contrastDarkValue: '#000a26',
        contrastLightValue: '#c4d3ff',
      },
    );

    console.log('main color: ', myColors.main);
    console.log('dark color: ', myColors.dark);
    console.log('light color: ', myColors.light);
    console.log('contrast color: ', myColors.contrast);

    return (
      <Box display="flex" width="100%" justifyContent="center" my={10}>
        <Box display="flex" key={myColors.main}>
          <Box
            width="200px"
            height="200px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgColor={myColors.dark}
          >
            <Paragraph color={myColors.contrast}>Darker</Paragraph>
          </Box>
          <Box
            width="200px"
            height="200px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgColor={myColors.main}
          >
            <Paragraph color={myColors.contrast}>Main</Paragraph>
          </Box>
          <Box
            width="200px"
            height="200px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgColor={myColors.light}
          >
            <Paragraph color={myColors.contrast}>Light</Paragraph>
          </Box>
        </Box>
      </Box>
    );
}
```
output:

![image2](https://github.com/xenobreach/tiger-ui/assets/92295550/f313259f-7a9d-418a-b5da-43e9b3ca3751)


```
main color:  #1746d1
dark color:  #1236a3
light color:  #3360e9
contrast color:  #c4d3ff
```

# More Examples
```tsx
import { Color } from '@tiger-ui/color-palette-generator';

import Box from '../../components/Box';
import Paragraph from '../../components/Paragraph';

export default function MyComponent() {
    const myColors = [
      new Color('#1746d1'), // blue
      new Color('#d11717'), // red
      new Color('#d1cb17'), // yellow
      new Color('#17d136'), // green
    ]

    return (
      <Box display="flex" justifyContent="center">
        <Box my={10}>
          {myColors.map((color) => (
            <Box display="flex" key={color.main}>
              <Box
                width="200px"
                height="200px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgColor={color.dark}
              >
                <Paragraph color={color.contrast}>Darker</Paragraph>
              </Box>
              <Box
                width="200px"
                height="200px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgColor={color.main}
              >
                <Paragraph color={color.contrast}>Main</Paragraph>
              </Box>
              <Box
                width="200px"
                height="200px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgColor={color.light}
              >
                <Paragraph color={color.contrast}>Light</Paragraph>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    );
}
```

output:

![image3](https://github.com/xenobreach/tiger-ui/assets/92295550/5aed9345-e097-4b26-ba52-27e7be1af5fa)
