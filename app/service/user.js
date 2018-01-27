'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find(uid) {
    const user = await this.app.mysql.get('dm_user', { id: uid });
    this.ctx.logger.debug(user);
    return { user };
  }
}

module.exports = UserService;
