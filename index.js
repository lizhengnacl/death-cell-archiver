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

let s = new Store({
  // /Users/lizheng/Library/Application Support/Steam/userdata/314391335/588650/remote/user_0.dat
  source: config.path,
  target: path.resolve(__dirname, 'data'),
});

module.exports = s;
