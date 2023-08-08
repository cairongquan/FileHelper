export default (dataSource: any): Boolean => {
  const isArrayBuffer = dataSource instanceof ArrayBuffer || dataSource instanceof Uint8Array;
  return isArrayBuffer
};
