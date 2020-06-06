function FileMinPlugin(options = {}) {
  return function () {
    this.register('output-file', function ({ filename, code, encoding }) {
      // 替换 wxml js wxss 文件的 BBB
      if (/\.(wxss|js|wxml)$/.test(filename)) {
        code = code.replace(/BBB/g, 'XXX')
      }
      return Promise.resolve({
        filename,
        code,
        encoding
      })
    })
  }
}

module.exports = FileMinPlugin
