import { Knex } from 'knex';
const { SALT = '3' } = process.env;
import USERS_DATA from './00-users.json';
import * as bcrypt from 'bcryptjs';

exports.seed = function (knex: Knex) {
  return (
    knex
      .raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE')
      // .then(function () {
      //   return USERS_DATA.forEach((USER: any) => {
      //     USER.password = bcrypt.hashSync(USER.password, parseInt(SALT) || 2);
      //   });
      // })
      .then(function () {
        return knex('users').insert(USERS_DATA);
      })
  );
};
