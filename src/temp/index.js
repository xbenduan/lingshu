const { clone } = require('./utils');

const action = {
  /**
   * 更新项目
   */
  update: () => {
    console.log('update');
    clone();
  },

  /**
   * 初始化项目
   */
  init: (data) => {
    console.log('data', data);
  },
};

const test = (parse) => {
  const keys = Object.keys(parse);
  keys.find((item = '') => {
    if (parse[item] && action[item]) {
      action[item](parse[item]);
      return true;
    }
    return false;
  });
};

module.exports = { test };
