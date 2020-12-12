const fs = require('fs');

const makeModule = () => {
  let allModules = {};

  // we list every files from current folder (except index.js)
  let allFilesInFolder = fs.readdirSync(__dirname);

  for (let filename of allFilesInFolder) {
    // we skip index
    if (filename === 'index.js') { continue }

    // or we define moduleName in terms of file name
    let moduleName = filename.slice(0,-3);
    // we require listed files into an object
    allModules[moduleName] = require('./'+filename);
  }

  // return this objet
  return allModules;

}

module.exports = makeModule();