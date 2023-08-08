import isBlob from './module/isBlob'
import isFile from './module/isFile'
import turnBlobToUrl from './module/turnBlobToUrl'
import isArrayBuffer from './module/isArrayBuffer'
import getSuffixType from './module/getSuffixType'

import { type FileHelperT, type suffix } from '../types/index'

const stepArray = [blobToUrl, fileToUrl, arrayBufferToUrl]

function blobToUrl(dataSource: any): string | Error {
  if (isBlob(dataSource)) {
    const url = turnBlobToUrl(dataSource)
    return url
  }
  throw Error
}

function fileToUrl(dataSource: any): string | Error {
  if (isFile(dataSource)) {
    const blob = new Blob([dataSource], { type: dataSource.type });
    return blobToUrl(blob)
  }
  throw Error
}

function arrayBufferToUrl(dataSource: any, type?: suffix): string | Error {
  if (isArrayBuffer(dataSource)) {
    const blob = new Blob([dataSource], { type: getSuffixType(type) || '' })
    return blobToUrl(blob)
  }
  throw Error
}

export function fileHelper(option: FileHelperT.FileHelperOption) {
  console.log('target')
  let url: string = ''
  for (let i = 0; i < stepArray.length - 1; i++) {
    try {
      url = stepArray[i](option.of, option.suffix) as string
      break
    } catch (err) {
      continue
    }
  }
  console.log(url, 111)
  return url
}
