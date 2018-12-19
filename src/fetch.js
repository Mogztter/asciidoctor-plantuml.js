const fs = require('fs')
const randomstring = require('randomstring')
const path = require('path')
const mkdirp = require('mkdirp')

module.exports.save = function (diagramUrl, doc, target, format) {
  const dirPath = path.join(doc.getAttribute('imagesoutdir') || '', doc.getAttribute('imagesdir') || '')
  mkdirp.sync(dirPath)
  const diagramName = `${target || randomstring.generate()}.${format}`
  const content = doc.readContents(diagramUrl)
  fs.writeFileSync(path.format({dir: dirPath, base: diagramName}), content)
  return diagramName
}
