<p align="center">
  <img src="https://github.com/xenobreach/tiger-ui/assets/92295550/f2d48b2e-6858-41a0-9bb1-0048f52776db" alt="Tiger UI logo" height="150" width="150">
  <h1 align="center" style="color: #26dba9">Tiger UI React</h1>
</p>

Tiger UI React is a CSS-IN-JS library. It leverages ancillary UI tools like [Emotion React](https://github.com/emotion-js/emotion/tree/main) and allows you to easily create stylizable and flexible UI components. Tiger UI React aims to provide you with useful tools to easily create a Design System.

<div align="center">

[![license](https://img.shields.io/badge/license-MIT-orange.svg)](https://github.com/xenobreach/tiger-ui/blob/master/packages/tiger-ui-react/LICENSE)
[![npm](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fxenobreach%2Ftiger-ui%2Fmaster%2Fpackages%2Ftiger-ui-react%2Fpackage.json&query=%24.version&style=flat&label=npm&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40tiger-ui%2Freact
)](https://www.npmjs.com/package/@tiger-ui/react)

</div>

# Installation
Install the package in your project directory with:
### npm:
```
npm install @tiger-ui/react
```
### yarn:
```
yarn add @tiger-ui/react
```

# Docs
## Introduction
Tiger UI React is a React.JS component tool that allows you to write your stylized components in a fast, practical and readable way. It offers powerful CSS-IN-JS support using the [Emotion React](https://emotion.sh/docs/introduction) library in its infrastructure. This library aims to make it easier for you to create your own design system.

## Table of Contents
- [Getting Started](#getting-started)
- [Element Props](#element-props)
  - [Responsive Prop Value](#responsive-prop-value)
- [Extending Elements](#extending-elements)
- [Defaults Attributes / Props](#defaults-attributes--props)
- [Children Content](#children-content)
- [Theming](#theming)
  - [Create Theme](#create-theme)
  - [Default Theme Options](#default-theme-options)
  - [Color System](#color-system)
  - [Typescript - Theme Type Declaration](#typescript---theme-type-declaration)
- [CSSX / Custom Styling](#cssx--custom-styling)

## Getting Started
The component logic on `tiger-ui/react` is based on html elements. The simplest way to create a customizable element is as follows:
```tsx
import { createElement } from '@tiger-ui/react'

const Container = createElement('div')({
  style: {
    padding: '6rem',
  },
});

const Button = createElement('button')({
  style: {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    padding: '0.7rem 2rem',
    borderRadius: '0.6rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    ':hover': {
      backgroundColor: 'darkgreen',
    },
  },
});

export default function Page() {
  return (
    <Container>
      <Button>Click</Button>
    </Container>
  )
}
```

Output:

![image](https://github.com/xenobreach/tiger-ui/assets/92295550/8f125269-1017-4026-9ac8-618bfcf83ac8)

## Element Props
You can add props that change the style state of the elements you create. You can use this feature in two different ways:

<details><summary><b>Way 1</b></summary>
  
  ```tsx
  import { createElement } from '@tiger-ui/react'
  
  const Container = createElement('div')({
    style: {
      padding: '6rem',
    },
  });
  
  interface ButtonProps {
    variant: 'contained' | 'outlined';
  }
  
  const Button = createElement('button')<ButtonProps>({
    style: {
      padding: '0.7rem 2rem',
      borderRadius: '0.6rem',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    props: {
      variant: {
        contained: {
          backgroundColor: 'green',
          color: 'white',
          border: 'none',
          ':hover': {
            backgroundColor: 'darkgreen',
          },
        },
        outlined: {
          backgroundColor: 'transparent',
          color: 'green',
          border: 'solid 1px green',
        },
      },
    },
  });
  
  export default function Page() {
    return (
      <Container>
        <Button variant="outlined">Click</Button>
      </Container>
    )
  }
  ```
  
  Output:
  
  ![image](https://github.com/xenobreach/tiger-ui/assets/92295550/81d83a3c-4f71-49f5-aeae-4df754c5679f)
</details>

<details><summary><b>Way 2</b></summary>
  
  ```tsx
  import { createElement } from '@tiger-ui/react'
  
  const Container = createElement('div')({
    style: {
      padding: '6rem',
    },
  });
  
  interface ButtonProps {
    variant: 'contained' | 'outlined';
  }
  
  const Button = createElement('button')<ButtonProps>({
    style: {
      padding: '0.7rem 2rem',
      borderRadius: '0.6rem',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    props: {
      variant: (value /* prop value */) => {
        // variant === outlined :
        if (value === 'outlined') return {
          backgroundColor: 'transparent',
          color: 'green',
          border: 'solid 1px green',
        }
  
        // variant === contained :
        return {
          backgroundColor: 'green',
          color: 'white',
          border: 'none',
          ':hover': {
            backgroundColor: 'darkgreen',
          },
        };
      },
    },
  });
  
  export default function Page() {
    return (
      <Container>
        <Button variant="outlined">Click</Button>
      </Container>
    )
  }
  ```
</details>

Both ways used above give the same result. Depending on your use case, you can use either method.

### Responsive Prop Value

It is also possible to assign values responsively while using the props you added.

<details><summary><b>Code</b></summary>

  ```tsx
  import { createElement } from '@tiger-ui/react'
  
  const Wrapper = createElement('div')({
    style: {
      display: 'flex',
      justifyContent: 'center',
      padding: '6rem',
    },
  });
  
  interface ButtonProps {
    variant: 'contained' | 'outlined';
  }
  
  const Button = createElement('button')<ButtonProps>({
    style: {
      padding: '0.7rem 2rem',
      borderRadius: '0.6rem',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    props: {
      variant: {
        outlined: {
          backgroundColor: 'transparent',
          color: 'green',
          border: 'solid 1px green',
        },
        contained: {
          backgroundColor: 'green',
          color: 'white',
          border: 'none',
        }
      },
    },
  });
  
  export default function Page() {
    return (
      <Wrapper>
        <Button
          variant={{
            xs: 'contained',
            lg: 'outlined',
          }}
        >
          Click
        </Button>
      </Wrapper>
    )
  }
  ```

  output:

  ![brave_9QCFOoBspy](https://github.com/xenobreach/tiger-ui/assets/92295550/f6cdc9ba-31ed-4070-9286-6d3739559737)

</details>

Note that the responsive values here are determined by the breakpoints in your theme. Breakpoints in the theme system use media queries in css. If you want to customize these media queries, you can update the breakpoints values in your theme according to yourself.

For more information about the theme, [check here](#theming).

## Extending Elements
You can reuse a previously created element by wrapping it with `createElement` and create a new element that uses the properties of that element. This method will pass the element properties to the new element and allow you to add new properties to it.

<details><summary><b>Example Code</b></summary>
  
  ```tsx
  import { createElement } from '@tiger-ui/react';
  
  const Container = createElement('div')({
    style: {
      padding: '6rem',
    },
  });
  
  const Button = createElement('button')({
    style: {
      padding: '0.7rem 2rem',
      borderRadius: '0.6rem',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '15px',
      backgroundColor: 'green',
      color: 'white',
      border: 'none',
    },
  });
  
  const OutlinedButton = createElement(Button)({
    style: {
      backgroundColor: 'transparent',
      color: 'green',
      border: 'solid 1px green',
    },
  });
  
  export default function Page() {
    return (
      <Container>
        <Button>Default</Button>
        <OutlinedButton>Outlined</OutlinedButton>
      </Container>
    )
  }
  ```
  
  output:
  
  ![image](https://github.com/xenobreach/tiger-ui/assets/92295550/0c9d66df-72ef-4dd5-b6fd-b244a9aa0858)
</details>

In some cases you may want to change the html tag of an element with the same properties. In this case you can use the as property.
<details><summary><b>As Prop</b></summary>
  
  ```tsx
  import { createElement } from '@tiger-ui/react'
  
  const Container = createElement('div')({
    style: {
      padding: '6rem',
    },
  });
  
  const Button = createElement('button')({
    style: {
      padding: '0.7rem 2rem',
      borderRadius: '0.6rem',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '15px',
      backgroundColor: 'green',
      color: 'white',
      border: 'none',
    },
  });
  
  export default function Page() {
    return (
      <Container>
        <Button cssx={{ marginRight: '1rem' }}>Default</Button>
        <Button as="a" href="/">Link</Button>
      </Container>
    )
  }
  ```
  
  output:
  
  ![image](https://github.com/xenobreach/tiger-ui/assets/92295550/93bba487-dcfd-445a-9cd6-a8a90d181e0c)
</details>

## Defaults Attributes / Props
You can use the 'defaults' value when you want to define default attributes for the elements you create.

<details><summary><b>Default Attribute Value</b></summary>
  
  ```tsx
  import { createElement } from '@tiger-ui/react'
  
  const Container = createElement('div')({
    style: {
      padding: '6rem',
    },
  });
  
  const Input = createElement('input')({
    style: {
      backgroundColor: 'green',
      border: '1px solid white',
      borderRadius: '5px',
      padding: '0.5rem',
      color: 'white',
    },
    defaults: {
      element: {
        type: 'password',
      },
    },
  });
  
  export default function Page() {
    return (
      <Container>
        <Input />
      </Container>
    )
  }
  ```
</details>

You can also use this feature for style props that you define yourself:

<details><summary><b>Default Props Value</b></summary>

  ```tsx
  import { createElement } from '@tiger-ui/react'
  
  const Container = createElement('div')({
    style: {
      padding: '6rem',
    },
  });
  
  interface InputProps {
    size?: 'small' | 'medium'
  }
  
  const Input = createElement('input')<InputProps>({
    style: {
      backgroundColor: 'green',
      border: '1px solid white',
      borderRadius: '5px',
      color: 'white',
      '::placeholder': {
        color: 'white',
      },
    },
    props: {
      size: {
        small: {
          padding: '0.5rem',
        },
        medium: {
          padding: '0.8rem',
        },
      },
    },
    defaults: {
      element: {
        type: 'password',
      },
      custom: {
        size: 'medium',
      },
    },
  });
  
  export default function Page() {
    return (
      <Container>
        <Input placeholder="default input" cssx={{ marginRight: '1rem' }} />
        <Input placeholder="small input" size="small" />
      </Container>
    )
  }
  ```
  
  output:
  
  ![image](https://github.com/xenobreach/tiger-ui/assets/92295550/f1a8cf94-ee59-4d6d-bb09-12bcd1b4872d)
</details>

## Children Content
You can add a children content inside the elements you created. This children content will import all the props and attributes used in your element as in a React Component Props. This feature allows the element you create to have a more flexible UI structure.

<details><summary><b>Example Code</b></summary>

  ```tsx
  import { createElement } from '@tiger-ui/react'
  
  const Container = createElement('div')({
    style: {
      padding: '6rem',
    },
  });
  
  interface LinkProps {
    color?: string;
  }
  
  const Link = createElement('a')<LinkProps>({
    style: {
      backgroundColor: 'green',
      padding: '0.5rem',
      borderRadius: '5px',
    },
    props: {
      color: (propValue) => ({
        color: propValue,
      }),
    },
    Children: ({ href, color }) => {
      return (
        <span>
          Link: {href} - Color: {color}
        </span>
      );
    },  
  });
  
  export default function Page() {
    return (
      <Container>
        <Link href="/home" color="white" />
      </Container>
    )
  }
  ```
  
  output:
  
  ![image](https://github.com/xenobreach/tiger-ui/assets/92295550/10008a83-99e8-4737-a4c6-a7e1fdae44dd)
  
  html output:
  
  ![image](https://github.com/xenobreach/tiger-ui/assets/92295550/fc8a5927-0dad-4def-8090-60e83c1f6d3e)
</details>

## Theming
Tiger UI React library provides you with a theme structure and you can update this theme according to your own wishes. This theme structure allows you to style your UI components in a more organized way. This method is not mandatory because Tiger UI provides you with a default theme. However, you may want to customize it according to your own corporate identity or for any other reason.

### Create Theme
To create a customizable theme, you must first create a theme with `TigerTheme` and wrap your application with ThemeProvider.

#### /lib/ThemeRegistery.tsx
<details><summary><b>Code</b></summary>

  ```tsx
  'use client'
  
  import { ThemeProvider, TigerTheme } from "@tiger-ui/react";
  
  const theme = new TigerTheme({
      themeName: 'my-theme',
      colors: {
        base: {
          primary: {
            main: '#26dbb0',
          },
        },
        background: {
          default: '#1c1c1c',
        }
      },
  });
  
  export default function ThemeRegistery({ children }: { children: React.ReactNode }) {
    return (
      <ThemeProvider
        theme={theme}
        globalStyle={{
          'body': {
            backgroundColor: theme.tokens.colors.background.default,
            fontFamily: '"Poppins", sans-serif',
            margin: 0,
          },
        }}
      >
        {children}
      </ThemeProvider>
    );
  }
  ```
</details>

You can also define a global style in this theme wrapper.
  
The next step is to wrap your app with the theme component you created.
  
#### /app/layout.tsx (Next JS App)
<details><summary><b>Code</b></summary>

   ```tsx
  import { Metadata } from "next";
  
  import ThemeRegistery from "../lib/ThemeRegistery";
  
  export const metadata: Metadata = {
    title: "Tiger UI - Next JS App",
    description: "Tiger UI Next JS App",
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }): JSX.Element {
    return (
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        </head>
        <body>
          <ThemeRegistery>
            {children}
          </ThemeRegistery>
        </body>
      </html>
    );
  }
  ```
</details>
  
Now you are ready to use your theme. Let's make an example:

<details><summary><b>Code</b></summary>
  
   ```tsx
  import { createElement } from '@tiger-ui/react'
  
  const Container = createElement('div')({
    style: {
      padding: '6rem',
    },
  });
  
  interface LinkProps {
    size?: 'small' | 'medium';
  }
  
  const Link = createElement('a')<LinkProps>({
    style: ({ theme }) => ({
      backgroundColor: theme.colors.base.primary.main,
      color: theme.colors.base.primary.contrast,
      transition: `opacity ${theme.transitions.duration.mid} ${theme.transitions.easing.ease}`,
      display: 'inline-block',
      ':hover': {
        opacity: theme.opacities.values.lg,
      },
    }),
    props: {
      size: {
        small: ({ theme }) => ({
          borderRadius: theme.radius.values.sm,
          padding: '0.5rem',
        }),
        medium: ({ theme }) => ({
          borderRadius: theme.radius.values.xl,
          padding: '0.8rem',
        }),
      },
    },
  });
  
  export default function Page() {
    return (
      <Container>
        <Link href="/" size="small" cssx={{ marginRight: '1rem' }}>
          Click Here
        </Link>
  
        <Link href="/" size="medium">
          Click Here
        </Link>
      </Container>
    )
  }
  ```
  
  output:
  
  ![image](https://github.com/xenobreach/tiger-ui/assets/92295550/8bff6aae-ec3f-43bb-a4bb-2200772f5ef3)
</details>

### Default Theme Options
Even if you do not create a theme, there is a predefined theme by default.

You can review the default theme here:

<details><summary><b>Tokens</b></summary>
  
  ```ts
  {
    themeName: "",
    shadows: {
      values: {
        none: "none",
        xs: "0 0 45px rgba(0, 0, 0, 0.1)",
        sm: "0 0 45px rgba(0, 0, 0, 0.3)",
        md: "0 0 45px rgba(0, 0, 0, 0.5)",
        lg: "0 0 45px rgba(0, 0, 0, 0.8)",
        xl: "0 0 45px rgba(0, 0, 0, 1)"
      }
    },
    breakpoints: {
      keys: [
          "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "xxl"
      ],
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1400
      },
      unit: "px"
    },
    colors: {
      common: {
        black: "#000000",
        white: "#ffffff"
      },
      grey: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121"
      },
      base: {
        primary: {
          main: "#26dbb0",
          dark: "#22cfa7",
          light: "#33ddb5",
          contrast: "#000000"
        },
        secondary: {
          main: "#27d86e",
          dark: "#25cb67",
          light: "#34da77",
          contrast: "#000000"
        },
        error: {
          main: "#d32f2f",
          dark: "#c82a2a",
          light: "#d63c3c",
          contrast: "#ffffff"
        },
        info: {
          main: "#0288d1",
          dark: "#027fc2",
          light: "#0293e0",
          contrast: "#ffffff"
        },
        warning: {
          main: "#ed6c02",
          dark: "#de6502",
          light: "#fc7302",
          contrast: "#000000"
        }
      },
      baseColorsOptions: {},
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)"
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: {
        default: "#ffffff",
        layer: "#E2E2E2"
      },
      actions: {
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)"
      }
    },
    radius: {
      values: {
        none: "0px",
        xs: "2px",
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "10px",
        xxl: "12px",
        full: "50px"
      }
    },
    fonts: {
      roboto: "Roboto",
      poppins: "Poppins",
      montserrat: "Montserrat"
    },
    opacities: {
      values: {
        hidden: 0,
        xs: 0.15,
        sm: 0.3,
        md: 0.5,
        lg: 0.7,
        xl: 0.85,
        visible: 1,
        disabled: 0.5
      }
    },
    typography: {
      h1: {
        fontSize: "48px",
        fontWeight: 500,
        lineHeight: 1.25
      },
      h2: {
        fontSize: "36px",
        fontWeight: 500,
        lineHeight: 1.3
      },
      h3: {
        fontSize: "30px",
        fontWeight: 500,
        lineHeight: 1.375
      },
      h4: {
        fontSize: "24px",
        fontWeight: 500,
        lineHeight: 1.375
      },
      h5: {
        fontSize: "20px",
        fontWeight: 500,
        lineHeight: 1.375
      },
      h6: {
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: 1.625
      },
      paragraph: {
        fontSize: "15px",
        fontWeight: 300,
        lineHeight: 1.3
      }
    },
    transitions: {
      duration: {
          slow: "0.7s",
          mid: "0.3s",
          fast: "0.1s"
      },
      easing: {
          ease: "ease",
          easeIn: "ease-in",
          easeInOut: "ease-in-out",
          easeOut: "ease-out",
          moment: "cubic-bezier(0, 1.63, 0.56, 1.85)"
      }
    }
  }
  ```
</details>

### Color System
You may also need to use dark, light and contrast colors of the colors you will use in the theme from time to time. Especially when developing a design system, for example, you may want a button you have created to take on a darker color when hovered over.

When you create your theme, the dark, light and contrast colors of all the `main` colors you add to `colors.base` are created automatically. You can customize these colors yourself if you wish.


<details><summary><b>Code</b></summary>

  ```ts
  const theme = new TigerTheme({
    themeName: 'my-theme',
    colors: {
      base: {
        primary: {
          main: '#26dbb0',
          contrast: '#000000',
          dark: '#22cfa7',
          light: '#33ddb5',
        },
        secondary: {
          main: '#27d86e',
          contrast: '#000000',
          dark: '#25cb67',
          light: '#34da77',
        },
      },
    },
  });
  ```
</details>

You can follow a path like below to use the colors in the theme you created:

<details><summary><b>Code</b></summary>
  
  ```tsx
  const Button = createElement('button')({
    style: ({ theme }) => ({
      backgroundColor: theme.colors.base.primary.main,
      color: theme.colors.base.primary.contrast,
      padding: '1rem 1.3rem',
      border: 'none',
      borderRadius: '5px',
      fontSize: '15px',
      fontWeight: 'bold',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: theme.colors.base.primary.dark,
      },
    }),
  });
  ```

  output:

  ![brave_6TkUsZJojL](https://github.com/xenobreach/tiger-ui/assets/92295550/b1679e1a-cff9-45a2-bf26-400b1e72cbc3)

</details>

Also, when defining your colors, if you want other color types to be created by default, just define the `main` color:

<details><summary><b>Code</b></summary>
  
  ```ts
  const theme = new TigerTheme({
    themeName: 'my-theme',
    colors: {
      base: {
        primary: {
          main: '#26dbb0',
        },
        secondary: {
          main: '#27d86e',
        },
      },
    },
  });
  ```

  console output:
  
  ![image](https://github.com/xenobreach/tiger-ui/assets/92295550/1d9be135-ddf0-4286-94bd-f37b62bdafa1)

</details>

We have also provided some options that allow you to customize the dark, light and contrast values of the colors. For example, you can adjust the darkness of your dark color. Or if your contrast color is close to white, you can also customize this white color.

You can use the links below to learn more about `@tiger-ui/color-palette-generator` and `@tiger-ui/contrast-color`:
- [@tiger-ui/color-palette-generator](https://github.com/xenobreach/tiger-ui/tree/master/packages/tiger-ui-color-palette-generator)
- [@tiger-ui/contrast-color](https://github.com/xenobreach/tiger-ui/tree/master/packages/tiger-ui-contrast-color)

<details><summary><b>Example Code</b></summary>
  
  ```tsx
  const theme = new TigerTheme({
    themeName: 'my-theme',
    colors: {
      base: {
        primary: {
          main: '#26dbb0',
        },
        secondary: {
          main: '#27d86e',
        },
      },
      baseColorsOptions: {
        primary: {
          darkColorIntensity: 20, // %20 (default: %3)
          contrastDarkValue: '#022d23',
        },
      },
    },
  });
  ```

  output:
  
  ![brave_LG6ekduKYC](https://github.com/xenobreach/tiger-ui/assets/92295550/9330db79-55da-45c9-8799-717e502984ae)

</details>

### Typescript - Theme Type Declaration

 When creating a theme, you may want to consider adding your own values in addition to the default values. 

If you are working in a typescript project, to add your own values you need to declare it to the default theme.

The following section contains the type values of the default theme. You can update the theme key you want to update in your project according to the type values here:

<details><summary><b>Default Theme Types</b></summary>

  ```ts
  import type { RequiredKeyOnly } from '@tiger-ui/utils'
  import type { Breakpoints, BreakpointsOptions } from './createBreakpoints'
  
  // --- SHADOW --- //
  export interface ShadowsValues {
    none: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  
  export interface Shadows {
    values: ShadowsValues;
  };
  
  // --- COLORS --- //
  // - Common Colors
  export interface CommonColors {
    black: string;
    white: string;
  };
  
  // - Grey Colors
  export interface GreyColors {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  
  // - Text Colors 
  export interface TextColors {
    primary: string;
    secondary: string;
    disabled: string;
  };
  
  // - Background Colors
  export interface BackgroundColors {
    default: string;
    layer: string;
  };
  
  // - Actions Colors
  export interface ActionsColors {
    disabled: string;
    disabledBackground: string;
  }
  
  // - Base Colors
  export interface BaseColorsTypes {
    main: string;
    dark: string;
    light: string;
    contrast: string;
  }
  export interface BaseColors {
    primary: BaseColorsTypes;
    secondary: BaseColorsTypes;
    error: BaseColorsTypes;
    warning: BaseColorsTypes;
    info: BaseColorsTypes;
  }
  
  // --- RADIUS --- //
  // - Values
  export interface RadiusValues {
    none: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    full: string;
  };
  
  export interface Radius {
    values: RadiusValues;
  }
  
  // --- FONTS --- //
  export interface Fonts {
    [key: string]: string;
  }
  
  // --- OPACITIES --- //
  // - Values
  export interface OpacitiesValues {
    hidden: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    visible: number;
    disabled: number;
  }
  
  export interface Opacities {
    values: OpacitiesValues;
  }
  
  // --- TYPOGRAPHY --- //
  export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'paragraph';
  export type TypographiesVariants = Record<
    TypographyVariant,
    {
      fontSize: string;
      fontWeight: number;
      lineHeight: number;
    }
  >
  
  export interface Typographies extends TypographiesVariants {}
  
  // --- TRANSITIONS --- //
  // - Durations
  export interface TransitionsDurations {
    slow: string;
    mid: string;
    fast: string;
  }
  
  // - Easing
  export interface TransitionsEasing {
    easeInOut: string;
    easeOut: string;
    easeIn: string;
    ease: string;
    moment: string;
  }
  
  export interface Transitions {
    duration: TransitionsDurations;
    easing: TransitionsEasing;
  }
  
  // --- THEME --- //
  export interface Theme {
    themeName: string;
    shadows: Shadows;
    breakpoints: Breakpoints;
    colors: {
      common: CommonColors;
      grey: GreyColors;
      text: TextColors;
      divider: string;
      background: BackgroundColors;
      actions: ActionsColors;
      base: BaseColors;
    };
    radius: Radius;
    fonts: Fonts;
    opacities: Opacities;
    typography: Typographies;
    transitions: Transitions;
  };
  
  /**
   * Theme values entered by the user.
  */
  export interface ThemeOptions {
    themeName?: string;
    shadows?: Shadows;
    breakpoints?: BreakpointsOptions;
    colors?: Partial<{
      common: Partial<CommonColors>;
      grey: Partial<GreyColors>;
      text: Partial<TextColors>;
      divider: string;
      background: Partial<BackgroundColors>;
      actions: Partial<ActionsColors>;
      base:
        Partial<Record<keyof BaseColors, RequiredKeyOnly<Partial<BaseColorsTypes>, 'main'>>>
        | Record<string, RequiredKeyOnly<Partial<BaseColorsTypes>, 'main'>>;
    }>;
    radius?: Radius;
    fonts?: Fonts;
    opacities?: Opacities;
    typography?: Typographies;
    transitions?: Transitions;
  }
  ```
</details>

For example, let's add our own custom color to the base colors in our project:

#### tiger-ui.d.ts
```ts
import '@tiger-ui/react';

import { BaseColorsTypes } from '@tiger-ui/react';

declare module '@tiger-ui/react' {
  export interface BaseColors {
    apple: BaseColorsTypes;
  }
}
```
 
Now, when creating a theme, we can add our own color accordingly to the type control.

![image](https://github.com/xenobreach/tiger-ui/assets/92295550/15fe1a6c-2384-425c-bddf-0dad8d357aae)


<details><summary><b>Code</b></summary>

  ```tsx
  import { ThemeProvider, TigerTheme } from "@tiger-ui/react";
  
  const theme = new TigerTheme({
      themeName: 'my-theme',
      colors: {
        base: {
          primary: {
            main: '#26dbb0',
          },
          apple: {
            main: '#f02416'
          },
        },
        background: {
          default: '#1c1c1c',
        }
      },
  });
  
  export default function ThemeRegistery({ children }: { children: React.ReactNode }) {
    return (
      <ThemeProvider
        theme={theme}
        globalStyle={{
          'body': {
            backgroundColor: theme.colors.background.default,
            fontFamily: '"Poppins", sans-serif',
            margin: 0,
          },
        }}
      >
        {children}
      </ThemeProvider>
    );
  }
  ```
</details>

## CSSX / Custom Styling
Every element you create comes with a cssx prop defined by default. This prop allows you to quickly define css definitions on the JSX element.

This style object also supports css properties like `:hover`, `:focus`, `:disabled`, `:active`. 

<details><summary><b>Code</b></summary>
  
  ```tsx
  import { createElement } from '@tiger-ui/react'
  
  const Container = createElement('div')({
    style: {
      padding: '6rem',
    },
  });
  
  interface LinkProps {
    color?: string;
  }
  
  const Link = createElement('a')<LinkProps>({
    style: {
      backgroundColor: 'green',
      padding: '0.5rem',
      borderRadius: '5px',
      display: 'inline-block'
    },
    props: {
      color: (propValue) => ({
        color: propValue,
      }),
    },
  });
  
  export default function Page() {
    return (
      <Container>
        <Link
          href="/"
          color="white"
          cssx={{
            marginRight: '1rem',
            cursor: 'default',
            ':hover': {
              transform: 'scale(1.3)',
            },
          }}
        >
          Link 1
        </Link>
  
        <Link
          href="/"
          color="white"
        >
          Link 2
        </Link>
      </Container>
    )
  }
  ```
  output:
  
  ![image](https://github.com/xenobreach/tiger-ui/assets/92295550/cc024b73-e0be-4c27-bc3d-ceaa0cd4190d)
</details>

You can also access the current theme values with a parameter by giving a callback value.

<details><summary><b>Code</b></summary>

  ```tsx
  import { createElement } from '@tiger-ui/react'
  
  const Container = createElement('div')({
    style: {
      padding: '6rem',
    },
  });
  
  const Div = createElement('div')({});
  
  export default function Page() {
    return (
      <Container>
        <Div
          cssx={(theme) => ({
            backgroundColor: theme.colors.base.primary.main,
            fontSize: theme.typography.h5.fontSize,
            borderRadius: theme.radius.values.md,
            padding: '0.7rem 1rem',
          })}
        >
          Hello World
        </Div>
      </Container>
    )
  }
  ```

  output:

  ![image](https://github.com/xenobreach/tiger-ui/assets/92295550/a2071210-6481-463d-8b38-a152d73e36f5)
</details>