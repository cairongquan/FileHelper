import { suffixMapper } from "../constant";

export default (suffix: keyof typeof suffixMapper | undefined): string | undefined => {
  if (!suffix || suffixMapper[suffix] === undefined) {
    console.warn(`The type ${String(suffix)} is not a supported suffix`)
    return undefined;
  }
  return suffixMapper[suffix];
};
