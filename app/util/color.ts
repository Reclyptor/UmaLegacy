import tinycolor from "tinycolor2";

export const toRGBA = (hex: string, alpha?: number): string => {
  return tinycolor(hex).setAlpha(alpha || 1).toRgbString();
};