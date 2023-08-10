export default class FileExample {
  url: string | null;
  constructor(blobUrl: string) {
    this.url = blobUrl
  }
  remove() {
    this.url && window.URL.revokeObjectURL(this.url);
  }
  download(fileName?: string) {
    const downLoadLinkDom = document.createElement('a');
    downLoadLinkDom.style.display = 'none';
    downLoadLinkDom.href = this.url !== null && this.url || ''
    downLoadLinkDom.download = fileName || ''
    downLoadLinkDom.click();
    return this
  }
}
