export default (blob: Blob): string => {
  const blobUrl = URL.createObjectURL(blob)
  return blobUrl;
}
