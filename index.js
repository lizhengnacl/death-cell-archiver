const path = require('path');
const cpFile = require('cp-file');
const conf = require('./conf');

class Store {
  constructor({source, target}) {
    this.source = source;
    this.target = target;
  }

  _checkName(name) {
    if (typeof name !== 'string') {
      throw '输入存档名，例如 awesome、backup、2020-08-15 等等';
    }
  }

  /**
   * 当指定文件，复制到目标地址
   * @param name 存档名称
   */
  save(name) {
    this._checkName(name);
    cpFile.sync(this.source, path.resolve(this.target, name));
  }

  /**
   * 使用存档
   * @param name 存档名称
   */
  load(name) {
    this._checkName(name);
    cpFile.sync(path.resolve(this.target, name), this.source,
      {overwrite: true});
  }
}

// 读取配置地址
let config = conf.read();

function resolvePath(pathName) {
  // ~
  if (pathName.indexOf('~') === 0) {
    pathName = require('os').homedir() + pathName.slice(1);
  }
  return pathName;
}

let s = new Store({
  source: resolvePath(config.path),
  target: path.resolve(__dirname, 'data'),
});

module.exports = s;
