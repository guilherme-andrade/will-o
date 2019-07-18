import tinycolor from 'tinycolor2'

export function multiplyDimension(value, multiplier) {
  return toCSSDimension((extractNumber(value) * multiplier), extractDimension(value))
}

export function extractNumber(string) {
  return parseFloat(string);
}

export function extractDimension(string) {
  return string.match(/[a-z]+/)[0];
}

export function toCSSDimension(value, dimension) {
  return value + dimension;
}

export function isLight(color) {
  return tinycolor(color).isLight();
}
