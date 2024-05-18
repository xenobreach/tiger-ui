import ColorConverter from "@tiger-ui/color-converter";
import { contrastColor } from "@tiger-ui/contrast-color"

/* *************** COLOR *************** */
const {
  rgbaToHslaCodes,
  rgbaToRgbaCodes,
  rgbToHslCodes,
  rgbToRgbCodes,
  hslaToRgbaCodes,
  hexToHslCodes,
  rgbToHex,
} = ColorConverter;

export type ColorPalette = {
  main: string;
  light?: string;
  dark?: string;
  contrast?: string;
};

export type ColorOptions = {
  /**
  * Intensity value in light variation.
  * 
  * default value: 3 (%3)
  * 
  * range: between [0, 100]
  */
  lightColorIntensity?: number;
  /**
  * Intensity value in dark variation.
  * 
  * default value: 3 (%3)
  * 
  * range: between [0, 100]
  */
  darkColorIntensity?: number;
  /**
   * Determines the color to return when the contrast color is close to dark.
  */
  contrastDarkValue?: string,
  /**
   * Determines the color to return when the contrast color is close to light.
  */
  contrastLightValue?: string,
  contrastThresholdValue?: number;
};

export class Color {
  private mainColor: string = '';
  private lightColor: string | undefined;
  private darkColor: string | undefined;
  private contrastColor: string | undefined;

  private options: Required<ColorOptions>;

  private defaultOptions: Required<ColorOptions> = {
    lightColorIntensity: 3, // %3
    darkColorIntensity: 3, // %3
    contrastDarkValue: '#000000', // default: dark
    contrastLightValue: '#ffffff', // default: white
    contrastThresholdValue: 128,
  }

  /**
   * @param colorPalette - 'hex' | 'rgb' | 'rgba' | { main: string; light?: string; dark?: string; contrast?: string } 
  */
  constructor(colorPalette: ColorPalette | string, options?: ColorOptions) {
    if (options)
      this.options = {
        ...this.defaultOptions,
        ...options,
      };
    else this.options = this.defaultOptions;

    if (typeof colorPalette === 'string') {
      this.mainColor = colorPalette;
    }

    if (typeof colorPalette === 'object') {
      this.mainColor = colorPalette.main;
      this.lightColor = colorPalette.light;
      this.darkColor = colorPalette.dark;
      this.contrastColor = colorPalette.contrast;
    }
  }

  /* ------ GETTER METHODS ------ */
  public get main(): string {
    return this.mainColor;
  }

  public get dark(): string {
    if (this.darkColor) return this.darkColor;

    const darkColorLightness = this.options.darkColorIntensity ?? this.defaultOptions.darkColorIntensity;

    return this.lightnessSelective(
      darkColorLightness, /* x% */
      'subtract',
    );
  }

  public get light(): string {
    if (this.lightColor) return this.lightColor;

    const lightColorLightness = this.options.lightColorIntensity ?? this.defaultOptions.lightColorIntensity;

    return this.lightnessSelective(
      lightColorLightness, /* x% */
      'add',
    );
  }

  public get contrast(): string {
    if (this.contrastColor) return this.contrastColor;

    const { contrastDarkValue, contrastLightValue, contrastThresholdValue } = this.options;

    return contrastColor(
      this.mainColor,
      {
        darkColor: contrastDarkValue,
        lightColor: contrastLightValue,
        threshold: contrastThresholdValue,
      },
    );
  }

  public get colorOptions() {
    return this.options;
  }
  /* ------ END - GETTER METHODS ------ */

  /* ------ PRIVATE HELPER METHODS ------ */
  private getColorType(color: string): 'hex' | 'rgb' | 'rgba' | undefined {
    let type: 'hex' | 'rgb' | 'rgba' | undefined = undefined;

    if (color.startsWith('#') && color.length <= 7 && color.length >= 4) {
      type = 'hex';
    }

    if (color.startsWith('rgb')) {
      type = 'rgb';
    }

    if (color.startsWith('rgba')) {
      type = 'rgba';
    }
    
    return type;
  }

  /**
   * 
   * @param lightness (in percent) - example: 5 (5%)
   * @param operator - 'add' | 'subtract' | 'set'
   * 
   * OPERATORS: 
   * Sets what action the lightness value will be subjected to.
   * - set: sets lightness to typed percentage.
   *
   * - add: adds the lightness value of the color.
   * Example:
   * color: hsl(0, 100%, 50%)
   * color after added lightness: hsl(0, 100%, 55%) (5% applied)
   *
   * - subtract: reduces the lightness value of the color
   * Example:
   * color: hsl(0, 100%, 50%)
   * color after lightness reduction: hsl(0, 100%, 45%) (5% applied)
  */
  private lightnessSelective(lightness: number, operator: 'add' | 'subtract' | 'set'): string {
    // color values
    const color = this.main;
    const colorType = this.getColorType(color);

    // value to return
    let finalColor: string = '';

    let hsl: { h: number; s: number; l: number; a?: number } = {
      h: 0,
      s: 0,
      l: 0,
      a: 1,
    };

    // check color type
    if (colorType === 'hex') {
      hsl = hexToHslCodes(color);
    }
    if (colorType === 'rgb') {
      const rgb = rgbToRgbCodes(color);
      hsl = rgbToHslCodes(rgb.r, rgb.g, rgb.b);
    };
    if (colorType === 'rgba') {
      const rgba = rgbaToRgbaCodes(color);
      hsl = rgbaToHslaCodes(rgba.r, rgba.g, rgba.b, rgba.a);
    }

    // lightness values
    // The lightness range is between 100 and 0. The maximum value should be 100.
    const lightnessMax = 100;
    // The lightness range is between 100 and 0. The minimum value should be 0.
    const lightnessMin = 0;

    // get hsl(a) values
    const { h, s, l, a } = hsl;

    const lValue = (() => {
      let result: number = 0;

      if (operator === 'add') {
        const value = l + lightness; /* lightness + %x */

        result = value < lightnessMax ? value : lightnessMax;
      }

      if (operator === 'subtract') {
        const value = l - lightness /* lightness - %x */;

        result = value > lightnessMin ? value : lightnessMin;
      }

      if (operator === 'set') {
        if (lightness > lightnessMax) result = lightnessMax;
        else if (lightness < lightnessMin) result = lightnessMin;
        else result = lightness;
      }

      return result;
    })();

    const colorRgba = hslaToRgbaCodes(
      h,
      s,
      lValue,
      a ?? 1,
    );

    if (colorType === 'hex') {
      finalColor = rgbToHex(colorRgba.r, colorRgba.g, colorRgba.b);
    }
    if (colorType === 'rgb') {
      finalColor = 'rgb(' + colorRgba.r + ',' + colorRgba.g + ',' + colorRgba.b + ')';
    }
    if (colorType === 'rgba') {
      finalColor = 'rgba(' + colorRgba.r + ', ' + colorRgba.g + ', ' + colorRgba.b + ', ' + colorRgba.a + ')';
    }

    return finalColor;
  }
  /* ------ END - PRIVATE HELPER METHODS ------ */
}
/* *************** END - COLOR *************** */
