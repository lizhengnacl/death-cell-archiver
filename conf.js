const path = require('path');
const YAML = require('yaml');
const fs = require('fs');

class Config {
  read() {
    return YAML.parse(fs.readFileSync(path.resolve(__dirname, './conf.yml'), 'utf8'));
  }

  set(path) {
    let conf = this.read();
    conf.path = path;
    let content = YAML.stringify(conf);
    fs.writeFileSync(path.resolve(__dirname, './conf.yml'), content, 'utf8');
  }
}

let conf = new Config();
module.exports = conf;
