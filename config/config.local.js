'use strict';

// only read at development mode, will override config.default.js
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
      // /curl/i,
      /Baiduspider/i,
    ],
  };

  return config;
};
