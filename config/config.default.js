'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1517065608274_7178';

  // add your config here
  config.middleware = [];

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.news = {
    pageSize: 10,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  config.middleware = [
    'robot',
  ];

  config.robot = {
    ua: [
      /curl/i,
      /Baiduspider/i,
    ],
  };

  exports.mysql = {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'digimon',
      password: 'digimon',
      database: 'digimon',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  return config;
};
