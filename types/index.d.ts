import { suffixMapper } from "../src/constant"

export type suffix = keyof typeof suffixMapper

declare module FileHelperT {
  export interface FileHelperOption {
    of: any,
    suffix: suffix
  }
}
