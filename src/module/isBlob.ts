export default (dataSource: any): Boolean => {
  const isBlob = typeof dataSource === "object" && dataSource instanceof Blob;
  return isBlob;
};
