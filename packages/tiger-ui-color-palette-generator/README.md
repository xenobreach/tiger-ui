<p align="center">
  <img src="https://github.com/xenobreach/tiger-ui/assets/92295550/f2d48b2e-6858-41a0-9bb1-0048f52776db" alt="Tiger UI logo" height="150" width="150">
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

function MyComponent() {
   const myColors = new Color('#1746d1');

    console.log('main color: ', myColors.main);
    console.log('dark color: ', myColors.dark);
    console.log('light color: ', myColors.light);
    console.log('contrast color: ', myColors.contrast);

    return (
      <Box my={10}>
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

![0bfd8ede-946b-49b9-921c-e6137f6dccb8](https://github.com/xenobreach/tiger-ui/assets/92295550/107fdc44-0cd0-4f1d-9673-d8fafb526095)

```
main color:  #1746d1
dark color:  #1541c3
light color:  #184adf
contrast color:  #ffffff
```

You can change the intensity of the dark and light colors. You can also customize the Contrast color:
```tsx
import { Color } from '@tiger-ui/color-palette-generator';

function MyComponent() {
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
      <Box my={10}>
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

![c0508a22-6438-4418-834e-9121ed9594ad](https://github.com/xenobreach/tiger-ui/assets/92295550/5bcc7971-b8c8-4ece-9dfe-9d287259be5b)


```
main color:  #1746d1
dark color:  #1236a3
light color:  #3360e9
contrast color:  #c4d3ff
```

# More Examples
```tsx
import { Color } from '@tiger-ui/color-palette-generator';

function MyComponent() {
    const myColors = [
      new Color('#1746d1'), // blue
      new Color('#d11717'), // red
      new Color('#d1cb17'), // yellow
      new Color('#17d136'), // green
    ]

    return (
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
    );
}
```

output:

![c0508a22-6438-4418-834e-9121ed9594ad](https://github.com/xenobreach/tiger-ui/assets/92295550/70781422-c967-437d-a1af-27702b82794e)
