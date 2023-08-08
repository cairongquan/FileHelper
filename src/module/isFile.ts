export default (dataSource: any): Boolean => {
  const isFile = typeof dataSource === "object" && dataSource instanceof File;
  return isFile;
};
