/* *************** CONTRAST COLOR *************** */
/*
  A large part of this feature was taken from the contrast-color library
  and the necessary parts were trimmed and added here.
  via: https://github.com/busterc/contrast-color
*/

/** 
 * docs: https://github.com/xenobreach/tiger-ui/tree/master/packages/tiger-ui-contrast-color
*/
export default class ContrastColor {
  private color: string;
  private options: {
    lightColor: string;
    darkColor: string;
    threshold: number;
  } = {
    darkColor: '#000000',
    lightColor: '#FFFFFF',
    threshold: 128,
  };

  constructor(
    color: string,
    options?: { lightColor?: string; darkColor?: string; threshold?: number },
  ) {
    this.color = color;
    this.options = {
      ...this.options,
      ...options,
    };
  }

  public get(): string {
    const darkColor = this.options.darkColor;
    const lightColor = this.options.lightColor;
    const threshold = this.options.threshold;
    const defaultColor = this.options.lightColor;

    const hexChars = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' ];

    let colorArray = String(this.color)
      .toUpperCase()
      .split('')
      .filter(c => hexChars.includes(c));

    switch (colorArray.length) {
      case 3:
      case 4:
        colorArray = colorArray.slice(0, 3).map(c => `${c}${c}`);
        break;
      case 6:
      case 8:
        colorArray = colorArray
          .slice(0, 6)
          .reduce((acc: any, curr: any, n: any, arr: any) => (
            n % 2 ? [ ...acc, `${arr[n - 1]}${curr}`] : acc
        ), []);
        break;
      default:
        return defaultColor;
    }

    const [r, g, b] = colorArray.map(h => parseInt(h, 16));
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;

    return yiq >= threshold ? darkColor : lightColor;
  }
}

/* --- STATIC FEATURE --- */
/** 
 * docs: https://github.com/xenobreach/tiger-ui/tree/master/packages/tiger-ui-contrast-color
*/
export function contrastColor(
  color: string,
  options?: { lightColor?: string; darkColor?: string; threshold?: number },
) {
  return new ContrastColor(
    color,
    options ?? undefined,
  ).get();
}
/* *************** END - CONTRAST COLOR *************** */