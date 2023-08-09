(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.FielHelper = {}));
})(this, (function (exports) { 'use strict';

  var isBlob = (function (dataSource) {
      var isBlob = typeof dataSource === "object" && dataSource instanceof Blob;
      return isBlob;
  });

  var isFile = (function (dataSource) {
      var isFile = typeof dataSource === "object" && dataSource instanceof File;
      return isFile;
  });

  var turnBlobToUrl = (function (blob) {
      var blobUrl = URL.createObjectURL(blob);
      return blobUrl;
  });

  var isArrayBuffer = (function (dataSource) {
      var isArrayBuffer = dataSource instanceof ArrayBuffer || dataSource instanceof Uint8Array;
      return isArrayBuffer;
  });

  // 文件type映射表
  var suffixMapper = {
      jpg: "image/jepg",
      jpeg: "image/jepg",
      png: "image/png",
      gif: "image/gif",
      bmp: "image/bmp",
      webp: "image/webp",
      mp3: "audio/mpeg",
      wav: "audio/wav",
      ogg: "audio/ogg",
      mp4: "video/mp4",
      webm: "video/webm",
      ogv: "video/ogg",
      pdf: "application/pdf",
      zip: "application/zip",
      json: "application/json",
      xml: "application/xml",
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      xls: "application/vnd.ms-excel",
      ods: "application/vnd.oasis.opendocument.spreadsheet"
  };

  var getSuffixType = (function (suffix) {
      if (!suffix || suffixMapper[suffix] === undefined) {
          console.warn("The type ".concat(String(suffix), " is not a supported suffix"));
          return undefined;
      }
      return suffixMapper[suffix];
  });

  var FileExample = /** @class */ (function () {
      function FileExample(blobUrl) {
          this.url = blobUrl;
      }
      FileExample.prototype.remove = function () {
          console.log(this.url, this, 111);
          this.url && window.URL.revokeObjectURL(this.url);
      };
      FileExample.prototype.download = function (fileName) {
          var downLoadLinkDom = document.createElement('a');
          downLoadLinkDom.style.display = 'none';
          downLoadLinkDom.href = this.url !== null && this.url || '';
          downLoadLinkDom.download = fileName || '';
          downLoadLinkDom.click();
          console.log(this, 111);
          return this;
      };
      return FileExample;
  }());

  var stepArray = [blobToUrl, fileToUrl, arrayBufferToUrl];
  function blobToUrl(dataSource) {
      if (isBlob(dataSource)) {
          var url = turnBlobToUrl(dataSource);
          return url;
      }
      throw Error;
  }
  function fileToUrl(dataSource) {
      if (isFile(dataSource)) {
          var blob = new Blob([dataSource], { type: dataSource.type });
          return blobToUrl(blob);
      }
      throw Error;
  }
  function arrayBufferToUrl(dataSource, type) {
      if (isArrayBuffer(dataSource)) {
          var blob = new Blob([dataSource], { type: getSuffixType(type) || '' });
          return blobToUrl(blob);
      }
      throw Error;
  }
  function fileHelper(option) {
      var url = '';
      for (var i = 0; i < stepArray.length - 1; i++) {
          try {
              url = stepArray[i](option.of, option.suffix);
              break;
          }
          catch (err) {
              continue;
          }
      }
      return new FileExample(url);
  }

  exports.fileHelper = fileHelper;

}));
//# sourceMappingURL=index.js.map
